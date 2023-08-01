---
id: docker-desktop
title: Docker Desktop
slug: docker-desktop
order: 1
---

## 前置准备

创建 Flink 任务专用 service account

```shell
kubectl create serviceaccount flink-service-account
kubectl create clusterrolebinding flink-role-binding-flink --clusterrole=edit --serviceaccount=default:flink-service-account
```

安装 cert-manager

```shell
kubectl create -f https://github.com/jetstack/cert-manager/releases/download/v1.8.2/cert-manager.yaml
```

## Flink Kubernetes Operator

安装 flink-kubernetes-operator

```shell
helm repo add flink-operator-repo https://downloads.apache.org/flink/flink-kubernetes-operator-1.5.0/
helm install flink-kubernetes-operator flink-operator-repo/flink-kubernetes-operator --set image.repository=apache/flink-kubernetes-operator

# 查看安装状态
kubectl get deployment
# 查看安装详情
kubectl describe deployment flink-kubernetes-operator
```

## Ingress

安装 nginx ingress

```shell
# 安装 ingress-nginx
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.8.0/deploy/static/provider/cloud/deploy.yaml

# 检验安装结果
kubectl get pods -n ingress-nginx
kubectl get services -n ingress-nginx
```