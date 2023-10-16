$(document).ready(function(){
    $("#awaken").fadeIn("1000");

    let imageSrc = ["/image/thumb_novel1.png", "/image/thumb_novel2.png"
                    ,"/image/thumb_novel3.png","/image/thumb_novel4.png",
                    "/image/thumb_img_novel.png"];
    let count = 0;
    function changeImg(){
        $(".img-container img").hide();
        $(".img-container img").fadeIn(500).attr("src", imageSrc[count]);
        count = (count + 1) % 5;
    }
    setInterval(changeImg, 15000);
})