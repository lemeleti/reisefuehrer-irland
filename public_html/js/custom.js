// show/hide content
$(function() {
	var $content = $("div.content");
    $content.addClass("hideContent");
});

$(".show-more a").on("click", function(e) {
	e.preventDefault();
    var $this = $(this); 
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();    

    if(linkText === "MEHR..."){
        linkText = "weniger...";
        //$content.switchClass("hideContent", "showContent", 400);
        $content.addClass("showContent");
        $content.removeClass("hideContent");
    } else {
        linkText = "mehr...";
//        $content.switchClass("showContent", "hideContent", 400);
        $content.addClass("hideContent");
        $content.removeClass("showContent");
    };

    $this.text(linkText);
});