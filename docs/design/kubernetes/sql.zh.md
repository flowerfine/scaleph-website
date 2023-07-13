---
id: sql
title: SQL
slug: sql
order: 6
---

SQL

scaleph 对于 flink sql 的支持有 2 种形式：

* [sql gateway](https://nightlies.apache.org/flink/flink-docs-release-1.17/docs/dev/table/sql-gateway/overview/)
* [flink kubernetes operator](https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-stable/) 的 [flink-sql-runner-example](https://github.com/apache/flink-kubernetes-operator/tree/main/examples/flink-sql-runner-example)

而这两种形式也分别对应着 flink sql 提交的 2 种实现，参考文档：[网易游戏 Flink SQL 平台化实践](https://zhuanlan.zhihu.com/p/543906111)。

* 模板 jar。
* JobGraph。如 sql gateway。

## 模板 Jar



```shell
# 编译 scaleph-sql-template
cd scaleph-engine/scaleph-sql-template && mvn -B -U clean package -DskipTests -Dfast

# 本地打镜像
cd -
docker build \
	-f tools/docker/build/scaleph-sql-template/Dockerfile \
	--build-arg FLINK_VERSION=1.17 \
	--tag scaleph-sql-template:dev \
	.

# 本地运行调试镜像
# todo
```

