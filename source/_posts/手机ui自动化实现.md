---
title: 手机ui自动化实现
date: 2021-05-09 23:12:58
tags:
description: 为了薅羊毛， 羊毛党一只（懒）
---

[python UIAutomator2使用教程](https://blog.csdn.net/d1240673769/article/details/113809889)
[uiautomator](https://github.com/openatx/uiautomator2/wiki/Common-issues)
[UIAutomator2的使用 ](https://vic.kim/2019/05/20/UIAutomator2%E7%9A%84%E4%BD%BF%E7%94%A8/)

<!--more-->
###刷视频
```python
import uiautomator2 as u2
import time

d = u2.connect('192.168.98.142')


def next_play():
    if d(text="重播").exists:
        d(text="下一篇").click()
    else:
        time.sleep(3)
        d.double_click(0.77, 0.481, 0.2)
        a = d(resourceId="com.able.wisdomtree:id/ijk_layout_controller_cover_time_txt").get_text()
        c = total_time = a.split("/")[1]
        b = used_time = a.split("/")[0]
        #print(c, b)
        used_seconds = int(b.split(":")[0]) * 60 + int(b.split(":")[1])
        total_seconds = int(c.split(":")[0]) * 60 + int(c.split(":")[1])
        #print(used_seconds, total_seconds)
        left_time = total_seconds - used_seconds + 1 
        print(left_time)
        time.sleep(left_time)
        
i =0
        
while i < 50:
    next_play()
    print(i)
          
```


###mt论坛签到

```python
import uiautomator2 as u2
import time

d=u2.connect('192.168.98.142')
d.app_start('cc.binmt.bbs.v2', stop=True)

#等待界面加载
if d(text="每日签到 轻松赚取金币").exists(timeout=5):
        d(text="每日签到 轻松赚取金币").click()
else:
    print("not exists!")

#签到
if d(resourceId="signresult").exists(timeout=5):
    d(resourceId="signresult").click()
else:
    print("not exists!")

#关闭mt论坛
d.app_stop('cc.binmt.bbs.v2')
```
