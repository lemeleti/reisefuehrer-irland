<?php
// load config file
require_once realpath(dirname(__FILE__) . '/../resources/config.php');

/*
 * uncomment only for development and upload then the thumbnails,
 * because most images are to big to allocate the allowed memory size
 */

// require_once LIBRARY_PATH . '/thumbnail_library.php';
// $thumbnailWidth = 640;
// createThumbnails("img/architecture/fullsize/","img/architecture/thumbnails/", $thumbnailWidth);
// createThumbnails("img/art/fullsize/","img/art/thumbnails/", $thumbnailWidth);
// createThumbnails("img/history/fullsize/","img/history/thumbnails/", $thumbnailWidth);
// createThumbnails("img/kulinarik/fullsize/","img/kulinarik/thumbnails/", $thumbnailWidth);
// createThumbnails("img/music/fullsize/","img/music/thumbnails/", $thumbnailWidth);
// createThumbnails("img/night/fullsize/","img/night/thumbnails/", $thumbnailWidth);
// createThumbnails("img/oasen/fullsize/","img/oasen/thumbnails/", $thumbnailWidth);
// createThumbnails("img/politics/fullsize/","img/politics/thumbnails/", $thumbnailWidth);
// createThumbnails("img/worth-seeing/fullsize/","img/worth-seeing/thumbnails/", $thumbnailWidth);

