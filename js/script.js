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
    document.getElementById("requestButton").style.background = "#1D4ED8";
    document.getElementById("requestButton").style.color = "#ffffff";
    document.getElementById("requestButton").style.pointerEvents = "auto";
    document.getElementById("requestButton").innerHTML = "ACCOUNT REQUEST";
  }
});

window.onresize = closeMenuResize;

function closeMenuResize() {
  document.getElementById("mobileMenu").style.transform = "scale(0.9,0.9)";
  document.getElementById("mobileMenu").style.opacity = 0;
  document.getElementById("mobileMenu").style.pointerEvents = "none";
  document.getElementById("requestMobile").style.display = "none";
  document.getElementById("requestButton").style.background = "#1D4ED8";
  document.getElementById("requestButton").style.color = "#ffffff";
  document.getElementById("requestButton").style.pointerEvents = "auto";
  document.getElementById("requestButton").innerHTML = "ACCOUNT REQUEST";
  document.getElementById("overlay").style.opacity = 0;
  document.getElementById("overlay").style.pointerEvents = "none";
}


