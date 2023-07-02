---
id: image
title: 镜像
slug: image
order: 8
---

扩展 flink 和 flink-kubernetes-operator 镜像

## 扩展镜像

### Flink

- 启用文件系统插件。参考 [File Systems](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/overview/)
  - [Amazon S3](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/s3/)
  - [Aliyun Object Storage Service (OSS)](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/oss/)
  - [HDFS](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/overview/#hadoop-file-system-hdfs-and-its-other-implementations)

### Flink Kubernetes Operator

- 启用文件系统。参考 [FlinkSessionJob spec overview](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/custom-resource/overview/#flinksessionjob-spec-overview)

## 启用镜像

### Flink

- 指定镜像。参考 [FlinkDeployment spec overview](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/custom-resource/overview/#flinkdeployment-spec-overview)

### Flink Kubernetes Operator

- 指定镜像。参考 [Overriding configuration parameters during Helm install](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/operations/helm/#overriding-configuration-parameters-during-helm-install)