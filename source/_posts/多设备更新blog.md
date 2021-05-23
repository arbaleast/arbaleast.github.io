---
title: 多设备更新blog
date: 2021-05-17 08:38:20
tags: hexo
description: 探索如何偷懒，躺床上写blog
---

### 创建分支，并上传hexo源码到分支
搭建好githubpage blog 后
编辑博客配置文件
```
deploy:
  type: git
  repository: git@github.com:youname/youname.github.io.git
  branch: master
```
>branch 为部署github page的分支

##### 部署blog
npm install hexo-deployer-git --save
hexo clean && hexo g && hexo d
##### 在hexo根目录下初始化git
```
git init                    #git 初始化
git checkout -b blog        #新建blog分支
git add .                   #添加所有文件到git
git commit -m ""            #提交commit
git push origin blog        #通过origin推送blog到远程仓库
```
### 在其他设备写blog
```
git clone -b blog https://github.com/用户名/仓库名.git
cd 仓库名
npm install
hexo clean && hexo g && hexo d
git add .
git commit -m ""
git push origin blog
```
