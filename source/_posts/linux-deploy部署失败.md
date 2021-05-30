---
title: linux-deploy部署失败
date: 2021-05-29 23:08:48
tags: linux deploy
description: 掉头发的事
---

### 部署时报错以及container 挂在失败可以试试
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

---
### linux deploy的探索性拓展
[开机自动挂载Linux Deploy中的Linux容器并开启adbd网络调试](https://conimi.com/archives/127/#%E5%BC%80%E6%9C%BA%E8%87%AA%E5%8A%A8%E6%8C%82%E8%BD%BDlinux%E7%B3%BB%E7%BB%9F)
