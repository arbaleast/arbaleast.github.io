<div class="hitokoto-title">
	<i class="fa fa-paragraph"></i>
	<b>一言</b>
</div>
<div id="hitokoto">:D 获取中...</div>
<i id="hitofrom">:D 获取中...</i>
<script>
  fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + data.hitokoto;
      var hitofrom = document.getElementById('hitofrom');
      hitofrom.innerText = "——" + data.from + '\xa0'; 
    })
    .catch(function (err) {
      console.error(err);
    })
</script>
