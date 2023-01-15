# 编译

不同的编译方式和环境可能会获得不同的编译结果，甚至会编译失败！`scaleph` 拥有多个编译场景：

* 本地 IDE 开发。
* 基于 github actions 的 [CI](https://github.com/flowerfine/scaleph/blob/dev/.github/workflows/ci.yml) 流程。
* 基于 github actions 的 [CD][https://github.com/flowerfine/scaleph/blob/dev/.github/workflows/docker-release.yml] 流程。

`scaleph` 确保 3 个场景的编译环境、命令和结果的一致性，保证了开发者开发结果，CI/CD 流程都是可信的。

