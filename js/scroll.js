$(document).ready(function() {

    $(window).scroll(function() {
        $(".top").css("opacity", 1.0 - $(window).scrollTop() / 250);
    });
    $(window).scroll(function() {
        $("#about").css("opacity",3.3 - $(window).scrollTop() / 350);
    });
});
