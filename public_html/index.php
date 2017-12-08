<?php
    // load config file
    require_once realpath(dirname(__FILE__) . '/../resources/config.php');
    require_once TEMPLATES_PATH . '/header.php';
?>

	<body id="page-start">
    	<header class="masthead text-center text-white d-flex">
    		<div class="container my-auto">
    			<div class="row">
    				<div class="col-lg-10 mx-auto">
    					<h1 class="text-uppercase">
    						<strong>Your Favorite Source of Free Bootstrap Themes</strong>
    					</h1>
    					<hr>
    				</div>
    				<div class="col-lg-8 mx-auto">
    					<p class="text-faded mb-5">Start Bootstrap can help you build
    						better websites using the Bootstrap CSS framework! Just download
    						your template and start going, no strings attached!</p>
    					<a class="btn btn-primary btn-xl" href="home.php">Find Out More</a>
    				</div>
    			</div>
    		</div>
    	</header>
<?php
    require_once TEMPLATES_PATH . '/footer.php';
?>