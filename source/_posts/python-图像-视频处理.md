---
title: python 图像 视频处理
date: 2021-05-31 23:13:07
tags: python 埋坑
description: 让你头发掉光的东西
---

### [用 Python 和 OpenCV 检测和跟踪运动对象](https://noahzhy.github.io/2018/02/02/%E7%94%A8-Python-%E5%92%8C-OpenCV-%E6%A3%80%E6%B5%8B%E5%92%8C%E8%B7%9F%E8%B8%AA%E8%BF%90%E5%8A%A8%E5%AF%B9%E8%B1%A1/)
>这里面提到的OpenCV进行运动检测、追踪和分析的几篇论文

##### [An improved adaptive background mixture model for real-time tracking with shadow detection](http://www.ee.surrey.ac.uk/CVSSP/Publications/papers/KaewTraKulPong-AVBS01.pdf)
##### [Efficient Adaptive Density Estimation per Image Pixel for the Task of Background Subtraction](http://www.zoranz.net/Publications/zivkovicPRL2006.pdf)
##### [Visual Tracking of Human Visitors under Variable-Lighting Conditions for a Responsive Audio Art Installation](http://goldberg.berkeley.edu/pubs/acc-2012-visual-tracking-final.pdf)

##### [termux源添加含有opencv的库](https://github.com/its-pointless/gcc_termux)

### termux添加opencv
    wget https://its-pointless.github.io/setup-pointless-repo.sh
    pkg install opencv

---
### 在手机上获取需要的图片
[python 几种android截屏方式的学习与使用](https://blog.csdn.net/weixin_42966350/article/details/84799099)
[学习了一下python中使用adb命令的方法](https://blog.csdn.net/quikai1981/article/details/78952294)
### 裁剪图片
[Python裁剪截取图片两种方案：OpenCV与Pillow](https://blog.csdn.net/zhangphil/article/details/106147606)


### python dict和tuple类型的处理
[Python字典处理](https://segmentfault.com/a/1190000015975631)
[Python3 列表](https://www.runoob.com/python3/python3-list.html)
[Python入门 数据结构 tuple元组](https://zhuanlan.zhihu.com/p/28967433)

### 碰到的问题
    OpenCV NoneType object has no attribute shape

>读取图片的路径出错了
    CentOS部署tesseract报错Failed loading language \‘eng\‘ Tesseract couldn\‘t load any languages

>没有安装语言包
    sudo pacman -S tesseract-data-chi_sim tesseract-data-eng
[Linux 下使用 Python OCR 识别 ](https://violetus.life/utilities/pylinux_ocr/)
            
    
