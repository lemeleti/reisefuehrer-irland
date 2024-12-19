import {
  Place,
  CHRIST_CHURCH_CATHEDRAL,
  CUSTOM_HOUES,
  DUBLIN_CASTLE,
  O_CONNELL_BRIDGE,
  ST_PATRICKS_CATHEDRAL,
  ST_STEPHENS_GREEN_PARK,
  TRINITY_COLLEGE,
  THE_CHURCH,
  O_NEILS_PUB_AND_KITCHEN,
  CITY_HALL,
} from './sharedPlaces';

export const GUIDES = [
  { path: 'guides/architecture', id: 'architecture', text: 'Architektur' },
  { path: 'guides/history', id: 'history', text: 'Geschichte' },
  { path: 'guides/food', id: 'food', text: 'Kulinarik' },
  { path: 'guides/art', id: 'art', text: 'Kunst' },
  { path: 'guides/music', id: 'music', text: 'Musik' },
  { path: 'guides/night-life', id: 'night-life', text: 'By Night' },
  { path: 'guides/oasen', id: 'oasen', text: 'Oasen' },
  { path: 'guides/politic', id: 'politic', text: 'Politik' },
  { path: 'guides/sight-seeing', id: 'sight-seeing', text: 'Sehenswertes' },
];

export type Guide = {
  id: string;
  title: string;
  description: string;
  walkTime?: string;
  places: Place[];
};

const ARCHITECTURE_GUIDE: Guide = {
  id: 'architecture',
  title: 'Architektur',
  description: `
    Die Tour startet bei den zwei ältesten Kathedralen der Stadt und führt dann zum berühmten Dublin Castle, einer ehemaligen Burg. 
    Weiter geht es zu einem Einkaufszentrum, das sich in einer eindrucksvollen Metall-Glaskonstruktion befindet. 
    Danach spazierst du zur Irischen Nationalbibliothek von 1890 und weiter zur noch bekannteren Bibliothek im Trinity College, 
    wo das weltberühmte Buch "Book of Kells" aufbewahrt wird. 
    Es folgt die Ha'penny Bridge, an der einst Zoll verlangt wurde. 
    Dann spazierst du dem Liffey entlang und erreichst das monumentale Custom House, das heutige Umweltministerium. 
    Nach zwei modernen Brücken bist du im lebendigen Quartier Docklands angekommen und kannst dir das Bord Gais Energy Theater und den umgenutzten ehemaligen Gasometer ansehen.
  `,
  walkTime: '1h 45min ',
  places: [
    ST_PATRICKS_CATHEDRAL,
    CHRIST_CHURCH_CATHEDRAL,
    DUBLIN_CASTLE,
    {
      id: 'st-stephens-green-shopping-center',
      name: 'St. Stephens Green Shopping Center',
      address: 'Stephens Green West, Dublin 2, Irland',
      estimatedTime: '20 min bis zu 1 h',
      url: 'https://www.stephensgreen.com/',
      urlText: 'www.stephensgreen.com',
      openingTimes: [
        {
          content: `Mo-Mi 9:00-19:00
            Do 9:00-21:00
            Fr-Sa 9:00-19:00
            So 11:00-18:00
          `,
        },
      ],
      buildStyle: 'Viktorianischer Baustil',
      description: `
        Das Gebäude fällt durch seine imposante Metall-Glaskonstruktion auf. 
        Es befindet sich direkt neben dem St. Stephens Green Park, auf der Westseite. 
        Das 1988 erbaute Einkaufszentrum war damals das grösste Einkaufszentrum Irlands.
      `,
      imagesPath: '/img/architecture',
      images: ['IMG_7401.JPG', 'IMG_7408.JPG'],
    },
    {
      id: 'national-library-of-ireland',
      name: 'National Library of Ireland',
      address: 'National Library of Ireland, 2/3 Kildare Street, Irland',
      url: 'http://www.nli.ie/',
      urlText: 'www.nli.ie',
      openingTimes: [
        {
          content: ` verschieden je nach Abteilung, Hauptgebäude
            Mo 17:00-19:45
            Di-Fr 10:30-12:30 und 14:00-16:00
            Sa 9:30-12:45
          `,
        },
      ],
      description: `
        Die irische Nationalbibliothek, die 1890 eröffnet wurde, ist eine Präsenzbibliothek. 
        Das heisst, die Bücher können nur vor Ort angesehen und nicht ausgeliehen werden. 
        Die Sammlung der Nationalbibliothek umfasst mehr als 8 Millionen Einzelstücke. 
        Es hat eine permanente Ausstellung, die das Leben und die Werke von William Butler Yeats, dem Dichter und Nobelpreisträger, zeigen.
      `,
      imagesPath: '/img/architecture',
      images: ['National Library of Ireland.png'],
    },
    TRINITY_COLLEGE,
    {
      id: 'ha-penny-bridge',
      name: "Ha'penny Bridge",
      address: 'Bachelors Walk, North City, Dublin, Irland',
      estimatedTime: '5 min',
      description: `
        Diese Brücke hat eine lange Tradition in Dublin. 
        Sie verbindet den Stadtteil Temple Bar und die Einkaufsstrasse rund um die Henry Street über den Fluss Liffey. 
        Es ist eine reine Fussgängerbrücke, die 1816 gebaut wurde. 
        Ihren Namen bekam sie, weil man früher einen halben bzw. einen Penny als Zoll für die Überquerung zahlen musste. 
        Heute befinden sich an den weiss gestrichenen, gusseisernen Brüstungen viele love locks (Liebesschlösser).
      `,
      imagesPath: '/img/architecture',
      images: ['IMG_7382.JPG'],
    },
    CUSTOM_HOUES,
    {
      id: 'sean-o-casey-bridge',
      name: "Sean O'Casey Bridge",
      address: "Sean O'Casey Bridge, South-East Inner City, Irland",
      estimatedTime: '10 min',
      description: `
        Die Schrägseilbrücke Sean O'Casey Bridge, die 2005 vom Architekten Cyril O'Neil erbaut wurde, 
        überquert den Fluss Liffey und verbindet das südliche und das nördliche Hafenviertel. 
        Die Brücke ist knapp 100 Meter lang und kann um 90 Grad geschwenkt werden, 
        um grossen Schiffen die Durchfahrt zu ermöglichen. 
        2006 erhielt der Entwurf der Brücke die Auszeichnung "beste Fussgängerbrücke".
      `,
      imagesPath: '/img/architecture',
      images: ['IMG_7457.JPG', 'IMG_7466.JPG'],
    },
    {
      id: 'samuel-beckett-bridge',
      name: 'Samuel Beckett Bridge',
      address: 'Samuel Beckett Bridge, Dublin 2, Irland',
      buildYear: '2007-2009',
      estimatedTime: '10 min',
      description: `
        Die Brücke des spanischen Architekten und Bauingenieurs Santiago Calatrava ist einer Harfe nachempfunden, die das Wahrzeichen Irlands darstellt. 
        Die Brücke wurde nach dem irischen Literaten Samuel Beckett benannt. 
        Sie ist 120 Meter lang und an der höchsten Spitze 48 Meter hoch. 
        Die Brücke verbindet die Macken Street auf der Südseite mit der Guild Street auf der Nordseite. 
        Sie liegt im modernen Stadtteil Docklands. 
        Die Brücke kann um 90 Grad gedreht werden, damit grosse Schiffe passieren können.
      `,
      imagesPath: '/img/architecture',
      images: ['IMG_7472.JPG', 'IMG_7483.JPG'],
    },
    {
      id: 'bord-gais-energy-theater',
      name: 'Bord Gais Energy Theater',
      address: 'Grand Canal Square, Docklands, Dublin 2, Irland',
      url: 'http://www.bordgaisenergytheatre.ie/',
      urlText: 'www.bordgaisenergytheatre.ie',
      openingTimes: [{ content: 'Je nach Vorstellung.' }],
      description: `
        Das Gebiet der Docklands ist geprägt von neuer und imposanter Architektur. 
        Eines der besten Beispiele hierfür ist das Bord Gais Energy Theater. 
        Das Theater wurde von Daniel Libeskind entworfen und wurde 2010 gebaut.
      `,
      imagesPath: '/img/architecture',
      images: ['IMG_7496.JPG', 'IMG_7507.JPG'],
    },
    {
      id: 'alliance-building',
      name: 'Alliance Building',
      address: 'South Lotts Road, Irland',
      type: 'Wohnhaus',
      additionalInfo: 'Besichtigung nur von aussen möglich.',
      description: `
        Der ehemalige Gasometer wurde in seinem bestehenden Stahlgerüst erhalten, aber neu ausgebaut. 
        Heute bestehen die Fassaden hauptsächlich aus Glas und dem Stahlgerüst. 
        Zurzeit wird das Gebäude als Wohnhaus bewohnt.
      `,
      imagesPath: '/img/architecture',
      images: ['IMG_7534.JPG', 'IMG_7529.JPG', 'IMG_7531.JPG'],
    },
  ],
};

