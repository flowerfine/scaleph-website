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

## 路线图

模板功能。提供表单配置引导用户关注核心配置，提供编辑器配置支持用户自定义配置以及查看最终配置。
