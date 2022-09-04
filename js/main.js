window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

document.getElementById("navbar").style.background = "rgb(237, 106, 90)";
} else {

document.getElementById("navbar").style.background = "none";
}
}