const HISTORY_GUIDE: Guide = {
  id: 'history',
  title: 'Geschichte',
  description: `
    Die Tour startet beim Dublin Castle, einer Burg aus dem Mittelalter. 
    Von da aus geht es weiter zu den Georgianischen Gebäuden, die an den Baustil der Griechen und Römer erinnern. 
    Das Custom House ist das Umweltministerium von Dublin, von dort geht es zur O'Connel Bridge, einer der bedeutendsten Brücken, die den Fluss Liffey überqueren. 
    Im Wikingermueseum Dublinia lernt man viel über das Mittelalter, gleich daneben steht die Christ Church Cathedral, eine der ältesten Kathedralen der Stadt. 
    Die Grafton Street ist die Haupteinkaufsstrasse. 
    Sie endet bei einer der besten Universitäten der Welt, beim Trinity College.
  `,
  places: [
    DUBLIN_CASTLE,
    {
      id: 'georgianische-gebaeude',
      name: 'Georgianische Gebäude',
      address: 'Merion Square, Irland',
      description: `
        Der Georgianische Baustil wurde in Dublin um 1714 vom englischen König Georg eingeführt. 
        Er wollte, dass neue öffentliche und private Gebäude in Dublin im gleichen Stil erbaut wurden. 
        Seine drei Nachfolger hiessen alle ebenfalls Georg und waren der gleichen Meinung. 
        Der Baustil, der seinen Namen erhielt, orientierte sich stark an der Bauweise der alten Griechen und Römer. 
        Er endete mit dem Tod von König Georg IV. 1830. 
        Viele georgianische Häuser sind unterdessen zwar abgerissen, einige aber haben sich erhalten.
      `,
      imagesPath: '/img/history',
      images: ['570858_15a00b7a.jpg'],
    },
    CUSTOM_HOUES,
    O_CONNELL_BRIDGE,
    {
      id: 'dublinia',
      name: 'Dublinia',
      address:
        'Christchurch, St Michaels Hill, Merchants Quay, Dublin 8, Irland',
      url: 'http://www.dublinia.ie/german',
      urlText: 'www.dublinia.ie',
      type: 'Wikinger- und Mittelalter-Museum',
      price: `Eintrittskarte online oder vor Ort, sowie ermässigte Kombikarte für Dublinia und die benachbarte Christ Church Cathedral erhältlich.\n
        Studierende: 8.50 \u20AC
        Erwachsene: 9.50 \u20AC
      `,
      openingTimes: [
        { timeline: 'Täglich geöffnet', content: '' },
        {
          timeline: 'März-September',
          content: `10:00-18:30 Uhr
            (letzter Einlass: 17:30 Uhr)
          `,
        },
        {
          timeline: 'Oktober-Februar',
          content: `10:00-17:30 Uhr
            (letzter Einlass: 16:30 Uhr)
          `,
        },
      ],
      description: `
        Möchtest du die Geschichte der Wikinger in Dublin kennen lernen? Interessiert Dich das Mittelalter? 
        Dann ist die Dublinia genau das Richtige für dich. 
        Die Ausstellung befindet sich in einem Nebengebäude der Christ Church Kathedrale. 
        Am Ende des Besuchs lohnt es sich, knapp hundert Stufen auf den St. Michael's Tower hinaufzusteigen und die Aussicht auf Dublin zu geniessen. 
        Es gibt ein kleines Café und einen Souvenirshop.
      `,
      imagesPath: '/img/history',
      images: ['IMG_5088.JPG'],
    },
    CHRIST_CHURCH_CATHEDRAL,
    {
      id: 'grafton-street',
      name: 'Grafton Street',
      address: 'Grafton Street, Irland',
      type: 'Einkaufsstrasse',
      description: `
        Die Grafton Street ist die Haupteinkaufsstrasse Dublins. 
        Sie führt vom Trinity College zum St. Stephen's Green. 
        Die Strasse ist nach dem Duke of Grafton benannt und wurde von der Dawson-Familie ausgebaut. 
        Du findest in den Seitenstrassen auch das Haus des Dekans des Trinity Colleges aus dem 18. Jahrhundert und die berühmte Statue Molly Malone. 
        Der Sage nach war die junge Schönheit die Tochter eines Fischhändlers aus Temple Bar. 
        Sie soll tagsüber Meeresfrüchte verkauft und nachts den Männern den Kopf verdreht haben. 
        Heute ist diese Strasse einer der teuersten Einkaufsstrassen der Welt.
      `,
      imagesPath: '/img/history',
      images: ['4793933_a221c14f.jpg', '9199565442_1628636181_o.jpg'],
    },
    TRINITY_COLLEGE,
  ],
};

