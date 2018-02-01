// add margin because of nav
$(document).ready(function() {
	$("#page-top > section:first").css("margin-top", "50px");
});

// hide when clicked outside
$(document).click(function() {
	$('.dropdown-menu').removeClass("show");
});

// hide when clicked on a menu item
$(".js-scroll-trigger").click(function() {
	$('.dropdown-menu').removeClass("show");
});

// dot color
$(function() {
	var allRoutes = loadJson('allRoutes.json');
	for (var r = 0; r < allRoutes.length; r++) { 
		var route = allRoutes[r];
		var colorId = '.colorId_' + route['id'];
		var color = '#' + route['strokeColor'];
		$(colorId).css('background-color', color);
	}
});

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

	if (linkText === "MEHR...") {
		linkText = "...weniger";
		$content.addClass("showContent");
		$content.removeClass("hideContent");
	} else {
		linkText = "mehr...";
		$content.addClass("hideContent");
		$content.removeClass("showContent");
	}

	$this.text(linkText);
});

// accordion
function toggleAccordion(parent) {
	$('#collapseOne').collapse('toggle');
	
	var sign = $(parent).find("I");
	if (sign.text() == "+") {
		sign.text("-");
	} else {
		sign.text("+");
	}
}
