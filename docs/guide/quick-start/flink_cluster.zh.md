---
id: flink_cluster
title: Flink 集群
slug: flink_cluster
order: 2
---

Flink 支持与 YARN、Kubernetes 资源调度系统集成，实现资源的动态申请和释放，适应不同规模的数据任务。

另外，Flink 作为有状态的流式计算引擎，状态存储、checkpoint 配置会直接影响数据的准确性，[High Availability](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#high-availability) 和 [Fault Tolerance](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#fault-tolerance) 配置会在异常出现时有足够的弹性容错，其余如日志、监控等可以让开发者了解任务运行细节，便于排查问题。

而优秀的 Flink 商业云服务，通过整合 Kubernetes、存储、日志、Prometheus 等提供大量的 pre-defined decision，让用户得到开箱即用的 Serverless 开发体验，让用户无需关心 Flink 运行细节，集中精力关注 Flink 任务开发即可。

像阿里云基于 VVR 引擎提供的 Flink 实时计算服务：

- 基于 ACK 提供容器资源。
- 基于 OSS 提供存储服务，用于存储 Jar、checkpoints 和 savepoints，High availability 数据等。
- 基于 SLS 日志服务，用户可以自定义 Flink 任务模板将日志输出到 SLS 日志服务中。
- Prometheus 监控，Flink 实时计算服务需要开通额外的 Prometheus 服务用于 Flink 任务监控。

但是商业云服务也会存在大量的厂商绑定问题，以阿里云 Flink 实时计算服务为例：

- VVR 引擎相比开源 Flink 有一定的改变，VVR 的 connector 需使用与开源 Flink connector 兼容的 ververica connector，造成以 DataStream API 开发的任务在本地使用开源 Flink connector，实际运行时需切换到 VVR connector。
- 开通 Flink 实时计算服务，需额外开通额外的服务，如 OSS、Prometheus、SLB 等。如果企业是初次尝试使用阿里云云服务，采用 Flink 实时计算服务时会连带开通多项服务。

开源的 `scaleph` 在提供 Flink 服务时需考虑到用户多种多样的硬件和服务环境，难以如云厂商一样直接锚定某个解决方案，需提供兼容性，因此 `scaleph` 将核心配置项挑选出来，通过分步表单引导用户思考如何保障 Flink 任务稳定运行。

- [Checkpointing](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#checkpointing)
- [Checkpoints and State Backends](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#checkpoints-and-state-backends)
- [High Availability](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#high-availability)
- [Fault Tolerance](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#fault-tolerance)
- [Memory Configuration](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#memory-configuration)
- [Execution](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#execution)
- [Pipeline](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#pipeline)
- [Metrics](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#metrics)
- [JVM and Logging Options](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/config/#jvm-and-logging-options)

`scaleph` 从上述核心配置项中，提炼出的分步表单参数如下：

- State & Checkpoints & Savepoints
- Fault Tolerance
- High Availability
- Resource Configuration
- Additional Config Options

为了避免用户每次都需重复配置，`scaleph` 提供了集群配置模板功能，通过预设的模板，用户可以直接使用统一的配置，同时可以在任务级别，对配置模板进行调整。

## 集群配置

集群配置模板位于项目内，用户需提前创建项目：

![create_project](../../../site/images/guide/quick-start/cluster/create_project.png)

在`集群管理 -> 集群配置` 创建集群配置模板：

![cluster_config_01](../../../site/images/guide/quick-start/cluster/cluster_config_01.png)

![cluster_config_02](../../../site/images/guide/quick-start/cluster/cluster_config_02.png)

如果集群模板选择了 Session 类型，则需进一步在 `集群管理 -> 集群实例` 创建模板对应的 Session 集群：

![cluster_instance_01](../../../site/images/guide/quick-start/cluster/cluster_instance_01.png)

![cluster_instance_02](../../../site/images/guide/quick-start/cluster/cluster_instance_02.png)