const FOOD_GUIDE: Guide = {
  id: 'food',
  title: 'Kulinarik',
  description: `
    Die Tour startet beim unscheinbaren Vice Coffee und führt dann an den Rand von Dublin zum Café Love Supreme. 
    Im Restaurant Wuff kann man ein leckeres Frühstück geniessen und im Nando's ein herzhaftes Mittagessen. 
    Im Restaurant Farm sind alle Produkte frisch und selbst angebaut. 
    Die Tour endet in einer ehemaligen reformierten Kirche, die heute ein Pub und Restaurant ist und sich the Church nennt.
  `,
  places: [
    {
      id: 'vice-coffee',
      name: 'Vice Coffee',
      address: '54 Abbey Street Middle, North City, Dublin, Irland',
      url: 'http://www.vicecoffeeinc.com/',
      urlText: 'www.vicecoffeeinc.com',
      openingTimes: [{ content: 'Mo-So 11:00-18:00 Uhr' }],
      type: 'Specialty Coffee Shop',
      description: `
        Das unscheinbare Café befindet sich inmitten der Shopping-Meile in Dublin. 
        Man übersieht dieses kleine Lokal sehr leicht, da es zwischen ganz viel Shops versteckt liegt. 
        Der Kaffee ist herrvoragend und die Bedienung sehr zuvorkommend. 
        Wenn man etwas über den Kaffee wissen will, wendet man sich am besten gleich an den Barista, der freut sich über jede Frage bezüglich Kaffee. 
        Die angebotene Kaffeesorte ändert häufig, da das Lokal immer wieder eine neue ausprobieren und den Kunden die grosse Sortenvielfalt zeigen möchte.
      `,
      imagesPath: '/img/kulinarik',
      images: ['IMG_5119.JPG', 'IMG_5121.JPG', 'IMG_5122.JPG', 'IMG_5124.JPG'],
    },
    {
      id: 'love-supreme',
      name: 'Love Supreme',
      address: '57 Manor Street, Stoneybatter, Irland',
      url: 'http://www.lovesupreme.ie/',
      urlText: 'www.lovesupreme.ie',
      type: 'Café',
      openingTimes: [
        {
          content: `Mo und Mi-Fr 08:00-18:00 Uhr
            Di geschlossen
            Sa und So 10:00-17:00 Uhr
          `,
        },
      ],
      description: `
        Ein kleiner Abstecher an den Rand von Dublin lohnt sich. 
        Du kannst wunderschöne Architektur sehen und auf einen Kaffee im Love Supreme vorbei schauen. 
        Du wirst schon von weitem sehen, dass hier jemand viel Arbeit investiert hat. 
        Das Kaffee ist wunderschön eingerichtet und der Barista weiss, wie man guten Kaffee zubereitet.
      `,
      imagesPath: '/img/kulinarik',
      images: ['IMG_5749.jpg', 'IMG_5164.JPG', 'IMG_5752.jpg', 'IMG_5754.jpg'],
    },
    {
      id: 'wuff',
      name: 'Wuff',
      address: '23 Benburb Street, Arran Quay, Dublin 7, Irland',
      url: 'http://www.wuff.ie/',
      urlText: 'www.wuff.ie',
      openingTimes: [
        {
          content: `Mo-Mi 08:00-16:00 Uhr
            Do-Sa 08:00-16:00 und 17:30-21:30 Uhr
            So 10:00-16:00 Uhr
          `,
        },
      ],
      additionalInfo:
        'Für ein einfaches Frühstück passt dieses Restaurant perfekt.',
      description: `
        Wenn du einmal nicht im Hotel frühstücken möchtest, ist das Wuff sehr empfehlenswert, da es sehr gemütlich und leger ist. 
        Hier kommen hauptsächlich Dubliner her.
      `,
      imagesPath: '/img/kulinarik',
      images: ['IMG_5756.jpg', 'IMG_5757.jpg', 'IMG_5948.jpg', 'IMG_5947.jpg'],
    },
    {
      id: 'nando-s',
      name: "Nando's",
      address: "12 St Andrew's Street, Dublin 2, Irland",
      url: 'http://www.nandos.ie/',
      urlText: 'www.nandos.ie',
      openingTimes: [
        {
          content: `Mo-Do 11:30-22:00 Uhr
            Fr und Sa 11:30-23:00 Uhr
            So 12:00-22:00 Uhr
          `,
        },
      ],
      type: 'Fast-Food-Konzept mit sehr gutem Essen.',
      description: `
        Dies ist ein perfektes Restaurant für das Mittagessen. 
        Es ist auch gut für Allergiker geeignet. 
        Hier wird nur Poulet angeboten, dies aber in vielen verschiedenen Varianten. 
        Das Restaurant kocht koscher.
      `,
      imagesPath: '/img/kulinarik',
      images: ['26283507712_849659e369_o.jpg'],
    },
    {
      id: 'farm',
      name: 'The Farm',
      address: '3 Dawson Street, Dublin 2, Irland',
      url: 'http://www.thefarmfood.ie/',
      urlText: 'www.thefarmfood.ie',
      openingTimes: [{ content: 'Mo-So 12:00-22:00 Uhr' }],
      description: `
        Wer Lust auf ein gesundes Mittag- oder Abendessen hat, ist hier richtig. 
        Die Preise sind höher als in andern Restaurants, da nur mit saisonalen Produkten aus eigenem Anbau gekocht wird.
      `,
      imagesPath: '/img/kulinarik',
      images: ['The_Fram_Restaurant.jpg'],
    },
    {
      id: 'beanhive-coffee',
      name: 'Beanhive Coffee',
      address: 'Dawson Street, Dublin 2, D02 FY28, Irland',
      url: 'http://www.beanhive.ie/',
      urlText: 'www.beanhive.ie',
      openingTimes: [
        {
          content: `Mo-Fr 7:15-18:00 Uhr
            Sa und So 9:00-18:00 Uhr
          `,
        },
      ],
      description: `
        Dieses Café/Restaurant ist perfekt gelegen, um es mit einem Shopping Trip oder einem anderen Spaziergang wie zum Beispiel jenem zu Street-Art/Kunst zu kombinieren. 
        Es ist ein hübsches Café mit verschiedenen Menüs, die auch ein sehr gutes Preis-Leistungs-Verhältnis haben.
      `,
      imagesPath: '/img/kulinarik',
      images: ['IMG_5770.jpg', 'IMG_5772.jpg'],
    },
    THE_CHURCH,
  ],
};

