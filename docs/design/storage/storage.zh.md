---
id: storage
title: 存储模块
slug: storage
order: 1
---

`scaleph` 设计之初就遇到了文件存储的需求：如何保存用户上传的文件？

作为 `scaleph` 系统基础服务之一，存储功能也历经 3 次演变：

- Minio 实现
- Flink FileSystem 实现
- Hadoop FileSystem 实现。

## Minio

作为最开始的功能实现，`scaleph` 基于 Minio 客户端提供了文件上传服务，实现文件上传功能。Minio 作为 S3 的开源实现，云原生的特性帮助 `scaleph` 满足文件存储需求，也一直是 `scaleph` 默认依赖。

作为最初的方案，将文件存储和单一方案耦合在一起，限制用户必须选择 Minio 或 S3 作为存储方案，作为开源系统是不够开放的。`scaleph` 也开始去寻找能够同时兼容 HDFS 和云厂商对象存储的方案。

后续代码也进行过版本迭代，尝试用一套 API 统一 Minio 与本地存储，但是实现质量并不高。

## Flink FileSystem

在寻求能够同时支持 HDFS 和云厂商对象存储解决方案的时候，`scaleph` 贡献者将目光对准了 Flink，开始探究 Flink 是如何同时支持 HDFS、S3、OSS 等大规模且廉价的存储系统。

结合 Flink 任务提交的工作，了解到 Flink 客户端在提交 Flink 任务时，除了任务 Jar 外，还有额外依赖。同时提交到 JobManager 的任务要分发到 TaskManager 上，那么相关 Jar 同样存在分发问题。正好了解到美团的技术分享文章 [美团 Flink 大作业部署与状态稳定性优化实践](https://mp.weixin.qq.com/s/xMYVffGueqYtSVSEDEnN7g)，其中有个优化点就在于减少同一台物理机上对于同一个任务不同 Task 需要多次下载 userjar 的问题。

于是开始了解到 Flink 本身提供的 `BlobStore` 存储功能，相关核心接口如下：

```java
public interface BlobView {

    boolean get(JobID jobId, BlobKey blobKey, File localFile) throws IOException;
}

public interface BlobStore extends BlobView {

    boolean put(File localFile, JobID jobId, BlobKey blobKey) throws IOException;

    boolean delete(JobID jobId, BlobKey blobKey);

    boolean deleteAll(JobID jobId);
}

public interface BlobStoreService extends BlobStore, Closeable {

    void closeAndCleanupAllData();
}
```

总体思路是提供了 K-V 类型的文件增删查功能。这种思想和云厂商提供的对象存储特性一致，但是和文件系统结合仍需要大量的开发工作。而且类似的工作在之前尝试统一 Minio 和本地文件系统已经进行过一次，因此基于 BlobStore 重构 `scaleph` 的文件存储功能并不能让人满意。

更深一步地调研后，了解到 Flink FileSystem。Flink 文件系统是天然支持本地文件系统、HDFS 和兼容系统、S3、OSS 等存储系统，正好满足 `scaleph` 需要的支持多种存储系统的需求。`scaleph` 对 Flink FileSystem 进行了集成，在其基础上，提供了对 HDFS、OSS 和本地文件系统的支持。

`scaleph` 在 Flink FileSystem API 的基础上，实现了如下服务：

```java
public interface FileSystemService {

    FileSystem getFileSystem();

    boolean isDistributedFS();

    boolean exists(String fileName) throws IOException;

    List<String> list(String directory) throws IOException;

    InputStream get(String fileName) throws IOException;

    void upload(InputStream inputStream, String fileName) throws IOException;

    boolean delete(String fileName) throws IOException;

    Long getFileSize(String fileName) throws IOException;

    List<FileStatus> listStatus(String directory) throws IOException;
}
```

用户可以通过配置参数，自由切换底层存储实现：

```yaml
file-system:
  #  type: local
  type: s3
  proxy: false
  bucket: ${spring.application.name}
  endPoint: http://127.0.0.1:9000
  accessKey: admin
  secretKey: password
#  type: oss
#  bucket: ${spring.application.name}
#  endPoint: Aliyun OSS endpoint to connect to
#  accessKey: Aliyun access key ID
#  secretKey: Aliyun access key secret
#  type: hdfs
#  hadoopConfPath: Hadoop conf path
#  defaultFS: hdfs://localhost:9000
```

## Hadoop FileSystem

在使用 Flink FileSystem 重构 `scaleph` 文件存储功能后，随着 Flink 任务管理功能的完善，贡献者注意到 `scaleph` 对 Flink FileSystem 的强依赖导致系统必须与 Flink 某个版本的代码绑定在一起，后续在规划 Flink 多版本支持的时候会成为一个问题。

在后续的调研之下，重新迁移到了 Hadoop FileSystem，实现了和 Flink 版本的解耦。

## 后续计划

`scaleph` 目前版本的文件存储功能兼容性已经满足需求，但仍还有一些功能可供提升：

- 版本管理。上传的文件如何进行版本管理，辅助用户对上传的文件进行组织。现有的一些解决方案是在数据库中记录文件的版本号和存储功能中的存储路径。
- 文件覆盖、删除问题。当已经应用到任务中的文件，因为覆盖、删除而影响任务时要如何处理？
- Flink FileSystem 打通。现在 `scaleph` 提供的文件存储功能还是面向后台系统，未和 Flink FileSystem 打通，当用户提交 Flink 任务后，期望将 checkpoints、savepoints 等数据存储到文件系统时仍需单独设置，而且 `scaleph` 也无法访问存储到文件系统中的 checkpoints 等数据。
