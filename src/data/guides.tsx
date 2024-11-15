export const GUIDES = [
  { path: 'guides/architecture', id: 'architecture', text: 'Architektur' },
  { path: 'guides/history', id: 'history', text: 'Geschichte' },
  { path: 'guides/food', id: 'food', text: 'Kulinarik' },
  { path: 'guides/art', id: 'art', text: 'Kunst' },
  { path: 'guides/music', id: 'music', text: 'Musik' },
  { path: 'guides/night-life', id: 'night-life', text: 'By Night' },
  { path: 'guides/oasis', id: 'oasis', text: 'Oasen' },
  { path: 'guides/politic', id: 'politic', text: 'Politik' },
  { path: 'guides/sight-seeing', id: 'sight-seeing', text: 'Sehenswertes' },
];

type OpeningTimes = {
  timeline?: string;
  content: string;
}[];

export type Place = {
  id: string;
  name: string;
  address: string;
  buildYear?: string;
  estimatedTime?: string;
  url?: string;
  urlText?: string;
  type?: string;
  description: string;
  buildStyle?: string;
  price?: string;
  openingTimes?: OpeningTimes;
  guideDetails?: string;
  additionalInfo?: string;
  imagesPath: string;
  images: string[];
};

export type Guide = {
  id: string;
  title: string;
  description: string;
  walkTime?: string;
  places: Place[];
};

const DUBLIN_CASTLE: Place = {
  id: 'dublin-castle',
  name: 'Dublin Castle',
  address: 'Dame Street, Dublin 2, Irland',
  estimatedTime: '1 h 30 min',
  url: 'http://www.dublincastle.ie/',
  urlText: 'www.dublincastle.ie',
  type: 'Burg mit Museen',
  price: 'Studierende: 6 \u20AC\nErwachsene: 7 \u20AC',
  openingTimes: [
    {
      content: 'Mo-Sa 9:45-17:45\nSonn- und Feiertage 12:00-16:45',
    },
  ],
  description:
    'Nach vielen Umbauten aus dem 17.-20. Jahrhundert wurde aus der ehemaligen mittelalterlichen Burg immer mehr ein Schloss. Das Castle hatte viele Nutzungen. So diente es als militärisches Fort zur Verteidigung, als Gefängnis, Schatzkammer, Gericht und als Sitz der englischen Verwaltung von Irland. 1907 wurden die irischen Kronjuwelen aus dem Dublin Castle gestohlen. Im Ballsaal "St. Patrick\'s Hall" feierte Queen Victoria 1897 ihren 60. Geburtstag. Auch für politische Verhandlungen wurde das Gebäude benutzt. So wurde hier ein Teil der Friedensgespräche von Nordirland geführt. Heute wird es nur noch für repräsentative Veranstaltungen wie Staatsempfänge oder die Amtseinführung des Präsidenten gebraucht. Im Dublin Castle gibt es verschiedene Museen.',
  additionalInfo:
    'Auf der Führung sieht man Prunksäle, Reste der Stadtmauer aus der Wikingerzeit und den Mittelalter-Turm. Es hat ein Museumscafé. Achtung: Wird für Staatsempfänge und Konferenzen gebraucht, mit eingeschränkten Öffnungszeiten.',
  imagesPath: '/img/history',
  images: [
    '-Dublin-Castle.jpg',
    '28744593794_dc461db9b6_b.jpg',
    'IMG_7351.JPG',
  ],
};

const CUSTOM_HOUES: Place = {
  id: 'custom-house',
  name: 'Custom House',
  address: 'North Dock, Dublin 1, Irland',
  openingTimes: [{ content: 'Mo-Fr 09:00-17:00' }],
  type: 'ehem. Zollamt / heute Umweltministerium',
  buildStyle: 'Neoklassizismus',
  description:
    'Das Custom House (1781-1791) wurde vom Architekten James Gandos als Gesellenstück erbaut. Danach folgten einige weitere Prestigebauten in Dublin wie zum Beispiel das "Four Courts". Das imposante Gebäude hat eine Länge von 114 Metern und eine markante Kuppel. Die Kuppel von 60 Metern Höhe wird gekrönt von einer überlebensgrossen Statue des Handels. Der Bau kostete damals eine Summe von 200\'000 Pfund und verschaffte vielen Handwerkern in Dublin Arbeit. Ursprünglich wurde das Gebäude als Amt für Zölle von ankommenden Schiffen gebraucht, bis der Hafen weiter flussabwärts verlegt wurde. Im Bürgerkrieg 1921 wurde dieses Gebäude schwer beschädigt, was zu einer umfassenden Renovation führte. Ein Brand zerstörte die ganze Innengestaltung von J. Gandons und führte zum Einsturz der Kuppel führte. Diese wurde wiederaufgebaut, aber in einem anderen Kalksandstein.',
  imagesPath: '/img/history',
  images: ['Custom_House_Dublin_01.JPG'],
};