const ART_GUIDE: Guide = {
  id: 'art',
  title: 'Kunst',
  walkTime: '1 h',
  description: `
    Wer Street-Art mag, ist hier richtig. 
    Der Spaziergang beginnt in Temple Bar, wo es an einer Hauswand ein grosses Portrait des Künstlers BP Fallon zu sehen gibt. 
    Weiter geht es zu einem Street-Art- Kunstwerk mit dem Namen the City is my garden und einer kleinen Freiluftausstellung aus drei Wandbildern. 
    Auf dem weiteren Weg gibt es ein Trash Animal zu entdecken, ein Werk namens Dead Meat und bunte Türen. 
    Weiter geht es zum Bild Subset Football und schliesslich zu einem abstrakten Kunstwerk.
  `,
  places: [
    {
      id: 'bp-fallon',
      name: 'BP Fallon',
      address: 'Tempel Lane S, Irland',
      description: `
        An Anfang einer der berühmtesten Strassen Dublins gibt es ein Street-Art-Kunstwerk, das mit zwei berühmten Namen verbunden ist. 
        Hier hat der bekannte Künstler Maser seinen ebenfalls bekannten Kumpel BP Fallon gemalt. 
        Dieser ist ein beliebter irischer Fotograf und DJ. Darum passt sein Bild bestens an den gewählten Standort. 
        Es befindet sich im Hinterhof der Button Factory Bar. 
        Die einstige Knopffabrik ist ein Veranstaltungsort für Grossevents, wo täglich Bands und Djs aufteten. 
        In Irland ist Maser einer der berühmtesten Street-Art Künstler. 
        Er lebt zwar heute in den USA, kehrt aber ab und zu nach Dublin zurück, um weitere Kunstwerke zu hinterlassen. 
        In der Street-Art Community ist Maser sogar weltweit bekannt.
      `,
      imagesPath: '/img/art',
      images: ['IMG_5101.JPG'],
    },
    {
      id: 'the-city-is-my-garden',
      name: 'The city is my garden',
      address: 'Nr. 1 Liffey Street Upper, Irland',
      additionalInfo: `
        Wenn du dieses Street-Art-Kunstwerk sehen willst, kombinierst du den Besuch am besten mit einem Shopping-Trip. 
        Es befindet sich nämlich an der berühmtesten Einkaufsstrasse von Dublin.
      `,
      description: `
        Wie das Bild von BP Fallon ist auch dieser Schriftzug mit geometrischen Figuren von Maser. 
        Dieses Kunstwerk wurde für den Laden Arnotts geschaffen, um den Menschen in Dublin das Zusammenspiel von Natur und Stadt näher zu bringen.
      `,
      imagesPath: '/img/art',
      images: ['IMG_5115.JPG'],
    },
    {
      id: 'drei-verschiedene-streetarts',
      name: 'Drei verschiedene Street-Arts',
      address: 'Temple Lane, Irland',
      type: 'In der Nähe vom berühmten BP Fallon Bild findet man drei wunderschöne Kunstwerke.',
      description: `
        Die drei Bilder sind von verschiedenen Künstlern und bilden eine Open-Air-Ausstellung an der Temple Lane. 
        Das erste Bild von links ist vom englischen Künstler Dan Leo, der in Irland wohnhaft ist. 
        Er verwendet verschiedene Farben, durch dieses Stilmittel erkennt man seine in ganz Irland verstreuten Werke sofort. 
        Das mittlere Bild ist vom Künstler Decoy. 
        Er hat schon auf der ganzen Welt Bilder gemalt und auch mit anderen grossen Künstlern wie Maser und Solus zusammen gearbeitet. 
        Sein erstes Werk befindet sich am Tara Building in Dublin. 
        Das letzte Bild ist von der Künstlerin Lora Zombie, die durch Social Media weltweit bekannt wurde.
      `,
      imagesPath: '/img/art',
      images: ['IMG_5109.JPG', 'IMG_5105.JPG', 'IMG_5106.JPG', 'IMG_5107.JPG'],
    },
    {
      id: 'trash-animals',
      name: 'Trash Animals',
      address: 'Tara Street, Irland',
      description: `
        Dieses Bild ist vom portugiesischen Künstler Artur Bordalo aka Boralo II. 
        Er ist bekannt für seine kreativen Street-Art-Kunstwerke. 
        Aus Abfall aller Art schafft er fantastische Tiere und macht so darauf aufmerksam, dass es ein Problem gibt mit unserem Abfall.
      `,
      imagesPath: '/img/art',
      images: ['IMG_6105.JPG'],
    },
    {
      id: 'dead-meat',
      name: 'Dead Meat',
      address: 'Merrion Row, Irland',
      description: `
        Conor Harringthon, der Künstler aus London, hat eine leere Wand in der Merrion Row verschönert. 
        Dort zeigt sich Dublin von seiner künstlerischen und hippen Seite.
      `,
      imagesPath: '/img/art',
      images: ['IMG_5184.JPG'],
    },
    {
      id: 'gregorianische-tueren',
      name: 'Georgianische Türen',
      address: 'Merrion Square, Irland',
      description: `
        Im Bauboom des 18. Jahrhunderts bauten die Engländer ein neues Quartier ausserhalb des Stadtkerns. 
        Der englische König verlangte einen einheitlichen Baustil, deshalb waren die Bauvorschriften sehr streng. 
        Für individuelle Freiheiten gab es wenig Raum. 
        Doch die Iren fanden einen Weg, ihren Häusern eine persönliche Note zu geben. 
        Weil keine Vorschriften für die Tür-Farben existierten, färbten sie jede Tür anders, Hauptsache sie war bunt.
      `,
      imagesPath: '/img/art',
      images: ['doors.png'],
    },
    {
      id: 'subset-football',
      name: 'Subset Football',
      address: 'Haymarket, Irland',
      url: 'http://www.subset.ie/',
      urlText: 'www.subset.ie',
      description: `
        Subset ist das bekannteste Künstler-Kollektiv. 
        Die Gruppe verschönert rund um Dublin die Fassaden und gestaltet auch Werke für Marketing-Zwecke. 
        Ein Blick auf ihre Webseite lohnt sich auf jeden Fall.
      `,
      imagesPath: '/img/art',
      images: ['IMG_5945.JPG'],
    },
    {
      id: 'vadis-und-tilf',
      name: 'Vadis und Tilf',
      address: 'Smithfield, Irland',
      description: `
        Für den Event "MURO Street-Art 2014" malten Vadis und Tilf dieses abstrakte Kunstwerk. 
        Weitere Werke waren über die ganze Stadt verteilt. 
        Ganz Dublin war sozusagen eine Freiluft-Ausstellung.
      `,
      imagesPath: '/img/art',
      images: ['IMG_5134.JPG'],
    },
  ],
};

