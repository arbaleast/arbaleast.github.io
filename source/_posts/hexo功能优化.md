---
title: hexo功能优化
date: 2021-05-27 22:28:00
tags: hexo
description: 用起来可能会更方便，也可能会更难用
---

### 添加pdf预览
##### 添加模块
    git clone https://github.com/theme-next/theme-next-pdf /source/lib/pdf
##### 在主题配置中_config.yml启用pdf
```
    # PDF tag
# NexT will try to load pdf files natively, if failed, pdf.js will be used.
# So, you have to install the dependency of pdf.js if you want to use pdf tag and make it available to all browsers.
# See: https://github.com/theme-next/theme-next-pdf
pdf:
  enable: true
  # Default height
  height: 500px
```

##### 如何在blog中使用（参考）
```
    {% pdf /path/to/your/file.pdf %}
```
##### 更新
    可能需要手动clone， 暂时没有寻找更好的方法
    不删除之前clone带来的.git文件的话，是没办法上传博客源码到blog分支的
##### 问题
    第一个在更新里面
    另外是pdf链接的问题，onedrive的链接没法直接预览，改用了gdrive的