const ST_STEPHENS_GREEN: Place = {
  id: 'st-stephens-green',
  name: 'St. Stephens Green Shopping Center',
  address: 'Stephens Green West, Dublin 2, Irland',
  estimatedTime: '20 min bis zu 1 h',
  url: 'https://www.stephensgreen.com/',
  urlText: 'www.stephensgreen.com',
  openingTimes: [
    {
      content:
        'Mo-Mi 9:00-19:00\nDo 9:00-21:00\nFr-Sa 9:00-19:00\nSo 11:00-18:00',
    },
  ],
  guideDetails: 'Auf Anfrage, spätestens einen Monat vor Durchführung',
  buildStyle: 'Viktorianischer Baustil',
  description:
    'Das Gebäude fällt durch seine imposante Metall-Glaskonstruktion auf. Es befindet sich direkt neben dem St. Stephens Green Park, auf der Westseite. Das 1988 erbaute Einkaufszentrum war damals das grösste Einkaufszentrum Irlands.',
  imagesPath: '/img/architecture',
  images: ['IMG_7401.JPG', 'IMG_7408.JPG'],
};

const CHRIST_CHURCH_CATHEDRAL: Place = {
  id: 'christ-church-cathedral',
  name: 'Christ Church Cathedral',
  address: 'Christchurch Place, Dublin 8, Irland',
  url: 'http://www.christchurchcathedral.ie/de/besucher/',
  urlText: 'www.christchurchcathedral.ie/',
  buildStyle: 'Frühgotik',
  price: 'Studierende: 3 \u20AC\nErwachsene: 6 \u20AC',
  openingTimes: [
    {
      timeline: 'April, Mai, September und Oktober',
      content: 'Mo-Sa 09:30-18:00 Uhr\n(letzter Einlass 17:15 Uhr)',
    },
    {
      timeline: 'Juni-August',
      content: 'Mo-Sa 09:30-19:00 Uhr\n(letzter Einlass 18:15 Uhr)',
    },
    {
      timeline: 'November-März',
      content: 'Mo-Sa 09:30-17:00 Uhr\n(letzter Einlass 16:15 Uhr)',
    },
  ],
  description:
    'Die Christ Church Cathedral ist die ältere der beiden mittelalterlichen Kathedralen, die in Dublin stehen. Sie befindet sich an der Stelle, an der vorher eine hölzerne Kirche der Wikinger stand. In der Krypta sind eine mumifizierte Katze und eine Ratte zu sehen, die im Roman von James Joyce als Tom und Jerry vorkommen. Bereits 1038 stand hier eine hölzerne Kirche der Wikinger. Im Jahr 1240 errichtete der englische Adelige Richard de Clare die steinerne Kirche im gotischen Stil, die heutige Christ Church Cathedral. Im 15. Jahrhundert ereignete sich hier etwas Interessantes: Betrüger versuchten, aus einem einfachen Jungen einen Herrscher zu machen. Sie krönten den zehnjährigen Lambert Simnel zum König Eduard VI. Er sollte den König Heinrich VII. von England entthronen. Der Versuch scheiterte aber, die Betrüger wurden bestraft und der Junge begnadigt.',
  imagesPath: '/img/history',
  images: ['4095831289_b190f62546_b.jpg'],
};

