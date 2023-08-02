---
id: minikube
title: Minikube
slug: minikube
order: 2

---

## Minikube

minikube 是一个工具， 能让你在本地运行 Kubernetes。
minikube 在你的个人计算机（包括 Windows、macOS 和 Linux PC）上运行一个一体化（all-in-one）或多节点的本地 Kubernetes 集群，以便你来尝试 Kubernetes 或者开展每天的开发工作。

> 以下安装教程仅在 Linux 环境下进行测试，如果您使用 MacOS 或者 Windows 系统，
> 请参阅[官方文档](https://minikube.sigs.k8s.io/docs/start/)进一步了解。

### 前置需求

> 我们推荐您使用 Linux 系统（或在虚拟机中运行 Linux）进行 minikube 的安装

- 双核及以上 CPU
- 2GiB 及以上内存
- 20GiB 硬盘空间
- 网络连接
- 容器或虚拟机（推荐使用 docker）
- 具有管理员权限的用户（非必须，某些场景可能需要）

> docker 安装请参阅[官方文档](https://docs.docker.com/desktop/)，根据您使用的操作系统及其发行版进行安装方式的选择。

### 安装 Minikube

[官方文档](https://minikube.sigs.k8s.io/docs/start/)给出了不同系统的安装方式，请根据您使用的操作系统及其发行版进行安装方式的选择。

```shell
# 以 ArchLinux 为例，使用如下命令进行安装
sudo pacman -S minikube

# 安装完成后，执行
minikube version

# 输出如下
# minikube version: v1.30.1
# commit: 08896fd1dc362c097c925146c4a0d0dac715ace0-dirty
```

### 启动 Minikube

Minikube 的启动非常简单，仅需要执行如下命令即可启动：

```shell
# 默认启动
minikube start

# 指定 driver 和 runtime
minikube start --driver docker --container-runtime docker
  
# 指定阿里云容器镜像。在网络下载镜像不畅时通过镜像加速 --推荐方式
minikube start \
  --image-mirror-country cn \
  --image-repository "registry.cn-hangzhou.aliyuncs.com/google_containers" \
  --binary-mirror "https://dl.k8s.io" \
  --container-runtime docker \
  --driver docker
  
# 检查安装状态
minikube status
```

若输出如下信息，则说明启动成功

```text
minikube
type: Control Plane
host: Running
kubelet: Running
apiserver: Running
kubeconfig: Configured
```

### 安装 Kubectl

K8S 使用`kubectl`命令行工具进行管理，请参照[官方文档](https://kubernetes.io/zh-cn/docs/tasks/tools/)进行安装。

### 配置命令补全

如果您使用 Linux 或 MacOS，可以安装 minikube 的命令行自动补全工具：

```shell
# bash 配置
mkdir ~/.k8s
minikube completion bash > ~/.k8s/minikube.sh
echo "source ~/.k8s/minikube.sh" >> ~/.bashrc
source ~/.bashrc

# zsh 配置
mkdir ~/.k8s
minikube completion zsh > ~/.k8s/minikube.zsh
echo "source ~/.k8s/minikube.zsh" >> ~/.zshrc
source ~/.zshrc
```

和 minikube 类似，kubectl 也可以配置命令行补全：

如果您使用`zsh`

```shell
# bash
mkdir ~/.k8s
kubectl completion bash > ~/.k8s/kubectl.sh
echo "source ~/.k8s/kubectl.sh" >> ~/.bashrc
source ~/.bashrc

# zsh
mkdir ~/.k8s
kubectl completion zsh > ~/.k8s/kubectl.zsh
echo "source ~/.k8s/kubectl.zsh" >> ~/.zshrc
source ~/.zshrc
```

### 远程访问 Minikube

到目前为止，我们已经能够在本地使用 Minikube 了，但是在本机之外的机器是无法访问 Minikube 的，
想要从外部机器访问，还需要进行如下配置：

#### 启动 proxy

```shell
kubectl proxy \
  --address '0.0.0.0' \
  --port 8443 \
  --api-prefix / \
  --accept-hosts '^.*'
```

#### 将配置文件拷贝到外部机器

```shell
# 主要配置文件
scp ~/.kube/config username@remote-host:/home/username/.kube/config
# 认证文件
scp  ~/.minikube/ca.crt username@remote-host:/home/username/.minikube/ca.crt
scp ~/.minikube/profiles/minikube/client.crt username@remote-host:/home/username/.minikube/profiles/minikube/client.crt
scp ~/.minikube/profiles/minikube/client.key username@remote-host:/home/username/.minikube/profiles/minikube/client.key
```

#### 修改外部机器配置

修改外部机器`~/.kube/config`，主要修改 ApiServer 地址和认证文件的位置。做如下修改

```yaml
apiVersion: v1
clusters:
  - cluster:
      # 修改为对应的文件位置
      certificate-authority: /home/your-username/.minikube/ca.crt
      extensions:
        - extension:
            last-update: Mon, 17 Jul 2023 14:28:18 CST
            provider: minikube.sigs.k8s.io
            version: v1.30.1
          name: cluster_info
      # 修改为Minikube的 ${ip}:${port}
      server: http://minikube-ip:8443
    name: minikube
contexts:
  - context:
      cluster: minikube
      extensions:
        - extension:
            last-update: Mon, 17 Jul 2023 14:28:18 CST
            provider: minikube.sigs.k8s.io
            version: v1.30.1
          name: context_info
      namespace: default
      user: minikube
    name: minikube
current-context: minikube
kind: Config
preferences: {}
users:
  - name: minikube
    user:
      # 修改为对应的文件位置
      client-certificate: /home/your-username/.minikube/profiles/minikube/client.crt
      # 修改为对应的文件位置
      client-key: /home/your-username/.minikube/profiles/minikube/client.key
```

> 注意，在修改 ApiServer 地址时，URL 的 scheme 是`http`而非`https`，这是因为我们使用的 proxy 将请求进行了转发。
> 虽然 minikube 本身的 ApiSever 的 scheme 是 https，但 proxy 的 scheme 却是 http，因此要使用 http.

#### 验证

执行如下命令，验证是否配置成功。

```shell
kubectl cluster-info
```

### 外部访问 Minikube 的 LoadBalancer 服务

```shell
minikube tunnel --bind-address 0.0.0.0
```