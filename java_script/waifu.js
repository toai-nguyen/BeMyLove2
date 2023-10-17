$(document).ready(function(){
    $("#york").fadeIn(1000);
    $("#enterprise").fadeIn(1200);
    $("#hullnumber").fadeIn(1500);
    $(".introduce").fadeIn(1700);
    $(".thumb:first").fadeIn();
    $(".text-content:first").fadeIn(100);
    $(".item:first").addClass("active");
    $(".item-img:first").addClass("active");
    $(".thumb-main-img").show();

    $(".item").click(function(event){
        let index = $(this).index();
        $(".item").removeClass("active");
        $(this).addClass("active");
        $(".text-content").hide();
        $(".thumb").hide();
        $(".text-content").eq(index).fadeIn(500);
        $(".thumb").eq(index).fadeIn(500);
    });

    $(".item-img").click(function(event){
        let index = $(this).index();
        $(".item-img").removeClass("active");
        $(this).addClass("active");
        let $target = $(this).find("img");
        let src = $target.attr("src")
        $(".thumb-main-img img").hide();
        $(".thumb-main-img img").fadeIn(500).attr('src', src);
    });

    let imageSrc = ["../image/Enterprise.png", "../image/Enterprise_Bon_Voyage.png",
        "../image/EnterpriseChristmas.png", "../image/EnterpriseRoadtrip.png", "../image/EnterpriseSpring.png" ];
        let count = 0;
    function changeImg(){
        $(".thumb-main-img img").hide();
        $(".thumb-main-img img").fadeIn(500).attr('src', imageSrc[count]);
        count = (count + 1) % imageSrc.length;
    }
    setInterval(changeImg, 15000);
});


