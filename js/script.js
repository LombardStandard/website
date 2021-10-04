var d = new Date();
var n = d.getFullYear();
document.getElementById("copyright").innerHTML = n;

document.getElementById("overlayOn").addEventListener("click", function() {
    document.getElementById("userMenu").style.opacity = 0;
    document.getElementById("userMenu").style.pointerEvents = "none";
    setTimeout(function() {
        document.getElementById("overlay").style.opacity = 1;
        document.getElementById("overlay").style.pointerEvents = "auto";
    }, 500);
});

document.getElementById("overlayOff").addEventListener("click", function() {
    document.getElementById("overlay").style.opacity = 0;
    document.getElementById("overlay").style.pointerEvents = "none";
});

document.addEventListener("click", function(e) {
    var container1 = document.getElementById("userMenu");
    if (!container1.contains(e.target)) {
        container1.style.opacity = 0;
        container1.style.pointerEvents = "none";
    }
    document.getElementById("user").addEventListener("click", function() {
        var userMenuOpacity = document.getElementById("userMenu").style.opacity;
        if (userMenuOpacity == 0) {
            document.getElementById("userMenu").style.opacity = 1;
            document.getElementById("userMenu").style.pointerEvents = "auto";
        } else {
            document.getElementById("userMenu").style.opacity = 0;
            document.getElementById("userMenu").style.pointerEvents = "none";
        }
    });
});


document.getElementById("requestButton").addEventListener("click", function() {
    document.getElementById("requestMobile").style.display = "block";
    document.getElementById("requestButton").style.background = "transparent";
    document.getElementById("requestButton").style.color = "#1D4ED8";
    document.getElementById("requestButton").style.pointerEvents = "none";
    document.getElementById("requestButton").innerHTML =
        "Fill in your details, we'll be in touch.";
});

document.getElementById("closeRequest").addEventListener("click", function() {
    document.getElementById("requestMobile").style.display = "none";
    document.getElementById("requestButton").style.background = "#D1D5DB";
    document.getElementById("requestButton").style.color = "#111827";
    document.getElementById("requestButton").style.pointerEvents = "auto";
    document.getElementById("requestButton").innerHTML = "REQUEST AN ACCOUNT";
});
window.onresize = closeMenuResize;

function closeMenuResize() {
    document.getElementById("mobileMenu").style.transform = "scale(0.9,0.9)";
    document.getElementById("mobileMenu").style.opacity = 0;
    document.getElementById("mobileMenu").style.pointerEvents = "none";
    document.getElementById("requestMobile").style.display = "none";
    document.getElementById("requestButton").style.background = "#D1D5DB";
    document.getElementById("requestButton").style.color = "#111827";
    document.getElementById("requestButton").style.pointerEvents = "auto";
    document.getElementById("requestButton").innerHTML = "REQUEST AN ACCOUNT";
    document.getElementById("overlay").style.opacity = 0;
    document.getElementById("overlay").style.pointerEvents = "none";
    document.getElementById("userMenu").style.opacity = 0;
    document.getElementById("userMenu").style.pointerEvents = "none";
}

_linkedin_partner_id = "3365265";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
(function() {
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})();
