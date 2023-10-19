$(document).ready(function () {
    $(".intro-container").fadeIn(500);
    $(".content:first").fadeIn(100);
    $(".des-box:first").addClass("active");
    $(".des-box").click(function (event) {
        index = $(this).index();
        $(".des-box").removeClass("active");
        $(this).addClass("active");
        $(".content").hide();
        $(".content").eq(index).fadeIn(500);
    });
});