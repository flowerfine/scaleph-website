---
id: design
title: 设计
slug: design
order: 2
---

在综合 DolphinScheduler 和 gitops 工作流的基础上，设计 `scaleph` 统一版本管理功能。

## 快照时机

在 git 版本管理中，开发者在分支上进行开发，当工作进行到一定阶段就可以把更改过的变动作为一个整体进行提交，当开发完成后即可将所有提交 push 到远端。

因此在记录版本快照的时候需要有一个明确地 **提交** 动作。当提交完成后，将插入或更新的数据 copy 出来，整体作为一个快照，并维护版本号。

## 快照存储

在 DolphinScheduler 方案中为需要增加版本管理功能的表结构增加日志表。

考虑到版本管理的日志表只是承担历史记录存储的功能，操作有限：

- 插入
- 删除
- 查询。根据 id 点查，列表分页查询

可以大胆采用一张表存储 `scaleph` 系统的所有版本管理日志数据，表结构设计如下：

```sql
DROP TABLE IF EXISTS `version_snapshot`;
CREATE TABLE `workflow_schedule`
(
    `id`               BIGINT      NOT NULL AUTO_INCREMENT,
    `snapshot_name`    varchar(64) NOT NULL,
    `snapshot_id`      BIGINT      NOT NULL,
    `snapshot_version` INT         NOT NULL,
    `data`             VARCHAR(64),
    `creator`          VARCHAR(32),
    `create_time`      DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `editor`           VARCHAR(32),
    `update_time`      DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    UNIQUE KEY `idx_snapshot` (`snapshot_name`, `snapshot_id`, `snapshot_version`)
) ENGINE = InnoDB COMMENT ='version sanpshot';
```

其中 `snapshot_name` 表示场景，如 seatunnel 任务、flink sql 任务，`snapshot_id` 为 seatunnel 任务 id、flink sql 任务 id。

在考虑到除了在 web 页面查看版本历史外，其余场景都是点操作，甚至可以考虑采用文件系统存储日志数据，数据库中存储日志记录。

## 数据格式

版本管理的一大利用场景就是历史版本记录，可以进行回滚、diff 操作。

### 快照数据

快照中需要放入数据，记录当前的状态。

`scaleph` 采用关系型数据库作为存储方案，表之间的关系存在一对多和多对多。

这种引用别的数据，但是表结构中只存储一个 id 的场景会造成被引用数据发生修改，而导致任务本身无修改但是任务异常的问题。如果在存储快照数据时，把那些只存储 id 的数据查询出来，一起放入快照中，会导致数据回滚的时候变得复杂。

### 快照 diff

而 diff 操作实现需要比较数据的异同，找出数据的不同点。数据的 diff 操作可以参考 flink-kubernetes-operator 的[做法](https://github.com/apache/flink-kubernetes-operator/tree/release-1.3/flink-kubernetes-operator-api/src/main/java/org/apache/flink/kubernetes/operator/api/diff)。
