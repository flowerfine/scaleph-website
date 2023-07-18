---
id: sourcecode
title: 项目源码
slug: sourcecode
order: 2
---

本文对 `scaleph` 项目的源码进行介绍。

## Web IDE

工欲利其事，必先利其器，一个好的源码阅读工具是必不可少的。

开发者阅读源码时，习惯于先 `fork`，在 `clone` 到本地，导入 IDE，受限于网络环境，很多人的源码阅读可能直接在 `fork` 环节阻碍而直接胎死腹中。

在这里，推荐几种在浏览器中进行源码阅读的方式：

- [github1s](https://github.com/conwnet/github1s)。将 https://github.com/flowerfine/scaleph 更改为 https://github1s.com/flowerfine/scaleph，即可在浏览器中获取 vscode 风格的源码阅读体验。
- 在线 vscode 编辑器。包括 github、vscode、redhat 在内的很多厂商都提供在线 web IDE 功能，调试运行程序一般需要额外收费，对于只阅读源码则足够使用。
  - [github](https://docs.github.com/cn/codespaces)。在项目页面，键盘点击点号(`.`)，github 会为用户创建免费的代码空间，将用户重定向到 https://github.dev/flowerfine/scaleph。
  - vscode。与 github.dev 类似，在浏览器中打开 https://vscode.dev/github/flowerfine/scaleph。
- 浏览器插件。在浏览器应用商店中搜索 `GitHub Web IDE`，安装后可以在 github 页面 `Open in Web IDE` 按钮，点击下拉，上面介绍的几种在浏览器阅读源码方法都能支持。

## 源码结构

源码目录如下：

```
scaleph
├── docs
├── scaleph-api                                          # scaleph 服务端入口
├── scaleph-common
├── scaleph-core
│   └── scaleph-core-scheduler
├── scaleph-dao
├── scaleph-datasource                                   # 数据源管理
├── scaleph-engine
│   ├── scaleph-engine-flink                             # 基于 flinkful 实现的 flink 任务提交
│   ├── scaleph-engine-flink-kubernetes                  # 基于 flink-kubernetes-operator 实现的 flink 任务提交，开发中
│   ├── scaleph-engine-seatunnel                         # seatunnel 任务生成，可视化拖拉拽服务
│   └── scaleph-engine-sql                               # flink sql 服务，开发中
├── scaleph-meta                                         # 元数据模块，暂未启用
├── scaleph-plugins                                      # 插件模块
│   ├── scaleph-plugin-datasource                        # 数据源插件，暂未启用
│   ├── scaleph-plugin-flink                             # flink 插件，提供 flink 多版本功能，开发中
│   │   ├── scaleph-plugin-flink-api
│   │   └── scaleph-plugin-flink-1.13
│   ├── scaleph-plugin-framework                         # 插件框架
│   ├── scaleph-plugin-seatunnel-connectors              # seatunnel v2 connectors 插件
│   └── scaleph-plugin-seatunnel-native-flink            # seatunntl v1 connectors 插件，暂未启用
├── scaleph-resource                                     # 资源模块，提供文件上传下载
├── scaleph-security                                     # 用户权限模块
├── scaleph-support
│   ├── scaleph-cache                                    # 缓存模块
│   ├── scaleph-generator                                # 代码生成模块。生成 mybatis-plus 的 entity、mapper、xml
│   ├── scaleph-log                                      # 日志模块，存储用户登录、操作日志，站内信，调度日志等
│   ├── scaleph-mail                                     # 邮箱模块。如发送用户激活邮件
│   ├── scaleph-privilege                                # 系统权限模块。防止插件调用 `System.exit()` 导致 JVM 退出
│   ├── scaleph-storage                                  # 存储模块。基于 HDFS 文件系统实现
│   └── scaleph-system                                   # 系统模块。配置、字典等
├── scaleph-ui                                           # 基于 angular 开发的 ui，暂未启用
├── scaleph-ui-react                                     # 基于 react + antd 开发的 ui，使用中
├── scaleph-workflow                                     # workflow 模块，提供调度功能
│   ├── scaleph-workflow-api
│   └── scaleph-workflow-quartz                          # 基于 quartz 实现的系统调度任务
└── tools
    ├── checkstyle
    ├── docker                                           # docker 工具
    ├── kubernetes
    └── spotbugs
```
