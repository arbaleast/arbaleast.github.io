---
title: linux-deploy部署失败
date: 2021-05-29 23:08:48
tags: linux-deploy
description: 掉头发的事
---

### 部署时报错
```
## bootstrap/rootfs : do_install && do_configure
:: Installing bootstrap/rootfs ...
Checking installation path ... done
Making file system (ext4) ... done
Checking file system ... done
Mounting the container:
/ ... mount：
fail
<<< deploy
```
>……额，日志被顶上去了，找到一个类似的（凑合看吧）

### 在有管理员权限的终端执行命令
    mknod /dev/loop0 b 7 0
然后再部署，搞定
别问为什么，我也是一脸蒙b
>[issues-Can't instally anything with this #1154](https://github.com/meefik/linuxdeploy/issues/1154)
