---
id: deploy
title: 部署
slug: deploy
order: 2
---

`scaleph` 产出为镜像，部署方式以 docker 为主。

## docker

`scaleph` 运行依赖如下，其中 minio 作为文件存储中间件，可以使用 HDFS、OSS 以及 S3 代替：

- redis
- mysql
- minio

`scaleph` 应用本身由 2 个组件组成：

- [scaleph-api](https://github.com/flowerfine/scaleph/pkgs/container/scaleph%2Fscaleph-api)。服务端功能实现。
- [scaleph-ui-react](https://github.com/flowerfine/scaleph/pkgs/container/scaleph%2Fscaleph-ui-react)。前端功能实现。

镜像本身发布在 github packages 中，如遇到网络不好的情况，需通过科学上网手段，本地下载镜像上传到部署服务器等操作实现部署。

部署过程：

```shell
# clone scaleph 源码
git clone https://github.com/flowerfine/scaleph.git --depth 1

# 一键启动 scaleph 及其依赖
cd scaleph/tools/docker/deploy/scaleph
docker compose up -d

# 如网络不好，可以先 pull 镜像，稍后启动
docker compose pull
docker compose up -d

# 关闭 scaleph
docker compose down
```

在所有容器正常启动后，用户即可访问 [http://localhost](http://localhost/)，用户名密码为 `sys_admin/123456`。
