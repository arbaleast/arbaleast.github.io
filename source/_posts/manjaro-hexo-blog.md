---
title: manjaro + hexo = blog
date: 2021-05-09 11:45:14
tags:
description: 个性化hexo
---

###添加utterances评论模块
>[Use utterances as Hexo Next theme comments](https://huifeng.me/posts/use-utteranc-as-hexo-comments/)

utterance配置
新建utterances.swig文件
```
touch <your theme path>/layout/_third-party/comments/utterances.swig
vim <your theme path>/layout/_third-party/comments/utterances.swig
```
添加如下内容
```
{% if theme.utterances.enable %}
  <script src="https://utteranc.es/client.js"
    repo="{{ theme.utterances.repo }}"
    issue-term="{{ theme.utterances.issue_term }}"
    label="{{ theme.utterances.label }}"
    theme="{{ theme.utterances.theme }}"
    crossorigin="anonymous"
    async>
  </script>
{% endif %}

```


新建comments.swig文件
>vim <your theme path>/layout/_partials/comments.swig



---
#在主题的配置文件中启用utterances

填写对应内容
```
utterances:
  enable: true
  repo:                                               	# owner/repo
  issue_term:                                         	# pathname, url, title, og:title [ISSUE NUMBER] or [SPECIFIC TERM]
  theme: 						                        # github-light or github-dark
  label: 💬Comments  					                #  The label must exist in your repo, mine is 💬Com
```
注:如果登录后github后网页重定向至未知网页，记得修改hexo的url的博客地址
[自托管 Utterances 教程：基于 Github Issues 的轻量级博客评论系统 ](https://blog.njilc.com/post/self-hosted-utterances-tutorial#%E9%80%9A%E8%BF%87cfworker%E9%83%A8%E7%BD%B2)
[Hexo+NexT使用utterances评论插件](https://zhuanlan.zhihu.com/p/76237379)
---
免帐号密码上传github
生成并获取本机的ssh公钥
   ssh-keygen -t rsa    		#之后的选择回车选择默认
   cat ~/.ssh/id_rsa.pub 
然后在github帐号里面添加ssh密钥
测试ssh能否连接到github
   ssh -T git@github.com				#成功一般会提示 Hi username! You've successfully authenticated, but GitHub does not provide shell access

修改hexo的_config.yml文件

```
deploy
  type: git
  repo: git@github.com:xxxx/xxxx.github.io.git
  #格式必须是上述格式
  branch: master
```

---
自定义404page
[Hexo折腾系列（二）自定义404页面](https://blog.luzy.top/posts/456645515/)
[404模板网站](https://codepen.io/kdbkapsere/pen/oNXLbqQ)
