---
id: job_jar
title: Flink Jar 任务
slug: job_jar
order: 4
---

`scaleph` 初衷是为 SeaTunnel 提供 web 后台系统，辅助用户创建、提交和管理 SeaTunnel 任务，类似 Datax-web 与 Datax。在支持 Flink 引擎的过程中，`scaleph` 贡献者认为项目中涉及了大量与 Flink 管理相关的功能，涉及 SeaTunnel 的部分反而在前端体现更多，`scaleph` 可以在 Flink 管理功能的基础上，提供更多的功能，如 Jar 或者 SQL 任务管理。

支持 Flink 任务管理也将成为 `scaleph` 的一个新的 Feature。

## Jar Artifact

首先上传 jar artifact：

![job_jar_new](https://github.com/flowerfine/scaleph-website/raw/2a943f478234dadae2748d478ef29d5f81e34a2e/site/images/guide/quick-start/job/jar/job_jar_new.png)

填写必要参数：

![job_jar_new_upload](https://github.com/flowerfine/scaleph-website/raw/2a943f478234dadae2748d478ef29d5f81e34a2e/site/images/guide/quick-start/job/jar/job_jar_new_upload.png)

## 启动任务

`scaleph` 将 Flink 任务启动管理统一到了作业管理功能中，同样支持 Flink Jar 任务提交到 Standalone、YARN 或 Kubernetes。

![job_create_jar](https://github.com/flowerfine/scaleph-website/raw/2a943f478234dadae2748d478ef29d5f81e34a2e/site/images/guide/quick-start/job/jar/job_create_jar.png)