const TRINITY_COLLEGE: Place = {
  id: 'trinity-college',
  name: 'Trinity College',
  address: 'College Green, Dublin 2, Irland',
  url: 'http://www.tcd.ie/',
  urlText: 'www.tcd.ie',
  openingTimes: [
    {
      timeline: 'Mai-September',
      content: 'Mo-Sa 9:30-17:00\nSo 9:30-16:45',
    },
    {
      timeline: 'Oktober-April',
      content: 'Mo-Sa 9:30-17:00\nSo 12:00-16:30',
    },
  ],
  description:
    'Das Trinity College befand sich zur Gründungszeit noch vor den Toren der Stadt, heute ist es der Mittelpunkt von Dublin. Das College wurde 1592 von Königin Elisabeth I für protestantische Studenten gegründet und hiess damals "College of the Holy and Undivided Trinity of Queen Elisabeth near Dublin". Das Gelände mit 190\'000 m2 umfasst Sportplätze, die Bibliothek, eine Kapelle, den bekannten Glockenturm, Schulgebäude und viele weitere Gebäude. Die Bibliothek des Trinity College umfasst 4,5 Millionen Bücher, unter denen sich alte Drucke, historische Handschriften und Manuskripte befinden. Das bekannteste Buch ist das "Book of Kells", das jeden Tag eine andere geöffnete Seite zeigt. Der schönste Raum in der Bibliothek ist der Long Room mit 64 Metern Länge und 12 Metern Höhe.',
  imagesPath: '/img/architecture',
  images: ['IMG_7555.JPG', 'IMG_5222.JPG', 'IMG_7553.JPG', 'IMG_7561.JPG'],
};

const THE_CHURCH: Place = {
  id: 'the-church',
  name: 'The Church',
  address:
    'Junction of Mary Street & Jervis Street, North City, Dublin 1, Irland',
  url: 'http://www.thechurch.ie/',
  urlText: 'www.thechurch.ie',
  openingTimes: [
    { content: 'Mo-Do 10:30-23:00\nFr und Sa 10:30-02:30\nSo 11:30-23:00' },
  ],
  type: 'Restaurant und Pub',
  description:
    'Das Lokal The Church ist sehr aussergewöhnlich und gehört zu den bekanntesten Pubs in Dublin. Es befindet sich in einer ehemaligen reformierten Kirche. Als diese vor rund 300 Jahren entstand, wurde sie als eine der ersten Kirchen in Irland mit einer Empore ausgestattet und bekam wertvolle Buntglas-Fenster sowie eine schöne Orgel aus der Werkstatt des berühmten Orgelbauers Renatus Harris. Doch 1967 wurde die Kirche geschlossen und verfiel. Nach einer umfassenden Renovation eröffnete darin 2005 das Restaurant/Pub. Weil die Umwandlung sorgfältig erfolgte, kann man die wunderschönen Fenster und die Orgel noch immer bewundern. Wie in vielen Pubs in Dublin darf Live Musik nicht fehlen, diese spielt vorne beim ehemaligen Altar. The Church ist das beste Pub, um ein Guinness zu trinken, weil hier der Gründer von Guinness einst heiratete.',
  imagesPath: '/img/music',
  images: ['IMG_5830.jpg', '9696750448_00d8028896_o.jpg'],
};

const O_CONNELL_BRIDGE: Place = {
  id: 'o-connel-bridge',
  name: "O'Connel Bridge",
  address: "O'Connell Bridge, Dublin, Irland",
  estimatedTime: '10 min',
  description:
    "Die O'Connel Bridge wurde vom Architekten James Gandon erbaut. Sie ist eine der wichtigsten Brücken über den Fluss Liffey und verbindet den Boulevard O'Connell Street und die Gabelung D'Olier Street/Westmoreland Street. Seit diese Brücke im Jahr 1794 eröffnet wurde, ist sie von grosser Bedeutung, da sie eine zentrale Verbindung in Irlands Nord-Süd-Achse darstellt. Sie ist sehr breit und hat Platz für mehrere Fahrspuren. Doch sie ist nicht nur für den Verkehr sehr wichtig, sie hat auch einen bedeutenden architektonischen Wert. Ihr Erbauer war nämlich ein berühmter englischer Architekt, der in Dublin im 18. und frühen 19. Jahrhundert viele grosse, öffentliche Bauten erstellte und so das Aussehen der Stadt prägte. Nachts ist die Brücke beleuchtet, aber auch tagsüber ist sie sehr schön anzusehen.",
  imagesPath: '/img/night',
  images: [
    'IMG_7011.jpg',
    "O'Connell_Street_Dublin2.JPG",
    'O_Connell_Bridge.crop.JPG',
  ],
};

