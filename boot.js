(function () {
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
