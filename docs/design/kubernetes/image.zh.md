---
id: image
title: 镜像
slug: image
order: 8
---

扩展 flink 和 flink-kubernetes-operator 镜像

为了打通 flink 和 flink-kubernetes-operator 与 scaleph 存储模块，考虑采用 FileSystem 的方式。

flink 和 flink-kubernetes-operator 都支持 flink FileSystem，scaleph 的存储模块，第一版也是基于 flink FileSystem，为避免与 flink 版本的强耦合迁移到了 hadoop FileSystem，但是 flink FileSystem 也是基于 hadoop FileSystem，二者就存在打通的基础。

flink 和 flink-kubernetes-operator 默认启用 local FileSystem，不支持 hdfs、s3 等，需要用户自行启动。

## 参数控制

* flink。flink 镜像启动脚本 [docker-entrypoint.sh](https://github.com/apache/flink-docker/blob/master/1.17/scala_2.12-java8-ubuntu/docker-entrypoint.sh) 可以通过环境变量 `ENABLE_BUILT_IN_PLUGINS` 自动启动插件。参考 `copy_plugins_if_required` 方法。
  * `ENABLE_BUILT_IN_PLUGINS=flink-s3-fs-hadoop-1.17.1.jar`。

## 定制镜像

以 flink 和 flink-kubernetes-operator 镜像为基础镜像，添加新的功能：

* 启用文件系统
* stdout 采集和查看。flink web-ui 无法查看 stdout 输出数据。

### 扩展镜像

#### Flink

- 启用文件系统插件。参考 [File Systems](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/overview/)
  - [Amazon S3](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/s3/)
  - [Aliyun Object Storage Service (OSS)](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/oss/)
  - [HDFS](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/deployment/filesystems/overview/#hadoop-file-system-hdfs-and-its-other-implementations)

#### Flink Kubernetes Operator

- 启用文件系统。参考 [FlinkSessionJob spec overview](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/custom-resource/overview/#flinksessionjob-spec-overview)

### 启用镜像

#### Flink

- 指定镜像。参考 [FlinkDeployment spec overview](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/custom-resource/overview/#flinkdeployment-spec-overview)

#### Flink Kubernetes Operator

- 指定镜像。参考 [Overriding configuration parameters during Helm install](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/operations/helm/#overriding-configuration-parameters-during-helm-install)
