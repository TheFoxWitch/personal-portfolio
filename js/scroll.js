$(document).ready(function() {

    $(window).scroll(function() {
        $(".top").css("opacity", 1.1 - $(window).scrollTop() / 250);
    });
    $(window).scroll(function() {
        $("#about").css("opacity",2.3 - $(window).scrollTop() / 350);
    });
});
