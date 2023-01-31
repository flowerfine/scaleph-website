---
id: roadmap
title: 路线图
slug: roadmap
order: 1
---

`scaleph` 关于数据平台的底层功能路线图

## 数据集成

### SeaTunnel DAG 优化

- 快捷键绑定。SeaTunnel 任务可视化编辑页面支持快捷键，粘贴复制、撤销等操作。无说明文档，用户无法了解相关功能，需在功能栏暴露这些功能，并添加提示
- connector 展示优化。优化 source、sink 和 transform（transform 尚未支持）的显示
- connector 列表标签。通过为 SeaTunnel 的 connector 添加标签，如成熟度标签：beta，ga 等
- 多版本管理问题修复。

### 一键同步

目前的 SeaTunnel 任务可视化编辑页面只是采用拖拉拽的方式描述 connector 的关系，用户仍然需要挨个配置 connector。数据集成场景需要用户干预的场景只是少数，多数情况只是简单地异构数据源同步，尤其是整库同步场景。

`scaleph` 仍然需要结合元数据功能，提供任务的自动创建，实现**一键同步**功能。

### 实时场景

通常意义上的实时场景包含 2 个：

- 消息队列。如 Kafka，Pulsar。SeaTunnel 已支持。
- CDC 数据（一般指数据库 binlog）。SeaTunnel 自身在开发 CDC 功能，已推出 Mysql-CDC connector。

flink-cdc-connectors 提供了 CDC 数据和 Flink 的集成，项目成熟生产环境应用案例多，可考虑使用 SeaTunnel v1 connectors 对 flink-cdc-connectors 封装。

- SeaTunnel 多引擎支持
- SeaTunnel v1 connector 实现
  - flink-cdc-connectors
  - hudi
  - iceberg

## 数据开发

数据开发代指 Flink 任务开发。

### Kubernetes 支持

现在 `scaleph` 对于 Flink 支持如下：

- 版本。1.13
- 集群。
  - Standalone。Session
  - YARN。Session，Per-Job，Application
  - Kubernetes。Session

`scaleph` 对于 Kubernetes 支持的力度有限，Session 模式无法支撑生产级应用。Flink 社区推出了 [flink-kubernetes-operator](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-stable/) 提供云原生的 Flink 任务生命周期管理：

- 提交、暂停和恢复应用。
- Stateful 和 Stateless 升级应用。
- 手动+自动化管理 savepoint。
- 容错
- 多版本支持。1.13，1.14，1.15，1.16
- 部署模式。Session，Application

`scaleph` 基于 flink-kubernetes-operator 提供云原生的 Flink 任务管理

### SQL 任务

SQL 脚本的管理不适合放入代码仓库，而且 SQL 任务比 DataStream API 开发的任务更加轻量，用户开发 Flink SQL 任务时需要一个简单轻量的 web 编辑器：

- SQL 脚本管理
- SQL 任务开发编辑器
- SQL 任务在线调试
- SQL 任务提交

Flink SQL 创建的 Table 分为 permanent 和 temporal，permanent Table 存储在 catalog 中，不同的 SQL 任务可以共享创建的 table。Flink 提供的 catalog 分为 2 类：

- HiveMetadata，GenericInMemoryCatalog。通用型的 catalog，可以对 database，tables 进行增删改查操作。
- JdbcMetadata。对于存储系统的直接映射，避免用户重复定义 DDL，一般不支持创建修改删除操作，只能查询。但有些此类闭源 catalog 实现也提供了创建修改删除操作，当进行创建修改删除操作时也会在存储系统中进行同步创建修改删除操作。

为支持 Flink SQL metadata 存储，需提供 catalog 管理功能：

- catalog 管理。注册，删除
- 自定义通用型 catalog 实现。

## 任务调度

实时任务一直运行，无需实现周期性的重复运行，对于调度任务没有需求。

离线任务需要调度进行周期性运行，离线任务往往不是单独运行的，一般都会有上下游依赖需求，需要调度支持 DAG 功能，支持离线任务编排。

`scaleph` 对 SeaTunnel 和 Flink 任务支持 DAG 调度。
