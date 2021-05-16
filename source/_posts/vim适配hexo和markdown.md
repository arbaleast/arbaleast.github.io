---
title: vim适配hexo和markdown
date: 2021-05-14 18:34:57
tags: vim
description: 配置vim
---

安装好vimplug
```
git clone https://github.com/chxuan/vimplus.git
cd vimplus
sh install.sh
```
然后在.vimrc或init.vim文件下添加插件
```
Plug 'iamcco/mathjax-support-for-mkdp'
Plug 'iamcco/markdown-preview.vim'
```
额外配置
```
let g:mkdp_path_to_chrome = "firefox"                   "启动firefox
let g:mkdp_open_to_the_world = 0                        " 设置为 1 可以在打开 markdown 文件的时候自动打开浏览器预览
let g:mkdp_auto_start = 1                               " 设置为 1, 在使用的网络中的其他计算机也能访问预览页面
```
然后进入vim，进入命令行模式, 输入命令
```
:PlugInstall
```
安装vimplug和自己添加的插件