const MUSIK_GUIDE: Guide = {
  id: 'music',
  title: 'Musik',
  description: `
    Die Tour startet bei der Schleuse am Grand Canal. 
    Dort haben U2 das Cover des Albums "October" fotografiert. 
    Ein Weg führt über die Schleuse auf die andere Seite des Kanals. 
    Weiter geht es zum irischen Rock'n Roll Museum, zu einem Pub in einer ehemaligen Kirche samt Orgel; es wird The Church genannt. 
    Zum Schluss gelangen wir zu zwei Pubs mit täglicher irischer Livemusik, sie heissen The Brazen Head und O'Neill's Pub and Kitchen.
  `,
  walkTime: '1 h',
  places: [
    {
      id: 'grand-canal-doc',
      name: 'Grand Canal Doc',
      address: 'Hanover Quay 84 Hanover Dock, Dublin 2, Irland',
      estimatedTime: '10 min',
      type: 'Schleuse im Hafenviertel',
      price: 'Eintritt frei',
      additionalInfo: `
        Heute ist das Hafenviertel neu überbaut. 
        Um aus der gleichen Perspektive ein Foto zu machen wie U2, muss man die Schleuse überqueren.
      `,
      imagesPath: '/img/music',
      images: ['IMG_6991.jpg', 'IMG_6993.jpg', 'IMG_6996.jpg'],
      // TODO: link at the end should not be plain text
      description: `
        Der Grand Canal war früher eine wichtige Verkehrsader. 
        Er wurde Ende des 18. Jahrhunderts für Frachtschiffe gebaut und führte von Dublin bis nach Mittelirland. 
        Als Eisenbahn, Strassen und Lastwagen aufkamen, wurde er überflüssig. Die Hafenanlagen verfielen langsam. 
        Dass U2 am Grand Canal vor der Schleuse Fotos machten, war naheliegend. 
        Nur ein paar Strassen weiter befand sich nämlich das Tonstudio, in dem sie in den frühen 80-er Jahren ihre ersten Platten aufnahmen. 
        Dort am 18 Hanover Quay, Grand Canal Dock, Dublin 2, produzierten auch Künstler wie Van Morrison, Sinéad O'Connor, the Rolling Stones und Elvis Costello ihre Musik. 
        Das Gebäude, in dem sich die berühmten so genannten Windmill Lane Studios befanden, wurde 2015 abgerissen. 
        Das Tonstudio selbst existiert weiter, es ist auf die andere Kanalseite gezogen. 
        Die Adresse lautet 20 Ringsend Rd, Grand Canal Dock, Dublin 4, Irland www.windmillanerecording.com.
      `,
    },

    {
      id: 'irish-rockand-roll-museum',
      name: 'Irish Rock & Roll Museum',
      address: 'Curved Street, Temple Bar, Dublin 2, Irland',
      estimatedTime: '1 h',
      price: 'Erwachsene: 12.60 \u20AC',
      openingTimes: [
        {
          content: `Täglich (7 Tage die Woche) 11:00-17:30
            Kann nur in einer Führung besichtigt werden! (nicht rollstuhlgängig)
          `,
        },
      ],
      additionalInfo: `
        Das unscheinbare Haus versteckt sich in einer Gasse und wirkt heruntergekommen. 
        Wer online bucht, bekommt Rabatt.
      `,
      imagesPath: '/img/music',
      images: ['IMG_6944.jpg'],
      description: `
        Das Museum ist anders, als man es sich gewohnt ist. 
        Ein freundlicher Guide nimmt die Gäste mit auf eine Tour durch die irische Musikwelt. 
        Bands, Stars, ihre Musik, ihre Erfolge sind ein Thema. 
        Es gibt Instrumente zum Anfassen, einen kurzen Film und einen Einblick in die Musikproduktion vom Proberaum über das Tonstudio bis zur Bühne. 
        An einer roten, so genannten Wall of Fame erinnern Schwarz-Weiss-Fotos an irische Rockstars wie Van Morrison, Rory Gallagher, Sinnéad O'Connor, Bob Geldof und natürlich U2.
      `,
    },
    THE_CHURCH,
    {
      id: 'the-brazen-head',
      name: 'The Brazen Head',
      address: '20 Lower Bridge Street, Merchants Quay, Dublin 8, Irland',
      url: 'http://www.brazenhead.com/',
      urlText: 'www.brazenhead.com',
      openingTimes: [
        {
          content: `Di-Do 10:30-23:30
            Fr, Sa und Mo 10:30-0:30
            So 12:30-23:30
          `,
        },
      ],
      type: 'Pub mit Livemusik und Gastrobetrieb',
      additionalInfo: `
        Das kleine Pub ist immer sehr voll, wer einen Platz will, braucht Geduld oder muss sich im überdachten Hof mit einem Stehtisch begnügen. 
        Reservieren kann man nicht. Der Besuch lohnt sich aber.
      `,
      imagesPath: '/img/music',
      images: ['The_Brazen_Head_(cropped).jpg'],
      description: `
        Das Pub bezeichnet sich selbst als die älteste Kneipe Irlands. 
        Seine Geschichte soll 800 Jahre zurückreichen. 
        Sicher ist, dass an der heutigen Stelle seit 1600 gewirtet wird und das Haus aus dem Jahr 1700 stammt. 
        Es steht leicht schief, weil es bei einer Explosion am andern Ufer des Liffey stark erschüttert wurde. 
        Der Pubname Breazen Head bedeutet soviel wie unverschämter Kopf. 
        Die Legende besagt, er erinnere an ein rothaariges Mädchen. 
        Dieses habe bei der Belagerung seiner Stadt den Kopf neugierig aus dem Fenster gestreckt und sei daraufhin von Soldaten geköpft worden. 
        Verschiedene berühmte Rebellen waren in dem Pub ebenso zu Gast wie der Henker, der einigen Leben ein Ende setzte. 
        Von 12:00-21:30 Uhr gibt es hier traditionell irisches Essen und jeden Abend irische Livemusik. 
        Im Lauf der Zeit sind hier schon verschiedene Stars aufgetreten, z.B. Tom Jones oder Van Morrison.
      `,
    },
    O_NEILS_PUB_AND_KITCHEN,
  ],
};

