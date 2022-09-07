window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

document.getElementById("navbar").style.background = "rgb(153,133,110)";
} else {

document.getElementById("navbar").style.background = "rgba(153,133,110,0.3)";
}
}
