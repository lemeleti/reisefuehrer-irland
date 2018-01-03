<?php
// load config file
require_once realpath(dirname(__FILE__) . '/../resources/config.php');
require_once TEMPLATES_PATH . '/header.php';
require_once TEMPLATES_PATH . '/nav.php';
?>
<section id="dublin">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
					<h2 class="section-heading">Dublin</h2>
					<hr class="my-4">
					<p class="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
						dolor in reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est
						laborum.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="about">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
					<h2 class="section-heading">Wer sind wir!</h2>
					<hr class="my-4">
					<p class="mb-4">Wir sind vier Studierende aus der
						Berufsmittelschule Winterthur. F&uuml;r unsere Maturaarbeit
						durften wir ein kreatives Projekt gestalten zum Oberthema Dublin.
						Um dir die Stadt Dublin n&auml;her zu bringen, haben wir vor Ort
						unsere Spazierg&auml;nge entworfen. F&uuml;r junge Erwachsene im
						Low-Budget-Bereich haben wir eine interaktive Homepage erstellt,
						auf der du je nach Interessensgebiet einen Spaziergang findest.
						Wir hoffen, wir k&ouml;nnen dir mit unserer Arbeit einige
						Vorbereitungszeit f&uuml;r deine Reise nach Dublin abnehmen. Viel
						Spass beim St&ouml;bern w&uuml;nschen dir Anabel, C&eacute;line,
						Leandro und Silke.</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="spaziergaenge">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
					<h2 class="section-heading">Rundg&auml;nge</h2>
					<!-- TODO: insert map -->
					<p style="color: red;">Hier kommt die Karte f&uuml;r alle Touren
						hin</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="architecure">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
	                <?php include TEMPLATES_PATH . '/architecture.php' ?>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="oasen">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
	                <?php include TEMPLATES_PATH . '/oasen.php' ?>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="politik">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
                    <?php include TEMPLATES_PATH . '/politic.php' ?>
    				<hr class="vertical-center large">
				</div>
			</div>
		</div>
	</div>
</section>

<section id="impressum">
	<div class="container-fluid width-80">
		<div class="row">
			<div class="col-lg-8 mx-auto text-center">
				<div class="content-container">
					<h2 class="section-heading">Impressum</h2>
					<hr class="my-4">
					<p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing
						elit, sed do eiusmod tempor incididunt ut labore et dolore magna
						aliqua.</p>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-4 ml-auto text-center">
				<i class="fa fa-phone fa-3x mb-3 sr-contact"></i>
				<p class="text-center">123-456-6789</p>
			</div>
			<div class="col-lg-4 mr-auto text-center">
				<i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
				<p class="text-center">
					<a href="mailto:your-email@your-domain.com">feedback@startbootstrap.com</a>
				</p>
			</div>
		</div>
	</div>
</section>

<?php
require_once TEMPLATES_PATH . '/footer.php';
?>