var d = new Date();
var n = d.getFullYear();
document.getElementById("copyright").innerHTML = n;

document.getElementById("openMenu").addEventListener("click", function () {
  var mobileMenu = document.getElementById("mobileMenu").style.opacity;
  if (mobileMenu == 0) {
    document.getElementById("mobileMenu").style.transform = "scale(1,1)";
    document.getElementById("mobileMenu").style.opacity = 1;
    document.getElementById("mobileMenu").style.pointerEvents = "auto";
  } else {
    document.getElementById("mobileMenu").style.transform = "scale(0.9,0.9)";
    document.getElementById("mobileMenu").style.opacity = 0;
    document.getElementById("mobileMenu").style.pointerEvents = "none";
    document.getElementById("requestMobile").style.display = "none";
    document.getElementById("requestButton").style.opacity = 1;
    document.getElementById("requestButton").style.pointerEvents = "auto";
  }
  document.getElementById("requestMobile").style.display = "none";
});

window.onresize = closeMenuResize;

function closeMenuResize() {
  document.getElementById("mobileMenu").style.transform = "scale(0.9,0.9)";
  document.getElementById("mobileMenu").style.opacity = 0;
  document.getElementById("mobileMenu").style.pointerEvents = "none";
  document.getElementById("requestMobile").style.display = "none";
  document.getElementById("requestButton").style.opacity = 1;
  document.getElementById("requestButton").style.pointerEvents = "auto";
}

_linkedin_partner_id = "3365265";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function () {
  var s = document.getElementsByTagName("script")[0];
  var b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode.insertBefore(b, s);
})();
