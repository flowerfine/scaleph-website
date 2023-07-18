---
id: cicd
title: CI/CD
slug: cicd
order: 4
---

`scaleph` 基于 [github actions](https://docs.github.com/zh/actions) 构建了自动化流程，用于 `scaleph` 的编译、测试、发布等操作。

## Web-IDE

当开发者发起 pr 后，可以自动回复 pr，添加 review 链接，帮助开发者使用 Web IDE 进行 review。

详情参阅 [Web-IDE](https://github.com/flowerfine/scaleph/actions/workflows/web-ide.yml)

## CI

当发起 pr 或者 push 代码时，CI 流程会对代码进行自动编译，测试。同时也会在每日凌晨 04:00 自动进行 CI。

```yaml
on:
  pull_request:
    paths-ignore: ["docs/**", "**/*.md", "**/*.drawio", "**/*.svg"]
  push:
    paths-ignore: ["docs/**", "**/*.md", "**/*.drawio", "**/*.svg"]
  schedule:
    - cron: "0 20 * * *" # automatic test while every day on 04:00 am at UTC+10
  workflow_dispatch:
```

## Release

`scaleph` 有多个 release 流程，用于不同的目的：

- [Docker-Release](https://github.com/flowerfine/scaleph/actions/workflows/docker-release.yml)。发布 main 分支最新代码的 `scaleph-api` 和 `scaleph-ui-react` 镜像流程。
- [Release](https://github.com/flowerfine/scaleph/actions/workflows/release.yml)。`scaleph` 正式发布时发布 `scaleph-api` 和 `scaleph-ui-react` 镜像流程。
- [Docker-Build-Flink](https://github.com/flowerfine/scaleph/actions/workflows/docker-flink.yml)。手动制作 Flink 基础镜像。
- [Docker-Build-Seatunnel](https://github.com/flowerfine/scaleph/actions/workflows/docker-seatunnel.yml)。手动制作 SeaTunnel 基础镜像。
