window.onload = function () {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("transition-animation");
    AOS.init({
        duration: 1500,
        once: true,
    });
}   //End window.onload
