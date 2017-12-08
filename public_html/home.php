<?php
// load config file
require_once realpath(dirname(__FILE__) . '/../resources/config.php');
require_once TEMPLATES_PATH . '/header.php';
require_once TEMPLATES_PATH . '/nav.php';
?>
<section class="bg-primary" id="about">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<h2 class="section-heading text-white">Wer sind wir!</h2>
				<hr class="light my-4">
				<p class="text-faded mb-4">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.</p>
			</div>
		</div>
	</div>
</section>

<section id="ireland">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<h2 class="section-heading">Dublin</h2>
				<hr class="my-4">
				<p class="mb-4">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate
					velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt
					mollit anim id est laborum.</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-dark text-white">
	<div class="container text-center">
		<h2 class="mb-4">Free Download at Start Bootstrap!</h2>
		<a class="btn btn-light btn-xl sr-button"
			href="http://startbootstrap.com/template-overviews/creative/">Download Now!</a>
		<hr class="light my-4">
        <div class="w3-content w3-display-container">
          <img class="mySlides" src="img/portfolio/fullsize/1.jpg" style="width:100%">
          <img class="mySlides" src="img/portfolio/fullsize/2.jpg" style="width:100%">
          <img class="mySlides" src="img/portfolio/fullsize/3.jpg" style="width:100%">
          <img class="mySlides" src="img/portfolio/fullsize/4.jpg" style="width:100%">
          <img class="mySlides" src="img/portfolio/fullsize/5.jpg" style="width:100%">
          <img class="mySlides" src="img/portfolio/fullsize/6.jpg" style="width:100%">
          
          <button class="w3-button w3-black w3-display-left" onclick="plusDivs(-1)">&#10094;</button>
          <button class="w3-button w3-black w3-display-right" onclick="plusDivs(1)">&#10095;</button>
        </div>
	</div>
</section>

<section id="impressum">
	<div class="container">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<h2 class="section-heading">Impressum</h2>
				<hr class="my-4">
				<p class="mb-5">Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 ml-auto text-center">
				<i class="fa fa-phone fa-3x mb-3 sr-contact"></i>
				<p>123-456-6789</p>
			</div>
			<div class="col-lg-4 mr-auto text-center">
				<i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
				<p>
					<a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
				</p>
			</div>
		</div>
	</div>
</section>

<?php
require_once TEMPLATES_PATH . '/footer.php';
?>