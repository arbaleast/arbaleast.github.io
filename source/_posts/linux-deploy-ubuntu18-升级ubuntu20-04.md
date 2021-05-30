---
title: linux deploy ubuntu18 升级ubuntu20.04
date: 2021-05-29 23:32:07
tags: linux deploy
description: linux deploy作者好久没更新了，ubuntu还停留在18版
---

### 换清华源，中科大的有校验问题（估计是源比较旧了）
##### 备份/etc/apt/source.list
    sudo cp /etc/apt/source.list /etc/apt/source.list.bak
##### 替换source.list内容
```
# 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-updates main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-backports main restricted universe multiverse
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-security main restricted universe multiverse

# 预发布软件源，不建议启用
# deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-proposed main restricted universe multiverse
# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu-ports/ bionic-proposed main restricted universe multiverse
```
[Ubuntu Ports 镜像使用帮助-armhf架构](https://mirrors.tuna.tsinghua.edu.cn/help/ubuntu-ports/)
##### 更新ubuntu源和软件
    sudo apt update && sudo apt upgrade

---
### 安装update-manager-core
    sudo apt install -y update-manager-core

### 升级ubutnu到20.04
    sudo do-release-upgrade -d

### 检查ubuntu版本
```
root@localhost:/home/ubuntu# lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 20.04.2 LTS
Release:	20.04
Codename:	focal
```
[如何升级到 Ubuntu 20.04](https://cloud.tencent.com/developer/article/1626603)
搞定！！……又得重新安装软件了
