<?php
// load config file
require_once realpath(dirname(__FILE__) . '/../resources/config.php');
require_once TEMPLATES_PATH . '/header.php';
?>
<!-- TODO: Merge index.php and home.php -->
<body id="page-start">
    <header class="masthead text-center text-white d-flex">
        <div class="container my-auto">
            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <h1 class="text-uppercase text-border-black">
                        <strong>Interaktive Homepage &uuml;ber Dublin</strong>
                    </h1>
                    <h2 class="text-border-black">
                        <strong>Spazierg&auml;nge und Besuchstipps f&uuml;r junge
                            Erwachsene</strong>
                    </h2>
                </div>
                <div class="col-lg-8 mx-auto">
                    <a class="btn btn-secondary btn-xl" href="home.php">Start</a>
                </div>
            </div>
        </div>
    </header>
<?php
require_once TEMPLATES_PATH . '/footer.php';
?>