const NIGHT_GUIDE: Guide = {
  id: 'night-life',
  title: 'By Night',
  walkTime: '20 min',
  description: `
    Der Spaziergang startet beim Pub The Duke, das jeden Abend einen sogenannten Literary Pub Crawl, also eine Kneipentour anbietet. 
    Weiter geht es zum aussergewöhnlichen Lokal O'Neill's Pub and Kitchen und von dort ins beliebte Viertel Temple Bar. 
    Zum Abschluss spaziert man über die O'Connel Bridge und besucht noch the Spire, ein Wahrzeichen von Dublin, das nachts beleuchtet ist.
  `,
  places: [
    {
      id: 'the-duke',
      name: 'The Duke',
      address: '9 Duke Street, Dublin 2, Irland',
      url: 'http://www.thedukedublin.com/491-2/',
      urlText: 'www.thedukedublin.com',
      estimatedTime: '2 h', // TODO: estimated time title
      type: 'Pub Crawl mit Start im Pub The Duke',
      openingTimes: [{ content: 'Mo-Fr 09:00-18:00' }],
      price: `Studierende: 11 \u20AC
        Erwachsene: 13 \u20AC
      `,
      additionalInfo: `
        Der Pub Crawl findet jeden Abend um 17:30 statt. 
        Die Kneipentour lohnt sich vor allem dann, wenn man gut Englisch versteht und ein bisschen über die Geschichte von Dublin Bescheid weiss.
      `,
      imagesPath: '/img/night',
      images: ['IMG_7050.jpg'],
      description: `
        Das The Duke ist ein Pub, das eigentlich jeder in Dublin kennt. 
        Es wurde 1822 gegründet und steht im Vergnügungsviertel Temple Bar, wo es nicht zu übersehen ist. 
        Von aussen wirkt es eher alt, innen ist es aber sehr gemütlich und geräumig. 
        Jeden Abend startet hier ein Pub Crawl. 
        Die Kneipentour wird von zwei Schauspielern geleitet, die auf satirische Art und Weise von der Geschichte Dublins erzählen. 
        Sie führen das Publikum in verschiedene Pubs, aber auch zu Sehenswürdigkeiten wie dem Trinity College oder der Statue Molly Malone.
      `,
    },
    O_NEILS_PUB_AND_KITCHEN,
    {
      id: 'temple-bar',
      name: 'Temple Bar',
      address: '47-48, Temple Bar, Dublin',
      type: 'beliebtes Stadtviertel in Dublin',
      imagesPath: '/img/night',
      images: ['IMG_6943.jpg', 'IMG_6947.jpg'],
      description: `
        Das Stadtviertel besitzt viele Gassen, die zum Teil sehr schmal und verwinkelt sind, und man stösst an jeder zweiten Ecke auf ein Pub oder eine Bar. 
        Ausserdem gibt es viele Boutiquen, Galerien und Cafés. 
        Das Viertel ist ein Magnet für Touristen und nach Sonnenuntergang herrscht hier Partystimmung. 
        In Temple Bar ist immer etwas los. 
        Hier ist der beste Ort, um in einem Café oder Pub zu sitzen und Passanten zu beobachten.
      `,
    },
    O_CONNELL_BRIDGE,
    {
      id: 'the-spire',
      name: 'The Spire',
      address: "O'Connell Street Upper, North City, Dublin, Irland",
      estimatedTime: '10 min',
      type: 'Wahrzeichen',
      imagesPath: '/img/night',
      images: ['IMG_7006.jpg', 'IMG_7048.jpg'],
      description: `
        The Spire ist ein Wahrzeichen von Dublin. 
        Die Edelstahlnadel ist 123 Meter hoch und steht seit 2003 in der O'Connel Street. 
        Sie wurde gebaut, um eine Lücke zu füllen. 
        Früher stand an diesem Platz nämlich eine Statue des berühmten Admiral Nelson, der England vor über 200 Jahren erfolgreich gegen einen Angriff verteidigt hatte. 
        Diese Statue wurde 1966 bei einem Terror-Anschlag der IRA in die Luft gesprengt. 
        Als Ersatz wurde The Spire, die Spitze, aufgestellt. 
        In der Spitze leuchtet ein Licht, das nachts von weit her zu sehen ist.
      `,
    },
  ],
};

