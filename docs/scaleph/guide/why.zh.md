#  scaleph 项目初衷

`scaleph` 始于 2022 年初，彼时 SeaTunnel 刚在 2021 年 11 月份进入 apache 孵化器进行孵化，作为项目早期的关注者和参与者，非常喜欢 SeaTunnel 的设计理念和成果，于是决定为 SeaTunnel 开发一个 web 管理系统，实现 SeaTunnel 任务的创建、提交、停止等功能，类似 Datax 和 Datax-web 之类的组合。



* 那么如何去创建 SeaTunnel 任务呢？做个拖拉拽的吧！
* 怎么提交 SeaTunnel 任务呢？用 shell 最方便了，可以同时支持 Flink 和 Spark，但是用 Java 调用 shell 好蠢，Flink 也是基于 Java 和 Scala 实现的，`scaleph` 也是用 Java 实现的，为什么二者的集成要通过 shell 实现中间要转一道呢？我们用 Java 搞吧！

`scaleph` 历经几个月的开发，得到一个基础版本，在 SeaTunnel 的线上 meetup 上分享了我们的阶段成果。之后 `scaleph` 对前端框架进行了从 angular 到 react 的迁移，服务端也从 v1 connector 迁移到了 v2 connector，在 2023 年元旦发布了至关重要的 `1.0.0` 版本，结束了因为开发、重构导致的无稳定版本的状况。



