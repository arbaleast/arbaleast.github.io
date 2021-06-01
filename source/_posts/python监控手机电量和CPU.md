---
title: python监控手机电量和CPU~
date: 2021-06-01 11:11:59
tags: python
description: somethingelse
---

[通过adb shell dumpsys + python监控手机电量和CPU](https://blog.csdn.net/weixin_44546340/article/details/88871203)

```python
import threading
import time
import os


CPUdata = []
BATTERYdata = []

#获取CPU信息
def GetCpuinfo():
	a = "----"
	result= os.popen('''adb shell "dumpsys" cpuinfo | grep ru.kslabs.ksweb''')
	for line in result.readlines():
		cpuvalue = line.split()[0]
		currentTime = Times()
		CPUdata.append(currentTime + a*2 + "CPU使用率：" + cpuvalue + "\n")
	a = "CPU-INFO.txt"
	SaveData(CPUdata, a)

#获取手机电量
def Battery():
	a = "----"
	lists = []

	data = os.popen("adb shell dumpsys battery")
	for line in data.readlines():
		batteryvalue = line.split()[1]
		lists.append(batteryvalue)
	currentTime = Times()
	BATTERYdata.append(currentTime + a*2 + "电量状态为：" + lists[10] + "\n")
	b = "BATTERY-INFO.txt"
	SaveData(BATTERYdata, b)
	print(lists)
	return lists

#当前时间
def Times():
	currentTime = time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
	return currentTime

#将CPU信息写入txt
def SaveData(infos, name):
	fi = open(name, "w+")
	fi.write(''.join(infos))
	fi.close()


#循环运行
def ForRun():
	i = 0
	while i >= 0:
		threa = []
		threa.append(threading.Thread(target=GetCpuinfo))
		threa.append(threading.Thread(target=Battery))
		for a in threa:
			a.start()
		time.sleep(1)

		i += 1


#camera拍照测试
def CameraAutoTest():
	i = 0
	lists = []
	while i >= 0:
		os.popen("adb shell input keyevent 24")
		i += 1
		print("%s\tTesting in session %d" %(Times(), i))

		datas = "%s\t正在拍第%d张照片\n" %(Times(), i)
		lists.append(datas)
		fl = open("cameratest.log", "w+")
		fl.write("".join(lists))
		fl.close()
		time.sleep(5)
```

### 手机自动充电

设想电量小于15%充电;大于85%断电

[https://blog.csdn.net/skyxiaojt/article/details/80190992](使用adb命令查看电池电量信息)