const OASEN_GUIDE: Guide = {
  id: 'oasen',
  title: 'Oasen',
  description: `
    Dieser Stadtrundgang ist kein Rundgang im klassischen Sinn, denn bei Oasen geht es darum, die Zeit zu geniessen oder eine Pause zu machen. 
    Deshalb stellen wir dir hier einige Möglichkeiten vor, dich in einem der vielen Dubliner Pärke zu erholen. 
    Einige sind sehr gross, andere klein und gemütlich.
  `,
  walkTime: '1 h',
  places: [
    {
      id: 'phoenix-park',
      name: 'Phoenix Park',
      address: 'Phoenix Park, Dublin 8, Irland',
      url: 'http://www.phoenixpark.ie/',
      urlText: 'www.phoenixpark.ie',
      estimatedTime: '2 h',
      additionalInfo: 'Geniesse die Erholungsoase inmitten der Stadt.',
      imagesPath: '/img/oasen',
      images: ['Phoenix  Park.png'],
      description: `
        Der Phoenix Park wird von der Dubliner Bevölkerung als Naherholungsgebiet genützt. 
        Mit seiner Grösse von 7.07 km2 ist er der grösste Park Europas. 
        Er ist beinahe doppelt so gross wie der Central Park in New York. 
        Der Park ist nicht nach seinem Namensvetter dem Feuervogel benannt, der Name stammt aus dem irischen "Fionn Uisce", was etwa so viel wie "klares Wasser" bedeutet. 
        Der Park wurde im 17. Jahrhundert für die englischen Gouverneure errichtet und als Jagdgebiet genutzt. 
        Seit 1747 steht der Park der Öffentlichkeit zur Verfügung. 
        Im Park finden das ganze Jahr hindurch verschiedene Veranstaltungen statt, z.B. der 10 km "Phoenix Park Run" oder die Kleingartenausstellung "Bloom". 
        Wenn man sich ein wenig von den Hauptwegen entfernt, kann man den Hirschherden beim Grasen zusehen. 
        Auch der Dubliner Zoo, der sich im Park befindet, bietet die Möglichkeit, Tiere zu beobachten. 
      `,
    },
    ST_STEPHENS_GREEN_PARK,
    {
      id: 'merrion-square-park',
      name: 'Merrion Square Park',
      address: 'Merrion Square, Dublin, Éire, Irland',
      url: 'http://www.merrionsquare.ie/',
      urlText: 'www.merrionsquare.ie',
      closingTimes: [
        { timeline: 'Jan', content: '16:30' },
        { timeline: 'Feb', content: '17:00' },
        { timeline: 'Mär', content: '18:00' },
        { timeline: 'Apr', content: '20:00' },
        { timeline: 'Mai', content: '21:00' },
        { timeline: 'Jun', content: '21:30' },
        { timeline: 'Jul', content: '21:30' },
        { timeline: 'Aug', content: '21:00' },
        { timeline: 'Sep', content: '20:00' },
        { timeline: 'Okt', content: '19:00' },
        { timeline: 'Nov', content: '17:00' },
        { timeline: 'Dez', content: '16:30' },
      ],
      imagesPath: '/img/oasen',
      images: ['IMG_7581.JPG'],
      description: `
        Der im georgianischen Stil erbaute Merrion Square Park heisst offiziell "Archbishop Ryan Park" und ist nach seinem Schenker benannt. 
        Denn dieser Platz wurde 1930 von der Kirche zum Bau einer Kathedrale gepachtet. 
        Jedoch kam es nie zur Verwirklichung dieser Pläne. 
        1974 wurde der rechteckige Platz der Stadt Dublin geschenkt, die ihn als Park eröffnete. 
        Der Park ist bekannt für seine vielen historischen Strassenlampen und Skulpturen. 
        In der südöstlichen Ecke des Parks befindet sich ein Luftschutzbunker aus der Zeit des Zweiten Weltkriegs. 
        In diesem Bunker konnten 1100 Personen Schutz vor Luftangriffen finden. 
        Seit 2010 ist der Park Teil des European Garden Heritage Network.
      `,
    },
    {
      id: 'iveagh-garden',
      name: 'Iveagh Garden',
      address: "Clonmel Street, Saint Kevin's, Dublin 2, Irland",
      url: 'http://www.iveaghgardens.ie/',
      urlText: 'www.iveaghgardens.ie',
      openingTimes: [
        {
          timeline: 'Januar und Dezember',
          content: `Mo-Sa 08:00-15:30
            So 10:00-15:30
          `,
        },
        {
          timeline: 'Februar und November',
          content: `Mo-Sa 08:00-16:00
            So 10:00-16:00
          `,
        },
        {
          timeline: 'März-Oktober',
          content: `Mo-Sa 08:00-18:00
            So 10:00-18:00
          `,
        },
        {
          content:
            'Öffnungszeiten können zwischen März und Oktober verändert sein, da es Events gibt.',
        },
      ],
      imagesPath: '/img/oasen',
      images: ['IMG_7619.JPG'],
      description: `
        Der ehemalige Privatgarten der Guinness-Familie aus dem 19. Jahrhundert ist ein öffentlicher Garten, der ganz versteckt in der Stadt liegt. 
        Speziell an diesem Garten ist die einzige Bogenschiessbahn von Irland, unter der ein Elefant begraben liegt. 
        Das Labyrinth, die Stauten, die Brunnen und der Wasserfall geben dem Garten einen mystisch märchenhaften Touch.
      `,
    },
  ],
};

const POLITIC_GUIDE: Guide = {
  id: 'politic',
  title: 'Politik',
  description: `
    Die Tour startet beim Gerichtsgebäude von Dublin, das die vier wichtigen Gerichte von Irland beherbergt und einst eine wichtige Rolle spielte beim Osteraufstand in Dublin. 
    Die City Hall, das nächste Gebäude, war ursprünglich eine Börse und wurde dann lange Zeit von der Stadt Dublin als Regierungsgebäude genutzt. 
    Weiter geht es zum Irish Parliament, das ein monumentales Gebäude ist. 
    Heute ist die Bank of Ireland in diesem Gebäude ansässig. 
    Unsere nächste Station ist der ehemalige Herzogpalast, wo zwei Kammern des Parlaments beheimatet sind. 
    Als letzte Station folgen die Government Buildings, die heute viele wichtige Sitze wie zum Beispiel das Ministerium des Premierministers (Leo Varadkar) beherbergen.
  `,
  walkTime: '1h',
  places: [
    {
      id: 'four-courts',
      name: 'Four Courts',
      address: 'Inns Quay 25, Dublin 8, Irland',
      type: 'Gerichtsgebäude',
      additionalInfo:
        'Am besten betrachtet man das Gebäude von der anderen Seite des Flusses.',
      openingTimes: [
        {
          content: `Mo-Fr 09:00-18:00
            Sa und So geschlossen
            (Achtung verstärkte Sicherheitskontrollen)
          `,
        },
      ],
      imagesPath: '/img/politics',
      images: ['Four Courts Dublin.png'],
      description: `
        Das Gebäude ist 1802 im neoklassizistischen Stil von James Gandon erbaut worden. 
        Seit dieser Zeit wird es als Gerichtsgebäude benützt. 
        Four Courts heisst es, weil die vier Gerichtshöfe darin untergebracht sind. 
        Es sind dies der Oberste Gerichtshof (Supreme Court), das Oberste Zivilgericht (High Court), das Berufungsgericht der Stadt Dublin (Dublin Circuit) und das bis 2010 dort beheimatete Strafgericht (Central Criminal Court). 
        Im Osteraufstand wurde der Four Courts von der Irish Republican Brotherhood belagert und von den britischen Truppen beschossen. 
        Dabei wurde bei einem Angriff das Nationale Archiv getroffen, weshalb Dokumente aus fast 1000 Jahren verloren gingen. 
        Darunter sind auch die Pläne des Architekten des Four Courts. 
        Nach der Restauration wurde das Gebäude 1932 wieder geöffnet und die Gerichtshöfe zogen erneut ein. 
        Es gibt öffentliche Gerichtsverhandlungen, bei denen der Besuch der Innenräume oder mindestens der beindruckenden Eingangshalle möglich ist.
      `,
    },
    CITY_HALL,
    {
      id: 'irish-parliament-house-bank-of-ireland',
      name: 'Irish Parliament House / Bank of Ireland',
      address: 'College Green, Temple Bar, Dublin, Irland',
      openingTimes: [
        {
          content: `Mo-Fr 10:00-16:00
            Do 10:00-17:00
            (nur Teile, da im Gebrauch der Bank)
          `,
        },
      ],
      imagesPath: '/img/politics',
      images: ['IMG_7391.JPG', 'IMG_7387.JPG'],
      description: `
        Das Gebäude wurde zwischen 1729 und 1739 vom Architekten Sir Edward Lovatt Pearce entworfen und realisiert. 
        Speziell ist, dass dieses Gebäude keine Fenster hat und durch seine Grösse sehr imposant wirkt. 
        Durch den Act of Union (1804) wurde das Gebäude nicht mehr vom Parlament gebraucht und wurde von der Bank of Ireland übernommen.
      `,
    },
    {
      id: 'leinster-house',
      name: 'Leinster House',
      address: 'Kildare Street, Dublin 2, Irland',
      url: 'http://www.oireachtas.ie/parliament/',
      urlText: 'www.oireachtas.ie/parliament',
      openingTimes: [
        {
          content: `Mo-Fr 08:00-21:30
            Sa und So geschlossen
            (Achtung verstärkte Sicherheitskontrollen)
          `,
        },
      ],
      guideDetails: `Mo und Fr 10:30 und 14:30
        kostenlose Führung
      `,
      type: 'Parlamentshaus',
      additionalInfo: 'Ziel von Protestmärschen und Kundgebungen',
      imagesPath: '/img/politics',
      images: ['Leinster House.png'],
      description: `
        Der ehemalige Herzogpalast ist Sitz des irischen Parlaments. 
        Das Gebäude wurde 1745 bis 1747 erbaut als Residenzsitz für den Grafen von Kildare, den späteren Herzog der Provinz Leinster. 
        Richtung Kildare Street präsentiert sich das Gebäude als Stadtpalast mit einem Parkplatz als Vorgarten. 
        1924 erwarb der irische Staat das Leinster House, seitdem beherbergt es die beiden Kammern des irischen Parlaments.
      `,
    },
    {
      id: 'government-buildings',
      name: 'Government Buildings',
      address: 'Upper Merrion Street, Dublin 2, Irland',
      url: 'https://www.taoiseach.gov.ie/eng/splash/',
      urlText: 'www.taoiseach.gov.ie/eng/splash',
      openingTimes: [
        {
          content: 'Nur mit Führung zu besichtigen.',
        },
      ],
      guideDetails: `Sa 10:30, 11:30, 12:30 und 13:30 kostenlos
        (Achtung Änderungen aufgrund aktueller Anlässe möglich)
        (Karten am Sa ab 09:30 in der National Gallery erhältlich)
      `,
      type: 'Ministerium des Premierministers, die Ratskammer, Ort der Regierungssitzungen und Büro des Generalstaatsanwaltes.',
      imagesPath: '/img/politics',
      images: ['IMG_7588.JPG'],
      description: `
        Die Government Buildings (1904-1922) wurden von Sir Aston Webb und Thomas Manley entworfen und enthalten die Regierungsbüros. 
        Heute sind das Ministerium des Premierministers, die Ratskammer, das Finanzministerium und das Büro des Generalstaatsanwalts in den Government Buildings untergebracht.
      `,
    },
  ],
};

