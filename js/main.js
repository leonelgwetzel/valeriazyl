window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    $("#bannerRetiro").removeClass("d-none");
document.getElementById("navbar").style.background = "rgb(191, 95, 84)";
} else {

document.getElementById("navbar").style.background = "rgba(191, 95, 84, 0.3)";
}
}

//Cerrar Banner
$("#closeBanner").click(function(){
    $("#bannerRetiro").remove();
});