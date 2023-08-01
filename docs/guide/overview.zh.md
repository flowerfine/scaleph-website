---
id: overview
title: 概览
slug: overview
order: 0
---

`scalelph` 是一个基于 Flink 和 Kubernetes 打造的开放数据平台，具备 Flink 和 SeaTunnel 任务管理能力。

## 新功能预告

_网站文档已经开始基于将要发布的 `2.0.0` 版本进行调整，进行发版准备，相比上一个 `1.0.4` 发版会有极大不同。_

距离 `1.0.4` 发布以来，`scaleph` 开始筹划 Flink 任务管理底层实现由 [flinkful](https://github.com/flowerfine/flinkful) 向 [Flink Kubernetes Operator](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-stable/) 迁移，新功能将在 `2023-07` 期间以 `2.0.0` 版本发布，同时还有非常多的核心特性：

- SQL 在线开发。基于 [SQL Gateway](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/table/sql-gateway/overview/) 提供 Flink SQL 任务在线开发、调试。
- SeaTunnel 任务拖拉拽开发体验。基于 [SeaTunnel](https://seatunnel.apache.org/) 提供拖拉拽的在线数据集成任务开发体验，运行在 Flink 引擎上。
- Flink 任务管理。基于 [Flink Kubernetes Operator](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-stable/) 实现云原生 Flink 任务管理，统一管理 Jar、SQL 和 SeaTunnel 任务运行。

## 企业级后台管理系统

在大数据领域中，开源项目如雨后春笋，层出不穷，计算引擎、存储引擎、查询引擎、数据湖，百花齐放，相关技术演进日新月异，让人应接不暇，但是总体呈现如下趋势：

- 更低的数据延迟。尤以 Flink 的新 sloan `实时即未来` 为代表。
- 更短的数据链路。过长的数据链路一方面增加延迟，另一方面也暴露出企业在打通数据链路时，数据的采集、分发、计算采用不同的组件，如 Flink CDC 为数据采集、分发和计算提供完整地解决方案。
- 更少的组件。更短的数据链路也会主动缩减数据链路使用的组件。比如以 [IceBerg](https://iceberg.apache.org/)、[Hudi](https://hudi.apache.org/) 和 [Paimon](https://paimon.apache.org/) 为代表的新一代流批一体存储方案，力图实现数据采集、计算和查询阶段的统一存储方案，而不是采集阶段采用 Kafka 追求低延迟、高吞吐，计算阶段选用大规模和廉价数据存储，查询阶段又采用一种新的存储方案对数据进行加速。
- 更方便的运维。资源规划越来越难以匹配数据规模的增长，而 Hadoop 时代的存算一体在运维的不便逐步被存算分离取代，购买机器搭建服务的扩容方式逐步被云厂商 Serverless 取代。

对于企业来说，在释放数据能力上，越来越需要`一站式数据平台`：

- 数据开发能力。`数据集成`、`任务调度` 和 `ETL 任务`。
- 数据治理能力。`数据质量`、`数据血缘` 、`数据地图`、`指标系统`和 `数据建模` 等。
- 数据产品能力。`ad-hoc 查询`、`BI 报表`、数据应用等。

`scaleph` 定位在 admin 后台系统，整合、封装 [Flink](https://flink.apache.org/)、[SeaTunnel](https://seatunnel.apache.org/) 等引擎，连通众多组件，提供开箱即用的一站式数据平台。

## 能力地图

`scaleph` 始于 2022 年初，一开始的定位在于为 SeaTunnel 开发一个 web 管理系统，实现 SeaTunnel 任务的创建、提交、停止等功能，类似 Datax 和 Datax-web 之类的组合。在数据集成的功能上不断扩展，逐步向相关领域扩展，支持的功能如下：

- 项目管理

  - 任务开发。

    - Jar 任务管理。上传基于 Flink DataStream API 开发的 jar 包。
    - SQL 任务管理、在线开发。在线 Flink SQL 编辑器，基于 [SQL Gateway](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/table/sql-gateway/overview/) 提供在线调试、运行。
    - SeaTunnel 任务管理、拖拉拽在线开发。基于 2.3.1，运行在 Flink 引擎上。

  - 任务运维。
    - Flink 管理。与 [Flink Kubernetes Operator](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-stable/) 深度集成，以 operator 模式提供了 Template -> Session-Cluster、Deployment -> Job 的 Flink 任务层级管理。 
  
- 数据源管理。对主流数据源提供管理，支持数据源连接信息的统一管理和共享。
- 资源管理。Kubernetes 集群管理
- 数据标准。
- 后台系统。
  - 数据字典
  - 权限管理
  - 系统任务