const ST_PATRICKS_CATHEDRAL: Place = {
  id: 'st-patricks-cathedral',
  name: "St. Patrick's Cathedral",
  address: "St Patrick's Close, Wood Quay, Dublin 8, Irland",
  url: 'http://www.stpatrickscathedral.ie/',
  urlText: 'www.stpatrickscathedral.ie',
  type: 'Kirche',
  buildStyle: 'Gotische Architektur',
  price: 'Studierende: 4.50 \u20AC\nErwachsene: 5.50 \u20AC',
  openingTimes: [
    {
      timeline: 'März-Oktober',
      content:
        'Mo-Fr 9:30-17:00\nSa 9:00-18:00\nSo 9:00-10:30, 12:30-14:30 und 16:30-18:00',
    },
    {
      timeline: 'November-Februar',
      content: 'Mo-Fr 9:30-17:00\nSa 9:30-17:00\nSo 9:00-10:30 und 12:30-14:30',
    },
  ],
  guideDetails:
    'Täglich 10:30, 11:30, 15:00 und 15:30\n(im Eintrittspreis enthalten)',
  description:
    "Die St. Patrick's Cathedral heisst vollständig Ard-Eaglais Naomh Pádraig. Sie ist nicht nur die grösste Kathedrale Dublins, sondern auch die grösste von ganz Irland. Dieser Ort ist für die Iren sehr wichtig, weil man annimmt, dass hier die Quelle lag, an der St. Patrick bekehrte Christen getauft hatte. Ursprünglich gab es nur eine Holzkappelle. Das Gebäude wurde dann stetig vergrössert, bis 1270 das mittlerweile 91 Meter lange Schiff mit Chor entstand. Die Kathedrale wurde mit Hilfe der Guinness-Familie umfassend renoviert, weshalb eine Büste von Mr. Benjamin Guinness vor dem Gebäude steht. 1742 wurde hier der Messias von G.F. Händel uraufgeführt. In der Kathedrale ist eine Ausstellung zu besichtigen, die das Wirken von St. Patrick zeigt.",
  additionalInfo: 'Kein Besuch während den Gottesdiensten möglich.',
  imagesPath: '/img/architecture',
  images: ['IMG_5172.JPG'],
};

