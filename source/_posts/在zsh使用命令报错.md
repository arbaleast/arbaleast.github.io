---
title: 在zsh使用命令报错
date: 2021-05-29 12:50:49
tags: zsh
description: 系统挂了，导致zsh非正常关闭
---

### 报错
    
    zsh: corrupt history file /home/XXX/.zsh_history

### 来源

manjaro是安装在外置硬盘上的，动一下线好像系统就挂了；
硬盘盒休眠我刷固件关掉了，应该是接口接触不良，电脑这边是雷电3接口，用windows的时候动一下线也掉盘

### 处理
```
cp .zsh_history zsh_history
rm -f .zsh_history
strings zsh_history .zsh_history
```
[从CSDN抄的-ZSH出现问题](https://blog.csdn.net/qq_28426351/article/details/51750347)
