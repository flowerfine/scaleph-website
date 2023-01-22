---
id: options
title: 配置
slug: options
order: 2
---

在基于 Flinkful 的 Flink 任务管理中，所有的配置项都是 Flink 支持的原生配置。

然而切换到 Flink Kubernetes Operator 后，Flink 任务管理是通过 operator 实现的，`scaleph` 不在关注任务如何提交、停止，专注于后台逻辑的流畅性。相应地 Flink 任务的配置项也有很大的变化。

- 在 Flink 的原生配置基础上，新增 2 类：Flink Kubernetes Operator 的 spec 规范和 Flink Kubernetes Operator 提供的 Flink 配置。
- Flink 原生配置在容错、任务提交重试等场景存在局限性，部分配置被功能更强大的 Flink Kubernetes Operator 配置取代。

## Spec 配置

在 spec 中的配置主要分为 2 部分：

- 基本配置
- JobManager、TaskManager 资源分配

基本配置中最核心的是 Flink 镜像。通过定制 Flink 镜像，可以实现对核心功能进行干预：

- 改进 Flink。如阿里云 Flink 实时计算服务提供了 GeminiStateBackend 实现，vvp catalog 功能。
- 启用插件。Flink 插件 jar 需要用户自行启动，将 opt 目录下的插件 jar 复制到 plugins 插件目录中。

Flink 向 YARN 或 Kubernetes 申请资源时，需提供 `org.apache.flink.client.deployment.ClusterSpecification`。Flink 提供了 JobManager、TaskManager 资源相关的配置：

- JobManagerOptions#TOTAL_PROCESS_MEMORY
- TaskManagerOptions#TOTAL_PROCESS_MEMORY
- TaskManagerOptions#CPU_CORES

Flink Kubernetes Operator 提供 Kubernetes Pod 级别的资源参数，更加直观：

```yaml
spec:
  job:
    parallelism: 0
  jobManager:
    resource:
      cpu: 1
      memory: 1G
    replicas: 1
  taskManager:
    resource:
      cpu: 1
      memory: 2G
    replicas: 1
```

## Flink Kubernetes Operator 配置

operator 相比 Flink 的 Native Kubernetes 集成方式，通过 CRD 和 operator，以云原生的方式提供完整的 Flink 应用部署生命周期：

- 部署生命周期管理。
- 多种部署模式。Application、Session 和 Standalone 实例。
- 多版本。同时支持 1.13、1.14、1.15 和 1.16。
- 容错。集群健康检查和重启。
- savepoint 管理。手动和周期性的 savepoint 管理。
- 分层配置。支持逐级配置覆盖。

`scaleph` 将关键性的任务重启和 savepoint 管理配置提取出来，引导用户关注：

- 任务重启。Flink 本身的 `fixed-delay`、`failure-rate`、`exponential-delay` 容错机制是可以实现任务重启的。当任务遭遇不可恢复的失败时，任务不会遵从容错配置直接失败。operator 提供 Flink 应用健康状态功能，可以对异常的任务进行初始化的重启。
- 周期性 savepoint 和 savepoint 管理。Flink 应用需要手动触发 savepoint，Flink Kubernetes Operator 提供了周期性生成 savepoint 和 savepoint 管理功能，能够定时创建 savepoint，自动移除过期的 savepoint。
- 日志。

## Flink 配置

依然保留了 Flink 的 checkpoint、容错和 ha 配置信息，支持自定义配置。
