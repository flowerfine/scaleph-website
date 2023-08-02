---
id: binary
title: 安装包
slug: binary
order: 2
---

从 [github](https://github.com/flowerfine/scaleph/releases) 获取安装包，或者[自行编译](./compile)。

### 解压安装包

```shell
tar -zxf scaleph-xx.yy.zz-bin.tar.gz
```

文件目录树如下所示：

```text
scaleph-xx.yy.zz
├── bin
├── conf
├── libs
├── plugins
        └──datasource
├── sql
├── ui
├── LICENSE
└── README.md
```

### 准备环境

您可以使用 docker 的方式来部署`mysql`,`redis`,`minio`，也可以自行部署相关组件。

> 如果您使用自行安装的 mysql 数据库，您需要将`sql`目录下的脚本在 mysql 中执行。
>
> 或者使用 scaleph 提供的初始化数据库的脚本：

```shell
./bin/tools.sh init-database \
--driver com.mysql.cj.jdbc.Driver \
--url jdbc:mysql://127.0.0.1:3306 \
--username root \
--password 123456 \
--sql-files sql
```

### 修改配置

```shell
vim bin/config.sh
```

设置`JAVA_HOME`.

```shell
export JAVA_HOME=path/to/your/java_home
```

编辑 `conf/application.yml` 和 `conf/application-dev.yml` 以适配您的环境。

### 启停

#### 后台启动

```shell
./bin/scaleph.sh start
```

输出如下:

```text
Staring in backend
Running with pid 45193
```

#### 前台启动

```shell
./bin/scaleph.sh start-frontend
```

启动后在浏览器打开[http://localhost:8080/scaleph/ui/#/login](http://localhost:8080/scaleph/ui/#/login)

#### 检查进程状态

```shell
./bin/scaleph.sh status
```

#### 停止

> 只能在后台启动时使用此脚本停止进程。

```shell
./bin/scaleph.sh stop
```

### 日志

日志保存在 `logs/scaleph`

```text
logs
└── scaleph
    ├── scaleph-error.log
    ├── scaleph-info.log
    ├── scaleph-server.log
    └── scaleph-warn.log
```

