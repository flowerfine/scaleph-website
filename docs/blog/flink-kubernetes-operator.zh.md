---
id: flink-kubernetes-operator
title: Flink Kubernetes Operator
slug: flink-kubernetes-operator
order: 2
---

Flink Kubernetes Operator 使用 Kubernetes API，提供云原生管理 Flink 集群的能力：

- 部署、监控 Flink Session 和 Application 应用
- 升级、暂停和删除应用
- 日志和 metrics 集成
- 支持弹性部署，与 Kuberentes 生态原生集成

## 体验

1. 环境要求

   1. [docker](https://docs.docker.com/)
   2. [kubernetes](https://kubernetes.io/)
   3. [helm](https://helm.sh/docs/intro/quickstart/)

2. 准备 kubernetes 环境

   1. docker desktop 自带的 kubernetes
   2. k3s
   3. minikube

3. 创建 Flink 任务专用 service account

   ```shell
   kubectl create serviceaccount flink-service-account
   kubectl create clusterrolebinding flink-role-binding-flink --clusterrole=edit --serviceaccount=default:flink-service-account
   ```

4. 安装 flink-kubernetes-operator

   ```shell
   kubectl create -f https://github.com/jetstack/cert-manager/releases/download/v1.8.2/cert-manager.yaml

   helm repo add flink-operator-repo https://downloads.apache.org/flink/flink-kubernetes-operator-1.5.0/
   helm install flink-kubernetes-operator flink-operator-repo/flink-kubernetes-operator

   # 查看安装状态
   kubectl get deployment
   # 查看安装详情
   kubectl describe deployment flink-kubernetes-operator
   ```

5. 提交任务

   ```shell
   # 任务创建时需要拉取 flink 镜像，为了安装体验可以预先拉取镜像
   docker pull flink:1.16

   # 提交任务
   kubectl create -f https://raw.githubusercontent.com/apache/flink-kubernetes-operator/release-1.4/examples/basic.yaml
   ```

6. 查看任务

   ```shell
   # 查看任务信息
   kubectl get deployment
   kubectl get pods

   # 查看任务日志
   kubectl logs -f deploy/basic-example

   # 访问 flink web-ui
   # 访问 http://localhost:8081
   kubectl port-forward svc/basic-example-rest 8081
   ```

7. 关闭任务

   ```shell
   kubectl delete flinkdeployment/basic-example
   ```

## CRD

Flink 除了 Standalone，还支持多种资源调度框架如 YARN、Kubernetes。在 Kubernetes 上支持 Application 和 Session 模式。Flink Kubernetes Operator 同时提供在 Kubernetes 上创建 Standalone 集群，以 Application 和 Session 模式原生运行 Flink 的功能。

Flink Kubernetes Operator 以 CRD 的方式提供云原生配置，分别定义 `FlinkDeployment` 和 `FlinkSessionJob`。

`FlinkDeployment` 包含信息如下：

- JobSpec
- flinkConfiguration
- logConfiguration
- JobManager，Taskmanager，PodTemplate
- IngressSpec

### `JobSpec`

```java
/** Flink job spec. */
@Experimental
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EqualsAndHashCode
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobSpec implements Diffable<JobSpec> {

    private String jarURI;
    private String entryClass;
    private String[] args = new String[0];
    private String initialSavepointPath;
    private Boolean allowNonRestoredState;

    private int parallelism;

		private UpgradeMode upgradeMode = UpgradeMode.STATELESS;

    private JobState state = JobState.RUNNING;

    private Long savepointTriggerNonce;
}
```

### `JobManagerSpec`，`TaskmanagerSpec`，`PodTemplate`

```java
/** JobManager spec. */
@Experimental
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class JobManagerSpec {

    private Resource resource;
    private int replicas = 1;
    private Pod podTemplate;
}

/** TaskManager spec. */
@Experimental
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class TaskManagerSpec implements Diffable<TaskManagerSpec> {

    private Resource resource;
    private Integer replicas;
    private Pod podTemplate;
}

/** Resource spec. */
@Experimental
@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonIgnoreProperties(ignoreUnknown = true)
public class Resource {

    private Double cpu;
    private String memory;
    private String ephemeralStorage;
}
```

### `IngresssSpec`

```Java
/** Ingress spec. */
@Experimental
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class IngressSpec {

    private String template;
    private String className;
    private Map<String, String> annotations;
}
```

### `flinkConfiguration`, `logConfiguration`

```java
private Map<String, String> flinkConfiguration;
private Map<String, String> logConfiguration;
```
