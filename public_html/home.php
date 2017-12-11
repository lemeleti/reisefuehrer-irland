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

<section id="dublin">
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

<section id="spaziergaenge" class="bg-dark text-white">
    <div class="container">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-heading">Rundg&auml;nge</h2>
                <p style="color: red;">Hier kommt die Karte f&uuml;r alle Touren hin</p>
                <hr class="light my-4">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <?php include TEMPLATES_PATH . '/politik_block.php' ?>
            </div>
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