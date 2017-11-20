$(document).ready(function() {

    $(window).scroll(function() {
        $(".top").css("opacity", 1.0 - $(window).scrollTop() / 250);
    });
    $(window).scroll(function() {
        $(".description").css("opacity",2.8 - $(window).scrollTop() / 390);
    });
});
