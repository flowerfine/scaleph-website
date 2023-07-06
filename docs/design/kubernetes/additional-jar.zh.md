---
id: additional-jar
title: 依赖Jar
slug: additional-jar
order: 4
---

Jar Artifact 和依赖 Jar

## Deployment

用户可以在 scaleph `资源管理`上传 Jar 包，也可以在 `作业开发` `Jar` 上传 Jar Artifact。当 Jar 上传到 scaleph 系统中，flink kubernetes operator 和 flink 运行容器如何访问 Jar 呢？

### Flink Kubernets Operator

scaleph 与 flink kubernetes operator 集成，实现 flink on kubernetes 功能，Jar 包获取功能需要考虑 flink kubernetes operator 支持粒度。

flink kubernetes operator 支持多种形式的 jar uri：

- local
- http && https
- flink FileSystem. eg. file://, oss://, s3://, hdfs://。参考 [`To support jar from different filesystems, you should extend the base docker image as below, and put the related filesystem jar to the plugin dir and deploy the operator`](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-release-1.5/docs/custom-resource/overview/#flinksessionjob-spec-overview)

但是 flink kubernetes operator 仅支持 Jar Artifact，不支持依赖 Jar。依赖 Jar 需要用户自行处理：

- 将依赖 Jar 与 Jar Artifact 打在一块，做成一个 fat jar。
- 将依赖 Jar 提前打进 flink 镜像中。
- 使用 init container，在 flink 容器启动前，将依赖 Jar 动态加载到 flink 容器中。
  - [pod-template.yaml](https://github.com/apache/flink-kubernetes-operator/blob/main/examples/pod-template.yaml)
  - [Flink on K8S 在网易传媒的落地实践-Flink 作业启动时动态挂载资源](https://mp.weixin.qq.com/s/nbKz1aAZChTPGFMp80ERNA)

## SessionJob

session job 只支持 2 种形式的 jar uri：

- http && https
- flink FileSystem. eg. file://, oss://, s3://, hdfs://

## scaleph 与 flink kubernetes operator 集成

### file-fetcher

通过 init container 动态加载 Jar Artifact 和依赖 Jar。

```shell
# 编译 scaleph-file-fetcher
mvn -B -U -T 4 clean package -Pdist -DskipTests -Dfast -am --projects scaleph-file-fetcher

# 本地打镜像
docker build -f tools/docker/build/scaleph-file-fetcher/Dockerfile --tag scaleph-file-fetcher:dev .

# 本地运行调试镜像
docker run --rm -it -e MINIO_ENDPOINT="http://${ip}:9000" \
    -v /Users/wangqi/Documents/test:/temp \
    scaleph-file-fetcher:dev \
    -uri s3a://scaleph/user/wangqi/kerberos/sss/1517812762598283.jpg \
    -path /temp/1517812762598283.jpg
# 运行结束后即可在 /Users/wangqi/Documents/test 目录看到下载的文件
```

参考文章

- [如何向 Docker 容器传递参数](https://blog.csdn.net/chenxing109/article/details/85319489)

### FileSystem

集成 flink FileSystem 和 `scaleph-storage` module。