const ARCHITECTURE_GUIDE: Guide = {
  id: 'architecture',
  title: 'Architektur',
  description:
    'Die Tour startet bei den zwei ältesten Kathedralen der Stadt und führt dann zum berühmten Dublin Castle, einer ehemaligen Burg. Weiter geht es zu einem Einkaufszentrum, das sich in einer eindrucksvollen Metall-Glaskonstruktion befindet. Danach spazierst du zur Irischen Nationalbibliothek von 1890 und weiter zur noch bekannteren Bibliothek im Trinity College, wo das weltberühmte Buch "Book of Kells" aufbewahrt wird. Es folgt die Ha\'penny Bridge, an der einst Zoll verlangt wurde. Dann spazierst du dem Liffey entlang und erreichst das monumentale Custom House, das heutige Umweltministerium. Nach zwei modernen Brücken bist du im lebendigen Quartier Docklands angekommen und und kannst dir das Bord Gais Energy Theater und den umgenutzten ehemaligen Gasometer ansehen.',
  walkTime: '1h 45min ',
  places: [
    ST_PATRICKS_CATHEDRAL,
    CHRIST_CHURCH_CATHEDRAL,
    DUBLIN_CASTLE,
    ST_STEPHENS_GREEN,
    {
      id: 'national-library-of-ireland',
      name: 'National Library of Ireland',
      address: 'National Library of Ireland, 2/3 Kildare Street, Irland',
      url: 'http://www.nli.ie/',
      urlText: 'www.nli.ie',
      openingTimes: [
        {
          content:
            'verschieden je nach Abteilung, Hauptgebäude\nMo 17:00-19:45\nDi-Fr 10:30-12:30 und 14:00-16:00\nSa 9:30-12:45',
        },
      ],
      description:
        'Die irische Nationalbibliothek, die 1890 eröffnet wurde, ist eine Präsenzbibliothek. Das heisst, die Bücher können nur vor Ort angesehen und nicht ausgeliehen werden. Die Sammlung der Nationalbibliothek umfasst mehr als 8 Millionen Einzelstücke. Es hat eine permanente Ausstellung, die das Leben und die Werke von William Butler Yeats, dem Dichter und Nobelpreisträger, zeigen.',
      imagesPath: '/img/architecture',
      images: ['National Library of Ireland.png'],
    },
    TRINITY_COLLEGE,
    {
      id: 'ha-penny-bridge',
      name: "Ha'penny Bridge",
      address: 'Bachelors Walk, North City, Dublin, Irland',
      estimatedTime: '5 min',
      description:
        'Diese Brücke hat eine lange Tradition in Dublin. Sie verbindet den Stadtteil Temple Bar und die Einkaufsstrasse rund um die Henry Street über den Fluss Liffey. Es ist eine reine Fussgängerbrücke, die 1816 gebaut wurde. Ihren Namen bekam sie, weil man früher einen halben bzw. einen Penny als Zoll für die Überquerung zahlen musste. Heute befinden sich an den weiss gestrichenen, gusseisernen Brüstungen viele love locks (Liebesschlösser).',
      imagesPath: '/img/architecture',
      images: ['IMG_7382.JPG'],
    },
    CUSTOM_HOUES,
    {
      id: 'sean-o-casey-bridge',
      name: "Sean O'Casey Bridge",
      address: "Sean O'Casey Bridge, South-East Inner City, Irland",
      estimatedTime: '10 min',
      description:
        'Die Schrägseilbrücke Sean O\'Casey Bridge, die 2005 vom Architekten Cyril O\'Neil erbaut wurde, überquert den Fluss Liffey und verbindet das südliche und das nördliche Hafenviertel. Die Brücke ist knapp 100 Meter lang und kann um 90 Grad geschwenkt werden, um grossen Schiffen die Durchfahrt zu ermöglichen. 2006 erhielt der Entwurf der Brücke die Auszeichnung "beste Fussgängerbrücke".',
      imagesPath: '/img/architecture',
      images: ['IMG_7457.JPG', 'IMG_7466.JPG'],
    },
    {
      id: 'samuel-beckett-bridge',
      name: 'Samuel Beckett Bridge',
      address: 'Samuel Beckett Bridge, Dublin 2, Irland',
      buildYear: '2007-2009',
      estimatedTime: '10 min',
      description:
        'Die Brücke des spanischen Architekten und Bauingenieurs Santiago Calatrava ist einer Harfe nachempfunden, die das Wahrzeichen Irlands darstellt. Die Brücke wurde nach dem irischen Literaten Samuel Beckett benannt. Sie ist 120 Meter lang und an der höchsten Spitze 48 Meter hoch. Die Brücke verbindet die Macken Street auf der Südseite mit der Guild Street auf der Nordseite. Sie liegt im modernen Stadtteil Docklands. Die Brücke kann um 90 Grad gedreht werden, damit grosse Schiffe passieren können.',
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
      description:
        'Das Gebiet der Docklands ist geprägt von neuer und imposanter Architektur. Eines der besten Beispiele hierfür ist das Bord Gais Energy Theater. Das Theater wurde von Daniel Libeskind entworfen und wurde 2010 gebaut.',
      imagesPath: '/img/architecture',
      images: ['IMG_7496.JPG', 'IMG_7507.JPG'],
    },
    {
      id: 'alliance-building',
      name: 'Alliance Building',
      address: 'South Lotts Road, Irland',
      type: 'Wohnhaus',
      additionalInfo: 'Besichtigung nur von aussen möglich.',
      description:
        'Der ehemalige Gasometer wurde in seinem bestehenden Stahlgerüst erhalten, aber neu ausgebaut. Heute bestehen die Fassaden hauptsächlich aus Glas und dem Stahlgerüst. Zurzeit wird das Gebäude als Wohnhaus bewohnt.',
      imagesPath: '/img/architecture',
      images: ['IMG_7534.JPG', 'IMG_7529.JPG', 'IMG_7531.JPG'],
    },
  ],
};

