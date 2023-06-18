---
id: kubernetes
title: Flink Kubernetes
slug: kubernetes
order: 1
---

基于 [Flink Kubernetes Operator](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.3/docs/custom-resource/overview/) 提供云原生的 Flink Kubernetes 支持。

## FlinkDeployment

flink-kubernetes-operator 提供了 `FlinkDeployment` CRD 资源，用以提交 Session、Application 任务，还支持 Standalone 集群。

但是像一些核心功能：

- 任务生命周期管理。suspend 是改变 FlinkDeployment `spec` 配置实现的。
- 任务升级。stateful 和 stateless。
- savepoint。自动的 savepoint 和 savepoint 管理。
- 容错。
- pod 配置
- 日志功能

这些功能都是直接通过 FlinkDeployment 的配置实现的，需要抽象出新的配置，将 FlinkDeployment 作为底层，供上层使用，封装出相关接口，供系统集成。

具体抽象出的新对象如下：

- 模板功能。只提供 application 级别的模板，session cluster 和 standalone 作为测试使用。
- 任务。
- savepoint。
- 资源统计。提供任务的资源总量，消耗量。

## 核心概念

### Artifact

Jar，SQL，SeaTunnel

### Template

作业模板，辅助用户快速创建任务，减少用户在通用配置上耗费的时间和精力。

* Kubernetes 配置。
* 资源配置。CPU & Memory
* flink 配置
* log 配置
* Pod 模板
* Ingress 配置

### Deployment

application 提交方式

### SessionCluster

session cluster 和 session 提交方式

### Job

application 和 session 两种

运行时配置，提前配置。

资源（JobManager，TaskManager），自定义配置（配置优先级）。

JobInstance。
