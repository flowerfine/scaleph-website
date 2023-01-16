# 编译

不同的编译方式和环境可能会获得不同的编译结果，甚至会编译失败！`scaleph` 拥有多个编译场景：

- 本地 IDE 开发。
- 基于 github actions 的 [CI](https://github.com/flowerfine/scaleph/blob/dev/.github/workflows/ci.yml) 流程。
- 基于 github actions 的 [CD][https://github.com/flowerfine/scaleph/blob/dev/.github/workflows/docker-release.yml] 流程。

`scaleph` 确保 3 个场景的编译环境、命令和结果的一致性，保证了开发者本地开发效果，CI/CD 流程都是可信的。

当开发者需要手动编译项目时，可以参考此文档。

## 编译环境

### 机器本地编译

开发者需安装如下环境：

- [JDK](https://adoptium.net/zh-CN/temurin/archive/)。下载并安装 open JDK 11。
- [Node](https://nodejs.org/en/download/releases/)。下载并安装 Node 16。
- [Docker](https://docs.docker.com/get-docker/)。下载并安装 Docker，已有 Docker 环境时，使用 `docker version` 和 `docker compose version` 检查对应的版本，更新为最新版本。

```shell
# 编译服务端

./mvnw -B -U -T 4 clean package -DskipTests -Dfast -am --projects scaleph-api

npm install --force
npm run build --prod
```