const HISTORY_GUIDE: Guide = {
  id: 'history',
  title: 'Geschichte',
  description:
    "Die Tour startet beim Dublin Castle, einer Burg aus dem Mittelalter. Von da aus geht es weiter zu den Georgianischen Gebäuden, die an den Baustil der Griechen und Römer erinnern. Das Custom House ist das Umweltministerium von Dublin, von dort geht es zur O'Connel Bridge, einer der bedeutendsten Brücken, die den Fluss Liffey überqueren. Im Wikingermueseum Dublinia lernt man viel über das Mittelalter, gleich daneben steht die Christ Church Cathedral, eine der ältesten Kathedralen der Stadt. Die Grafton Street ist die Haupteinkaufsstrasse. Sie endet bei einer der besten Universitäten der Welt, beim Trinity College.",
  places: [
    DUBLIN_CASTLE,
    {
      id: 'georgianische-gebaeude',
      name: 'Georgianische Gebäude',
      address: 'Merion Square, Irland',
      description:
        'Der Georgianische Baustil wurde in Dublin um 1714 vom englischen König Georg eingeführt. Er wollte, dass neue öffentliche und private Gebäude in Dublin im gleichen Stil erbaut wurden. Seine drei Nachfolger hiessen alle ebenfalls Georg und waren der gleichen Meinung. Der Baustil, der seinen Namen erhielt, orientierte sich stark an der Bauweise der alten Griechen und Römer. Er endete mit dem Tod von König Georg IV. 1830. Viele georgianische Häuser sind unterdessen zwar abgerissen, einige aber haben sich erhalten.',
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
      price:
        'Eintrittskarte online oder vor Ort, sowie ermässigte Kombikarte für Dublinia und die benachbarte Christ Church Cathedral erhältlich.\n\nStudierende: 8.50 \u20AC\nErwachsene: 9.50 \u20AC',
      openingTimes: [
        { timeline: 'Täglich geöffnet', content: '' },
        {
          timeline: 'März-September',
          content: '10:00-18:30 Uhr\n(letzter Einlass: 17:30 Uhr)',
        },
        {
          timeline: 'Oktober-Februar',
          content: '10:00-17:30 Uhr\n(letzter Einlass: 16:30 Uhr)',
        },
      ],
      description:
        "Möchtest du die Geschichte der Wikinger in Dublin kennen lernen? Interessiert Dich das Mittelalter? Dann ist die Dublinia genau das Richtige für dich. Die Ausstellung befindet sich in einem Nebengebäude der Christ Church Kathedrale. Am Ende des Besuchs lohnt es sich, knapp hundert Stufen auf den St. Michael's Tower hinaufzusteigen und die Aussicht auf Dublin zu geniessen. Es gibt ein kleines Café und einen Souvenirshop.",
      imagesPath: '/img/history',
      images: ['IMG_5088.JPG'],
    },
    CHRIST_CHURCH_CATHEDRAL,
    {
      id: 'grafton-street',
      name: 'Grafton Street',
      address: 'Grafton Street, Irland',
      type: 'Einkaufsstrasse',
      description:
        "Die Grafton Street ist die Haupteinkaufsstrasse Dublins. Sie führt vom Trinity College zum St. Stephen's Green. Die Strasse ist nach dem Duke of Grafton benannt und wurde von der Dawson-Familie ausgebaut. Du findest in den Seitenstrassen auch das Haus des Dekans des Trinity Colleges aus dem 18. Jahrhundert und die berühmte Statue Molly Malone. Der Sage nach war die junge Schönheit die Tochter eines Fischhändlers aus Temple Bar. Sie soll tagsüber Meeresfrüchte verkauft und nachts den Männern den Kopf verdreht haben. Heute ist diese Strasse einer der teuersten Einkaufsstrassen der Welt.",
      imagesPath: '/img/history',
      images: ['4793933_a221c14f.jpg', '9199565442_1628636181_o.jpg'],
    },
    TRINITY_COLLEGE,
  ],
};

