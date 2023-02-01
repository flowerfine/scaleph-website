---
id: develop
title: 本地开发环境
slug: develop
order: 1
---

本文介绍如何在本地构建开发环境，启动 `scaleph`。

## 环境准备

开发者需安装如下程序：

- [JDK](https://adoptium.net/zh-CN/temurin/archive/)。下载并安装 open JDK 11。
- [Node](https://nodejs.org/en/download/releases/)。下载并安装 Node 16。
- [Docker](https://docs.docker.com/get-docker/)。下载并安装 Docker，已有 Docker 环境时，使用 `docker version` 和 `docker compose version` 检查对应的版本，更新为最新版本。

开发者需准备 IDE，`scaleph` 推荐使用 IntelliJ IDEA 开发，开发时需安装如下插件：

- lombok

## 导入 IDEA

首先，clone `scaleph` 项目。

```shell
git clone https://github.com/flowerfine/scaleph.git --depth 1
```

导入项目：

1. 启动 IDEA 并选择 `New → Project from Existing Sources`。
2. 选择 `scaleph` 根文件夹。
3. 选择 `Import project from external model -> Maven`。
4. 保留默认选项，依次点击 `Next`，直至 SDK。
5. 如果无 SDK 列表，使用左上角的 `+` 号创建，注意选择 `Eclipse Temurin`。选择 `JDK`，选择 JDK 主目录，单击 `OK`。选择 `pom.xml` 中的 JDK 版本。
6. 单击 `Next` ，直至完成。
7. 编译项目 `Build → Make Project`。

## 启动依赖

`scaleph` 运行所需依赖如下：

- redis
- mysql
- minio

其中 minio 作为文件存储中间件，可以使用 HDFS、OSS 以及 S3 代替。

```shell
cd scaleph/tools/docker/local
docker compose up -d
```

## 启动 scaleph-api

`scaleph` 服务端启动类为 `cn.sliew.scaleph.Application`，位于 `scaleph-api` 模块。

当能看到类似下面日志输出时即启动成功：

```
2023-02-01 15:08:01.110  INFO 11680 [main] cn.sliew.scaleph.Application             61   行: Started Application in 20.158 seconds (JVM running for 23.118)
202
```

## 启动 scaleph-ui-react

安装依赖

```shell
cd scaleph-ui-react
npm install
```

启动前端项目

```shell
npm start
```

## 访问项目

点击 [http://localhost:8000](http://localhost:8000)，默认用户名密码：`sys_admin/123456`。
