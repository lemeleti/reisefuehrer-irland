var slideIndex = 1;
// TODO: optimize slider loop when all sliders are set! 
for (var i = 1; i <= 9; i++) {
	showDivs("slides_" + i, slideIndex);
}

function plusDivs(slider, n) {
	showDivs(slider, slideIndex += n);
}

function showDivs(slider, n) {
	var i;
	var x = document.getElementsByClassName(slider);
	if (x.length > 0) {
		if (n > x.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = x.length;
		}
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
		x[slideIndex - 1].style.display = "block";
	}
}