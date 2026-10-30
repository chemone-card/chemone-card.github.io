(function () {
  // 다른 사이트가 이 앱을 자기 화면 안에 몰래 넣어(iframe) 누르게 하는 공격 막기 — 맨 위 창이 아니면 보여 주지 않는다
  if (window.top !== window.self) {
    document.documentElement.style.display = 'none';
    try {
      window.top.location = window.self.location.href;
    } catch (_) {}
    return;
  }
  var KEY = 'chemone-boot-reload';
  window.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'SCRIPT' || (t.src || '').indexOf('/_expo/static/') < 0) return;
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, '1');
    } catch (_) {
      return;
    }
    var u = new URL(location.href);
    u.searchParams.set('v', String(Date.now()));
    location.replace(u.toString());
  }, true);
  window.addEventListener('load', function () {
    try {
      sessionStorage.removeItem(KEY);
    } catch (_) {}
  });
})();
