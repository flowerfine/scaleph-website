---
id: initialize
title: 系统初始化
slug: initialize
order: 1
---

`scaleph` 部署成功后，通过 `sys_admin/123456` 登录 [http://localhost](http://localhost) 后，系统维护者或者管理员需要先行对系统进行初始化，填充用户进行数据开发的必须配置和文件。

## 资源上传

`scaleph` 镜像不在包含 Flink 和 SeaTunnel release，以减少 `scaleph-api` 镜像体积大小。

对于 Flink 和 SeaTunnel 任务提交期间需要的依赖，需管理员部署应用后自行上传。

### Flink Release

用户需自行下载 1.13.6 版本的 [Flink Release](https://archive.apache.org/dist/flink/flink-1.13.6/)，下载完成后在 `资源 -> Flink Release` 上传：

![upload_flink](../../../site/images/guide/quick-start/initialize/upload_flink.png)

上传完成后页面如下：

![flink_release_list](../../../site/images/guide/quick-start/initialize/flink_release_list.png)

### SeaTunnel Release

用户需自行下载 2.3.0 版本的 [SeaTunnel Release](https://seatunnel.apache.org/download/)，下载完成后在 `资源 -> SeaTunnel Release` 上传：

![upload_seatunnel](../../../site/images/guide/quick-start/initialize/upload_seatunnel.png)

上传完成后页面如下：

![seatunnel_release_list](../../../site/images/guide/quick-start/initialize/seatunnel_release_list.png)

因为 SeaTunnel Release 中不在包含 connector jar，需用户自行下载并上传 connector jar 至 `scaleph` 中，详情参阅 [Step 3: Install connectors plugin](https://seatunnel.apache.org/docs/2.3.0/start-v2/locally/deployment#step-3-install-connectors-plugin)。

![seatunnel_connectors](../../../site/images/guide/quick-start/initialize/seatunnel_connectors.png)

## 启动调度

## 创建用户