const SIGHT_SEEING_GUIDE: Guide = {
  id: 'sight-seeing',
  title: 'Sehenswertes',
  walkTime: '40 min',
  description: `
    Die Tour startet bei der St. Patricks Cathedral, Irlands nationaler Kathedrale. 
    Weiter geht es zum Dublin Castle, einer Burg aus dem Mittelalter. 
    Ein paar Schritte weiter steht die City Hall, das historische Rathaus von Dublin. 
    Von dort führt der Weg durch Temple Bar, das bekannteste Stadtviertel von Dublin auf der südlichen Seite des Flusses Liffey. 
    Danach geht es durch den St. Stephens Greenpark zu etwas Kultur beim Little Museum of Dublin. 
    Die Tour endet beim National Museum an der Kildare Street.
  `,
  places: [
    ST_PATRICKS_CATHEDRAL,
    DUBLIN_CASTLE,
    CITY_HALL,
    ST_STEPHENS_GREEN_PARK,
    {
      id: 'the-little-museum-of-dublin',
      name: 'The Little Museum of Dublin',
      address: "St Stephen's Green, Dublin 15, Irland",
      url: 'https://www.littlemuseum.ie/',
      urlText: 'www.littlemuseum.ie',
      estimatedTime: '1h',
      openingTimes: [
        {
          content: `Täglich 9:30-17:00
            Di 8:00-17:00
          ` 
        }
      ],
      price: `Studierende: 8 \u20AC
        Erwachsene: 10 \u20AC
      `,
      guideDetails: 'Immer zur vollen Stunde, im Eintrittspreis inbegriffen, empfohlen. Vorbestellung sehr empfohlen.',
      additionalInfo: `
        Das von aussen unscheinbare Museum überrascht mit einer interessanten Ausstellung über das 20. Jahrhundert in Dublin. 
        Im Untergeschoss befindet sich ein kleines Café. 
        Die Nachfrage ist sehr gross, es ist empfehlenswert, die Tickets vorab zu kaufen.
      `,
      imagesPath: '/img/worth-seeing',
      images: ['The_Little_Museum_of_Dublin.jpg'],
      description: `
        Das Museum gehört zu den beliebtesten Museen der Stadt. 
        Die Objekte, die ausgestellt sind, wurden ausschliesslich von Dubliner gespendet. 
        Während eines Besuches kannst du viel über die Geschichte Irlands lernen. 
        Vom Besuch der Queen Victoria, über interessante Anekdoten der Guides bis hin zur Erfolgsgeschichte der Band U2.
      `
    },
    {
      id: 'national-museum-an-der-kildare-street',
      name: 'National Museum an der Kildare Street',
      address: '2 Kildare Street, Dublin, Irland',
      url: 'https://www.museum.ie/',
      urlText: 'www.museum.ie',
      estimatedTime: '1h',
      openingTimes: [
        {
          content: `Di-Sa 10:00-17:00
            So 14:00-17:00
          ` 
        }
      ],
      price: 'Eintritt frei',
      type: 'Archäologisches Museum',
      additionalInfo: `
        Tipp: Achtung viel Publikum am Wochenende, während den irischen Schulferien und in der Hochsaison im Sommer. 
        Es gibt ein Museumscafé.
      `,
      imagesPath: '/img/worth-seeing',
      images: ['Dublin_Kildare_Street_National_Museum_of_Ireland.JPG'],
      description: `
        Zum National Museum gehören vier verschiedene Museen an unterschiedlichen Orten. 
        Dasjenige an der Kildare Street ist das berühmteste. 
        Die archäologische Sammlung zeigt die interessantesten Objekte der irischen Kultur. 
        Zum Beispiel die "Schatzkammer" mit kunstgewerblichen Gegenständen aus dem Mittelalter oder Objekte zu den Wikingern in Irland.
      `
    },
  ]
}

export const ALL_GUIDES = [
  ARCHITECTURE_GUIDE,
  HISTORY_GUIDE,
  FOOD_GUIDE,
  ART_GUIDE,
  MUSIK_GUIDE,
  NIGHT_GUIDE,
  OASEN_GUIDE,
  POLITIC_GUIDE,
  SIGHT_SEEING_GUIDE,
];
