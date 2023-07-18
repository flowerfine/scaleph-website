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
- 更少的组件。更短的数据链路也会主动缩减数据链路使用的组件。比如以 iceberg、hudi 和 Flink Table Store 为代表的新一代流批一体存储方案，力图实现数据采集、计算和查询阶段的统一存储方案，而不是采集阶段采用 Kafka 追求低延迟、高吞吐，计算阶段选用大规模和廉价数据存储，查询阶段又采用一种新的存储方案对数据进行加速。
- 更方便的运维。资源规划越来越难以匹配数据规模的增长，而 Hadoop 时代的存算一体在运维的不便逐步被存算分离取代，购买机器搭建服务的扩容方式逐步被云厂商 Serverless 取代。

对于企业来说，在释放数据能力上，越来越需要`一站式数据平台`：

- 数据开发能力。`数据集成`、`任务调度` 和 `ETL 任务`。
- 数据治理能力。`数据质量`、`数据血缘` 、`数据地图`、`指标系统`和 `数据建模` 等。
- 数据产品能力。`ad-hoc 查询`、`BI 报表`、数据应用等。

`scaleph` 定位在 admin 后台系统，整合、封装 Flink、SeaTunnel 等引擎，连通众多组件，提供开箱即用的一站式数据平台。

## 能力地图

`scaleph` 始于 2022 年初，一开始的定位在于为 SeaTunnel 开发一个 web 管理系统，实现 SeaTunnel 任务的创建、提交、停止等功能，类似 Datax 和 Datax-web 之类的组合。在数据集成的功能上不断扩展，逐步向相关领域扩展，支持的功能如下：

- 项目管理

  - 任务开发。

    - Jar 任务管理。上传基于 Flink DataStream API 开发的 jar 包。
    - SQL 任务管理、在线开发。在线 Flink SQL 编辑器，基于 SQL Gateway 提供在线调试、运行。
    - SeaTunnel 任务管理、拖拉拽在线开发。基于 2.3.1，运行在 Flink 引擎上。

  - 任务运维。
    - Flink 管理。提供了 Template -> Session-Cluster、Deployment -> Job 的层级管理。

- 数据源管理。对主流数据源提供管理，支持数据源连接信息的统一管理和共享。
- 资源管理。Kubernetes 集群管理
- 数据标准。
- 后台系统。
  - 数据字典
  - 权限管理
  - 系统任务

## 开放

`scaleph` 是一个开放的数据平台，源码、CI、镜像和网站都托管在 github 上，使用公共免费资源组织开发活动。

除此之外，`scaleph` 服务端也采用了多种方式增加系统扩展性：

- 插件化。
- 统一接口。

### 插件化

`scaleph` 做引擎集成时会面对很多的问题，如开发 Flink 任务管理时：

- 如何支持 Standalone、YARN 和 Kubernetes？
- 如何支持 Flink 1.13、1.14、1.15、1.16？
- 如何支持部署任务到多个 Hadoop 集群，Kubernetes 集群？

生成 SeaTunnel 配置文件时也会面临多样的参数问题：

- SeaTunnel 的 v2 connector 众多，同一个 connector 中的参数会存在相互依赖或者互斥现象。case by case 的为每个 v2 connector 实现配置生成功能是一件相当繁琐的事情。
- 数据源和 SeaTunnel 任务参数。`scaleph` 的数据源管理模块的信息如何与 SeaTunnel 任务配置生成结合在一起。比如数据源管理的 Jdbc 数据源信息在被 connector 表单中指定时，生成配置如何串联二者？
- SeaTunnel 的参数分为 2 类。任务参数和环境参数，比如 Jdbc 插件，需提供 Jdbc 连接等任务参数，对于 HdfsFile 插件，可以通过参数指定 `core-site.xml` 等配置文件地址。`scaleph` 提供了数据源管理功能，Jdbc 连接和 HdfsFile 的配置文件信息都可以算作数据源信息的一部分，但是二者一个是在配置生成时起效，一个是在任务运行期间起效。

对于 Flink 任务管理遇到的多版本兼容问题，就可以通过插件化方式解决，提供 Flink 版本插件，处理不同版本的提交问题。对 Standalone、YARN 和 Kubernetes 的支持则是通过 Flink 内部的 SPI 机制解决的，与 `scaleph` 的插件方案思路一致。

对于 SeaTunnel 的配置生成问题，`scaleph` 服务端通过插件与声明化配置参数极大简化了 connector 集成的复杂性，开发者的主要工作为声明 connector 参数。

### 统一接口

`scalep` 对于调度有多样的需求：

- 定时调度。`scaleph` 在用户提交 Flink （SeaTunnel 任务仅支持运行在 Flink 上面）后，需持续获取任务状态，同步到 `scaleph`系统中。
- pipeline 流水线。现代的 devops 体系很有效地在灵活和扩展方面支持应用的发布、提交和停止等功能，`scaleph` 实现 Flink 任务管理功能时可以借鉴特性。
- 耗时异步任务。如大文件上传等一些长耗时异步任务，页面上采用同步等待的方式，使用体验感差。
- DAG 调度。对于离线任务开发，包括 SeaTunnel 数据集成和 Flink ETL 任务，都需要 DAG 编排任务依赖，实现定时调度功能。

通过技术调研，确定了如下优秀的开源项目：

- [easy-flows](https://github.com/j-easy/easy-flows)
- quartz
- [jobrunr](https://github.com/jobrunr/jobrunr)
- [temporal](https://www.temporal.io/)
- [dolphinscheduler](http://dolphinscheduler.apache.org/)
- [argo](https://github.com/argoproj/argo-workflows)

`scaleph` 基于 [easy-flows](https://github.com/j-easy/easy-flows) 项目定义了一套统一的 workflow 和 task API，用以满足定时任务、pipeline 和 DAG 需求。目前提供了 `quartz` 实现支持定时任务。
