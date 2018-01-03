// init
var slides = $("div.slides");
var slideIndexes = new Array(slides.length);

for (var i = 0; i < slideIndexes.length; i++) {
	slideIndexes[i] = 1;
}

// show
showSlides();

// trigger event (rotate mobile or tablet)
$(window).resize(function() {
	showSlides();
});

function showSlides() {
	slides.each(function(index) {
		showDivs(this, slideIndexes[index], index);
	});
}

function plusDivs(element, n) {
	/*
	 * If slider has been found in the array, increase its index by 1 and call
	 * the show function
	 */
	for (var i = 0; i < slides.length; i++) {
		if (slides[i] == element) {
			slideIndexes[i] += n;
			showDivs(element, slideIndexes[i], i);
			break;
		}
	}
}

/*
 * Check if index exists. If not set low or max value based on the user action.
 * Afterwards display the new image.
 */
function showDivs(element, newIndex, slideIndex) {
	var images = element.getElementsByTagName("IMG");
	if (images.length > 0) {
		if (images.length == 1) {
			$(element).find("BUTTON").remove();
		}
		if (newIndex > images.length) {
			slideIndexes[slideIndex] = 1;
		}
		if (newIndex < 1) {
			slideIndexes[slideIndex] = images.length;
		}
		for (var i = 0; i < images.length; i++) {
			if($(window).width() <= 760) {
				// mobile
				$(images[i]).attr("src", $(images[i]).attr("src").replace("fullsize", "thumbnails"));
			} else {
				// tablet or bigger
				$(images[i]).attr("src", $(images[i]).attr("src").replace("thumbnails", "fullsize"));
			}
			images[i].style.display = "none";
		}
		images[slideIndexes[slideIndex] - 1].style.display = "block";
	}
}