const FOOD_GUIDE: Guide = {
  id: 'food',
  title: 'Kulinarik',
  description:
    "Die Tour startet beim unscheinbaren Vice Coffee und führt dann an den Rand von Dublin zum Café Love Supreme. Im Restaurant Wuff kann man ein leckeres Frühstück geniessen und im Nando's ein herzhaftes Mittagessen. Im Restaurant Farm sind alle Produkte frisch und selbst angebaut. Die Tour endet in einer ehemaligen reformierten Kirche, die heute ein Pub und Restaurant ist und sich the Church nennt.",
  places: [
    {
      id: 'vice-coffee',
      name: 'Vice Coffee',
      address: '54 Abbey Street Middle, North City, Dublin, Irland',
      url: 'http://www.vicecoffeeinc.com/',
      urlText: 'www.vicecoffeeinc.com',
      openingTimes: [{ content: 'Mo-So 11:00-18:00 Uhr' }],
      type: 'Specialty Coffee Shop',
      description:
        'Das unscheinbare Café befindet sich inmitten der Shopping-Meile in Dublin. Man übersieht dieses kleine Lokal sehr leicht, da es zwischen ganz viel Shops versteckt liegt. Der Kaffee ist herrvoragend und die Bedienung sehr zuvorkommend. Wenn man etwas über den Kaffee wissen will, wendet man sich am besten gleich an den Barista, der freut sich über jede Frage bezüglich Kaffee. Die angebotene Kaffeesorte ändert häufig, da das Lokal immer wieder eine neue ausprobieren und den Kunden die grosse Sortenvielfalt zeigen möchte.',
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
          content:
            'Mo und Mi-Fr 08:00-18:00 Uhr\nDi geschlossen\nSa und So 10:00-17:00 Uhr',
        },
      ],
      description:
        'Ein kleiner Abstecher an den Rand von Dublin lohnt sich. Du kannst wunderschöne Architektur sehen und auf einen Kaffee im Love Supreme vorbei schauen. Du wirst schon von weitem sehen, dass hier jemand viel Arbeit investiert hat. Das Kaffee ist wunderschön eingerichtet und der Barista weiss, wie man guten Kaffee zubereitet.',
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
          content:
            'Mo-Mi 08:00-16:00 Uhr\nDo-Sa 08:00-16:00 und 17:30-21:30 Uhr\nSo 10:00-16:00 Uhr',
        },
      ],
      additionalInfo:
        'Für ein einfaches Frühstück passt dieses Restaurant perfekt.',
      description:
        'Wenn du einmal nicht im Hotel frühstücken möchtest, ist das Wuff sehr empfehlenswert, da es sehr gemütlich und leger ist. Hier kommen hauptsächlich Dubliner her.',
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
          content:
            'Mo-Do 11:30-22:00 Uhr\nFr und Sa 11:30-23:00 Uhr\nSo 12:00-22:00 Uhr',
        },
      ],
      type: 'Fast-Food-Konzept mit sehr gutem Essen.',
      description:
        'Dies ist ein perfektes Restaurant für das Mittagessen. Es ist auch gut für Allergiker geeignet. Hier wird nur Poulet angeboten, dies aber in vielen verschiedenen Varianten. Das Restaurant kocht koscher.',
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
      description:
        'Wer Lust auf ein gesundes Mittag- oder Abendessen hat, ist hier richtig. Die Preise sind höher als in andern Restaurants, da nur mit saisonalen Produkten aus eigenem Anbau gekocht wird.',
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
        { content: 'Mo-Fr 7:15-18:00 Uhr\nSa und So 9:00-18:00 Uhr' },
      ],
      description:
        'Dieses Café/Restaurant ist perfekt gelegen, um es mit einem Shopping Trip oder einem anderen Spaziergang wie zum Beispiel jenem zu Street-Art/Kunst zu kombinieren. Es ist ein hübsches Café mit verschiedenen Menüs, die auch ein sehr gutes Preis-Leistungs-Verhältnis haben.',
      imagesPath: '/img/kulinarik',
      images: ['IMG_5770.jpg', 'IMG_5772.jpg'],
    },
    THE_CHURCH,
  ],
};

export const ALL_GUIDES = [ARCHITECTURE_GUIDE, HISTORY_GUIDE, FOOD_GUIDE];
