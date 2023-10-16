$(document).ready(function(){
    $(".content:first").show();
    $("option-box").addClass("active");

    $(".option-box").click(function (event) {
        index = $(this).index();
        $(".option-box").removeClass("active");
        $(this).addClass("active");
        $(".content").hide();
        $(".content").eq(index).fadeIn(500);
    });
})