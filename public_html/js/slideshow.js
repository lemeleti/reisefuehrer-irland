// init
var slides = $("div.slides");
var slideIndexes = new Array(slides.length);

for (var i = 0; i < slideIndexes.length; i++) {
	slideIndexes[i] = 1;
}

// show
slides.each(function(index) {
	showDivs(this, slideIndexes[index], index);
});

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
		if (newIndex > images.length) {
			slideIndexes[slideIndex] = 1;
		}
		if (newIndex < 1) {
			slideIndexes[slideIndex] = images.length;
		}
		for (var i = 0; i < images.length; i++) {
			images[i].style.display = "none";
		}
		images[slideIndexes[slideIndex] - 1].style.display = "block";
	}
}