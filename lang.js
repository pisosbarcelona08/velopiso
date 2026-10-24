// Spanish / English toggle shared by every page. Remembered per browser when storage is available.
(function () {
  var html = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var lang = saved || ((navigator.language || "es").slice(0, 2) === "en" ? "en" : "es");
  function set(l) {
    html.setAttribute("lang", l);
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === l));
    });
    try { localStorage.setItem("lang", l); } catch (e) {}
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".langs button").forEach(function (b) {
      b.addEventListener("click", function () { set(b.dataset.lang); });
    });
    set(lang);
  });
  set(lang);
})();
