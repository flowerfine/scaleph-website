---
id: docker
title: Docker
slug: docker
order: 1
---

`scaleph` 产出为镜像，部署方式以 docker 为主。镜像发布在 github packages 中，网络不畅情况下，可通过：

* 科学上网
* 本地下载镜像上传到部署服务器
* 本地编译镜像

## docker

`scaleph` 运行依赖如下，其中 minio 作为文件存储中间件，Flink 任务 checkpoints 数据存储：

- redis
- mysql
- minio

`scaleph` 应用本身由 2 个组件组成：

- [scaleph-api](https://github.com/flowerfine/scaleph/pkgs/container/scaleph%2Fscaleph-api)。服务端功能实现。
- [scaleph-ui-react](https://github.com/flowerfine/scaleph/pkgs/container/scaleph%2Fscaleph-ui-react)。前端功能实现。

Flink 任务由 Flink Kubernetes Operator 管理，运行在 Kubernets 上，不同类型的任务如 Jar、SQL、SeaTunnel，需要不同的基础镜像：

* scaleph-file-fetcher
* scaleph-sql-template
* scaleph-seatunnel
* flink:1.17

### 下载镜像

```shell
# clone scaleph 源码
git clone https://github.com/flowerfine/scaleph.git --depth 1
cd scaleph/tools/docker/deploy/scaleph

# 下载依赖 && scaleph 组件
docker compose pull

# 下载 Flink 运行时镜像
docker pull ghcr.io/flowerfine/scaleph/scaleph-file-fetcher:latest
docker pull ghcr.io/flowerfine/scaleph-sql-template:1.17
docker pull ghcr.io/flowerfine/scaleph-seatunnel:2.3.1-flink-1.15

docker pull flink:1.17
```

### 部署 scaleph

```shell
# 一键启动 scaleph 及其依赖
cd scaleph/tools/docker/deploy/scaleph
docker compose up -d

# 关闭 scaleph
docker compose down
```

在所有容器正常启动后，用户即可访问 [http://localhost](http://localhost/)，用户名密码为 `sys_admin/123456`。