require_once TEMPLATES_PATH . '/header.php';
require_once TEMPLATES_PATH . '/nav.php';
?>
<section id="dublin">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <h2 class="section-heading">Dublin</h2>
                    <hr class="my-4">
                    <p class="mb-4">Dublin, die Hauptstadt Irlands, liegt an der
                        Ostk&uuml;ste der Insel. Die Stadt wird durch den Fluss Liffey in
                        einen Nord- und einen S&uuml;dteil gegliedert. Der Flughafen liegt
                        etwas ausserhalb, die Verbindung mit dem &ouml;ffentlichen Verkehr
                        ist aber sehr gut organisiert. Dublin hat eine wirklich
                        sch&ouml;ne Altstadt, die uns stark an London erinnert. Temple
                        bar, ein besonders beliebter Stadtteil, ist sehr interessant, die
                        Gassen sind dort ges&auml;umt mit Gesch&auml;ften, Restaurants und
                        Pubs. Durch Dublins Strassen fahren Doppeldeckerbusse und
                        &uuml;ber die Liffey f&uuml;hren viele sehenswerte Br&uuml;cken.
                        Am Ufer gibt es zahlreiche B&auml;nke, auf denen man sich eine
                        Pause g&ouml;nnen und den Fluss oder die Leute beobachten kann.</p>
                    <div class="w3-content w3-display-container slides my-4">
                        <img src="img/sample/weiss.jpg" />

                        <button class="w3-button w3-black w3-display-left"
                            onclick="plusDivs(this.parentElement,-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right"
                            onclick="plusDivs(this.parentElement,1)">&#10095;</button>
                    </div>
                    <div class="w3-content w3-display-container slides my-4">
                        <img src="img/sample/grau.jpg" />

                        <button class="w3-button w3-black w3-display-left"
                            onclick="plusDivs(this.parentElement,-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right"
                            onclick="plusDivs(this.parentElement,1)">&#10095;</button>
                    </div>
                    <div class="w3-content w3-display-container slides my-4">
                        <img src="img/sample/schwarz.jpg" />

                        <button class="w3-button w3-black w3-display-left"
                            onclick="plusDivs(this.parentElement,-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right"
                            onclick="plusDivs(this.parentElement,1)">&#10095;</button>
                    </div>
                    <div class="w3-content w3-display-container slides my-4">
                        <img src="img/sample/ausschnitt.jpg" />

                        <button class="w3-button w3-black w3-display-left"
                            onclick="plusDivs(this.parentElement,-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right"
                            onclick="plusDivs(this.parentElement,1)">&#10095;</button>
                    </div>
                    <div class="w3-content w3-display-container slides my-4">
                        <img src="img/sample/weiss.jpg" /> <img src="img/sample/grau.jpg" />
                        <img src="img/sample/schwarz.jpg" /> <img
                            src="img/sample/ausschnitt.jpg" />

                        <button class="w3-button w3-black w3-display-left"
                            onclick="plusDivs(this.parentElement,-1)">&#10094;</button>
                        <button class="w3-button w3-black w3-display-right"
                            onclick="plusDivs(this.parentElement,1)">&#10095;</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <h2 class="section-heading">&Uuml;ber Uns</h2>
                    <hr class="my-4">
                    <p class="mb-4">Wir sind vier Studierende aus der
                        Berufsmittelschule Winterthur. F&uuml;r unsere
                        Maturit&auml;tsarbeit durften wir ein kreatives Projekt gestalten
                        zum Oberthema Dublin. Um dir die Stadt Dublin n&auml;her zu
                        bringen, haben wir vor Ort unsere Spazierg&auml;nge entworfen.
                        F&uuml;r junge Erwachsene im Low-Budget-Bereich haben wir eine
                        interaktive Homepage erstellt, auf der du je nach
                        Interessensgebiet einen Spaziergang findest. Wir hoffen, wir
                        k&ouml;nnen dir mit unserer Arbeit einige Vorbereitungszeit
                        f&uuml;r deine Reise nach Dublin abnehmen. Viel Spass beim
                        St&ouml;bern w&uuml;nschen dir Anabel B., C&eacute;line G.,
                        Leandro M. und Silke B.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="spaziergaenge">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <h2 class="section-heading">Spazierg&auml;nge</h2>
                    <div class="map" id="map"></div>
                    <h5>Architektur (Farbe)</h5>
                    <pre>Dieser Spaziergang f&uuml;hrt dich quer durch ganz Dublin an wichtigen architektonischen Bauten vorbei. Die Zeitepoche reicht vom Mittelalter bis zur heutigen Zeit.</pre>
                    <h5>Geschichte (Farbe)</h5>
                    <pre>Interessiert dich Geschichte? Aber willst du Dir dein Wissen nicht nur aus Museen und B&uuml;chern holen? Dann findest du den kleinen Exkurs in die Dubliner Geschichte sicher spannend. Dieser Spaziergang f&uuml;hrt dich durch vergangene Zeiten und vermittelt Dir ein paar Eindr&uuml;cke. Wenn Dir etwas besonders gef&auml;llt, steht es dir frei, ob du noch mehr aus dieser Zeit entdecken willst.</pre>
                    <h5>Kulinarik (Farbe)</h5>
                    <pre>Wenn du nicht nur Burger und Pommes essen und nach dem Guinness Abend am n&auml;chsten Morgen einen hervorragenden Kaffee mit oder ohne Brunch geniessen m&ouml;chtest, sind diese Restaurants perfekt.</pre>
                    <h5>Kunst (Farbe)</h5>
                    <pre>Der Spaziergang ist ideal f&uuml;r Leute, die nicht nur in Museen verweilen wollen, sondern parallel zur Kunst auch die wundersch&ouml;ne Stadt entdecken m&ouml;chten. Die Tour beschr&auml;nkt sich auf Streetart und kann gut mit anderen Touren kombiniert werden. Streetart ist sehr lebendig und immer im Wandel, daher kann sich viel ver&auml;ndern und wir garantieren nicht, dass die beschriebenen Kunstwerke noch vorhanden sind, wenn du sie dir ansehen willst. Unser Tipp: Achte beim Flanieren auch auf die Nebengassen, Streetart versteckt sich genau dort, wo man nicht darauf achtet.</pre>
                    <h5>Musik (Farbe)</h5>
                    <pre>In Dublin ist Musik sehr wichtig. In vielen Pubs kann man traditionelle Livemusik erleben, aber auch Rock'n Roll, Jazz und Klassik spielen eine wichtige Rolle. Aus Dublin kommt Irlands ber&uuml;hmteste Rockband U2. Dieser Spaziergang f&uuml;r Dich an Orte, die mit Musik zu tun haben.</pre>
                    <h5>Nacht (Farbe)</h5>
                    <pre>In Dublin kann man auch am Abend viel sehen und erleben. Es gibt zahlreiche Pubs und Restaurants und viele Br&uuml;cken &uuml;ber die Liffey sind nachts beleuchtet. Ein sehr beliebtes Viertel ist Temple Bar, dort hat es an jeder zweiten Ecke ein Pub oder eine Bar.</pre>
                    <h5>Oasen (Farbe)</h5>
                    <pre>Brauchst du Zeit, um abzuschalten oder einfach einmal die Zeit zu geniessen und dies erst noch an der frischen Luft, dann wirst du hier sicher f&uuml;ndig</pre>
                    <h5>Politik (Farbe)</h5>
                    <pre>Dieser Spaziergang f&uuml;hrt dich zu historischen und heute wichtigen Geb&auml;uden, die mit dem Thema Politik zu tun haben.</pre>
                    <h5>Sehenswert (Farbe)</h5>
                    <pre>Dieser Spaziergang f&uuml;hrt dich vorbei an bekannten Geb&auml;uden, Orten und Sehensw&uuml;rdigkeiten.</pre>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="architecure">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/architecture.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="history">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/history.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="kulinarik">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/kulinarik.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="art">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/art.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="music">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/music.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="night">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/night.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="oasen">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/oasen.php' ?>
                    <hr class="vertical-center large">
                </div>
            </div>
        </div>
    </div>
</section>

<section id="politic">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/politic.php' ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="worth-seeing">
    <div class="container-fluid root-container-width">
        <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <div class="content-container">
                    <?php include TEMPLATES_PATH . '/worth-seeing.php' ?>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="impressum">
    <div class="container-fluid root-container-width">
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
                <i class="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                <p class="text-center">
                    <a href="mailto:info@reisefuehrer-irland.ch ">info@reisefuehrer-irland.ch
                    </a>
                </p>
            </div>
            <div class="col-lg-4 mr-auto text-center">
                <i class="fa fa-user-circle-o fa-3x mb-3 sr-contact"></i>
                <p class="text-center">Built by Leandro Meleti using Bootstrap</p>
            </div>
        </div>
    </div>
</section>
<?php
// TODO: entfernen, wenns nicht funktioniert
if (! function_exists('mobile_user_agent_switch')) {

    function is_client_apple_device()
    {
        return stristr($_SERVER['HTTP_USER_AGENT'], 'ipad') || stristr($_SERVER['HTTP_USER_AGENT'], 'iphone');
    }
}

require_once TEMPLATES_PATH . '/footer.php';
?>
