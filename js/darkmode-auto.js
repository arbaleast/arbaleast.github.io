// 根据日出日落自动切换明暗主题
// 上海经纬度: 31.2304, 121.4737

(function() {
  const LAT = 31.2304;
  const LON = 121.4737;
  const TZ = 8; // 北京时区

  // 计算日出日落
  function getSunTimes(date) {
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);
    
    // 近似计算
    const declination = 23.45 * Math.sin((360 / 365) * (dayOfYear - 81) * Math.PI / 180);
    const latRad = LAT * Math.PI / 180;
    const declRad = declination * Math.PI / 180;
    
    const cosH = -Math.tan(latRad) * Math.tan(declRad);
    const H = cosH <= -1 ? 180 : cosH >= 1 ? 0 : Math.acos(cosH) * 180 / Math.PI;
    
    const sunriseHour = 12 - H / 15 - LON / 15 + TZ;
    const sunsetHour = 12 + H / 15 - LON / 15 + TZ;
    
    return {
      sunrise: sunriseHour * 60,
      sunset: sunsetHour * 60
    };
  }

  function isDarkMode() {
    const now = new Date();
    const minutes = now.getHours() * 60 + now.getMinutes();
    const { sunrise, sunset } = getSunTimes(now);
    return minutes < sunrise || minutes >= sunset;
  }

  function applyTheme() {
    const isDark = isDarkMode();
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('dark-mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('dark-mode', 'false');
    }
  }

  // 初始化
  applyTheme();
  
  // 每分钟检查
  setInterval(applyTheme, 60000);
})();