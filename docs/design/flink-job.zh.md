---
id: flink-job
title: Flink 任务管理
slug: flink-job
order: 2
---

`scaleph` 目前只支持 SeaTunnel 运行在 Flink 引擎上，任务管理功能围绕 Flink 实现，而且在此基础上，延伸出 Flink Jar 和 SQL 任务管理的新 Feature。本文详细介绍 `scaleph` 的设计思路。

目前在作业管理功能上，可以支持 3 种类型的作业：

- Jar
- SQL
- SeaTunnel

接下来将从 2 个方面介绍，3 种类型的作业的异同点。

## 任务生命周期

根据 `zero to zero` 的思想，一个任务的完整生命周期如下：

- 创建
- 提交
- 停止
- 失败
- 历史记录

对于 Flink 任务来说，Jar、SQL 和 SeaTunnel 三种作业的差异只会出现在创建和提交阶段，其中 SeaTunnel 作业的提交完全是采用 Jar 形式，那么 Flink 任务的提交只有 2 种实现 Jar 和 SQL。其余的如 Session、Application 模式，Standalone、YARN 和 Kubernetes 集群的支持对于 Jar 和 SQL 都是相通的。

因此在实现 Flink 任务管理时，`scaleph` 只需要关注创建和提交阶段的不同即可，其余的停止、失败和任务的历史记录，以及任务运行期间的状态同步、savepoint 等功能都是相通的。

## 任务组成

`scaleph` 对于 Flink 任务的设计有 3 张核心表：

- flink-job。任务配置，由 artifact + cluster + config 组成。
- flink-instance。任务提交后的实例信息，主要是 Flink 任务启动后从 Flink 中获取的信息。
- flink-log。log 表和 instance 表字段一致。instance 运行结束后（失败或完成），就会变成任务的历史记录，转入 log 表。

根据上述任务生命周期的分析，也可以很轻松地得出：Jar、SQL 和 SeaTunnel 3 种作业的差异只会存在于 flink-job 表中，当任务一旦提交，开始运行后，后续的处理流程都是相通的。

```sql
CREATE TABLE `ws_flink_job` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '自增主键',
  `project_id` bigint NOT NULL COMMENT '项目id',
  `type` varchar(4) NOT NULL COMMENT '作业类型 0: jar, 1: sql, 2: seatunnel',
  `code` bigint NOT NULL COMMENT '作业编码',
  `name` varchar(255) NOT NULL COMMENT '作业名称',
  `flink_artifact_id` bigint NOT NULL COMMENT '作业artifact id',
  `flink_cluster_config_id` bigint NOT NULL COMMENT '集群配置id',
  `flink_cluster_instance_id` bigint NOT NULL COMMENT '集群实例id',
  `job_config` text COMMENT '作业配置，对应作业变量',
  `flink_config` text COMMENT '作业级别集群配置',
  `jars` text COMMENT '作业依赖资源',
  `creator` varchar(32) DEFAULT NULL COMMENT '创建人',
  `create_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `editor` varchar(32) DEFAULT NULL COMMENT '修改人',
  `update_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `idx_code` (`code`),
  KEY `idx_name` (`type`,`name`),
  KEY `idx_flink_artifact` (`type`,`flink_artifact_id`),
  KEY `idx_flink_cluster_config` (`flink_cluster_config_id`),
  KEY `idx_flink_cluster_instance` (`flink_cluster_instance_id`)
) ENGINE=InnoDB COMMENT='flink作业信息';
```

上述是 flink-job 表的设计，其中 `type`、`flink_artifact_id` 和 `job_config` 是任务 artifact 信息。那么什么是任务的 artifact 呢？

- Jar。artifact 是基于 DataStream API 开发的 jar 包。
- SQL。artifact 是基于 Flink SQL 开发的 sql 脚本。
- SeaTunnel。artifact 本质上是 SeaTunnel Release 中 starter 和 connector jar，在 `scaleph` 中通过拖拉拽画布实现 SeaTunnel 配置的生成，在真正提交的时候，SeaTunnel 配置只是作为一个参数 `--config xxx.json` 作为 starter jar 的 `main(String[] args)` 参数传进去即可。

因此在 flink-job 表中，通过几个字段保存不同作业的 artifact 即可。

在 web 端和 server 端的设计上，也是专注于 3 种作业的 artifact 生成：

- Jar。web 端提供 Artifact 页面用于用户上传 jar 包。
- SQL。正在规划中，web 端提供在线 SQL 编辑器供用于在线开发 Flink SQL 作业。
- SeaTunnel。web 端提供拖拉拽画布用于创建 SeaTunnel 作业。
