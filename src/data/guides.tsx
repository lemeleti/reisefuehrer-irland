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
  images: string[][];
};

export type Guide = {
  id: string;
  title: string;
  description: string;
  walkTime: string;
  places: Place[];
};

import smallStPatrick from '/img/architecture/thumbnails/IMG_5172.JPG?url';
import bigStPatrick from '/img/architecture/fullsize/IMG_5172.JPG?url';

import smallChristChurch from '/img/history/thumbnails/4095831289_b190f62546_b.jpg?url';
import bigChristChurch from '/img/history/fullsize/4095831289_b190f62546_b.jpg?url';

import smallDublinCastle1 from '/img/history/thumbnails/-Dublin-Castle.jpg?url';
import smallDublinCastle2 from '/img/history/thumbnails/28744593794_dc461db9b6_b.jpg?url';
import smallDublinCastle3 from '/img/history/thumbnails/IMG_7351.JPG?url';

import bigDublinCastle1 from '/img/history/thumbnails/-Dublin-Castle.jpg?url';
import bigDublinCastle2 from '/img/history/fullsize/28744593794_dc461db9b6_b.jpg?url';
import bigDublinCastle3 from '/img/history/fullsize/IMG_7351.JPG?url';

import smallStStephen1 from '/img/architecture/thumbnails/IMG_7401.JPG?url';
import bigStStephen1 from '/img/architecture/fullsize/IMG_7401.JPG?url';

import smallStStephen2 from '/img/architecture/thumbnails/IMG_7408.JPG?url';
import bigStStephen2 from '/img/architecture/fullsize/IMG_7408.JPG?url';

import smallNationalLibrary from '/img/architecture/thumbnails/National Library of Ireland.png?url';
import bigNationalLibrary from '/img/architecture/fullsize/National Library of Ireland.png?url';

import smallTrinityCollegeLibrary1 from '/img/architecture/thumbnails/IMG_7555.JPG?url';
import smallTrinityCollegeLibrary2 from '/img/architecture/thumbnails/IMG_5222.JPG?url';
import smallTrinityCollegeLibrary3 from '/img/architecture/thumbnails/IMG_7553.JPG?url';
import smallTrinityCollegeLibrary4 from '/img/architecture/thumbnails/IMG_7561.JPG?url';

import bigTrinityCollegeLibrary1 from '/img/architecture/fullsize/IMG_7555.JPG?url';
import bigTrinityCollegeLibrary2 from '/img/architecture/fullsize/IMG_5222.JPG?url';
import bigTrinityCollegeLibrary3 from '/img/architecture/fullsize/IMG_7553.JPG?url';
import bigTrinityCollegeLibrary4 from '/img/architecture/fullsize/IMG_7561.JPG?url';

import smallHapennyBridge from '/img/architecture/thumbnails/IMG_7382.JPG?url';
import bigHapennyBridge from '/img/architecture/fullsize/IMG_7382.JPG?url';

import smallCustomHouse from '/img/history/thumbnails/Custom_House_Dublin_01.JPG?url';
import bigCustomHouse from '/img/history/fullsize/Custom_House_Dublin_01.JPG?url';

import smallSeanOCaseyBridge1 from '/img/architecture/thumbnails/IMG_7457.JPG?url';
import smallSeanOCaseyBridge2 from '/img/architecture/thumbnails/IMG_7466.JPG?url';

import bigSeanOCaseyBridge1 from '/img/architecture/fullsize/IMG_7457.JPG?url';
import bigSeanOCaseyBridge2 from '/img/architecture/fullsize/IMG_7466.JPG?url';

import smallSamuelBeckettBridge1 from '/img/architecture/thumbnails/IMG_7472.JPG?url';
import smallSamuelBeckettBridge2 from '/img/architecture/thumbnails/IMG_7483.JPG?url';

import bigSamuelBeckettBridge1 from '/img/architecture/fullsize/IMG_7472.JPG?url';
import bigSamuelBeckettBridge2 from '/img/architecture/fullsize/IMG_7483.JPG?url';

import smallBordGais1 from '/img/architecture/thumbnails/IMG_7496.JPG?url';
import smallBordGais2 from '/img/architecture/thumbnails/IMG_7507.JPG?url';

import bigBordGais1 from '/img/architecture/fullsize/IMG_7496.JPG?url';
import bigBordGais2 from '/img/architecture/fullsize/IMG_7507.JPG?url';

import smallAllianceBuilding1 from '/img/architecture/thumbnails/IMG_7534.JPG?url';
import smallAllianceBuilding2 from '/img/architecture/thumbnails/IMG_7529.JPG?url';
import smallAllianceBuilding3 from '/img/architecture/thumbnails/IMG_7531.JPG?url';

import bigAllianceBuilding1 from '/img/architecture/fullsize/IMG_7534.JPG?url';
import bigAllianceBuilding2 from '/img/architecture/fullsize/IMG_7529.JPG?url';
import bigAllianceBuilding3 from '/img/architecture/fullsize/IMG_7531.JPG?url';

export const ARCHITECTURE_GUIDE: Guide = {
  id: 'architecture',
  title: 'Architektur',
  description:
    'Die Tour startet bei den zwei ältesten Kathedralen der Stadt und führt dann zum berühmten Dublin Castle, einer ehemaligen Burg. Weiter geht es zu einem Einkaufszentrum, das sich in einer eindrucksvollen Metall-Glaskonstruktion befindet. Danach spazierst du zur Irischen Nationalbibliothek von 1890 und weiter zur noch bekannteren Bibliothek im Trinity College, wo das weltberühmte Buch "Book of Kells" aufbewahrt wird. Es folgt die Ha\'penny Bridge, an der einst Zoll verlangt wurde. Dann spazierst du dem Liffey entlang und erreichst das monumentale Custom House, das heutige Umweltministerium. Nach zwei modernen Brücken bist du im lebendigen Quartier Docklands angekommen und und kannst dir das Bord Gais Energy Theater und den umgenutzten ehemaligen Gasometer ansehen.',
  walkTime: '1h 45min ',
  places: [
    {
      id: 'st-patricks-cathedral-architecture',
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
          content:
            'Mo-Fr 9:30-17:00\nSa 9:30-17:00\nSo 9:00-10:30 und 12:30-14:30',
        },
      ],
      guideDetails:
        'Täglich 10:30, 11:30, 15:00 und 15:30\n(im Eintrittspreis enthalten)',
      description:
        "Die St. Patrick's Cathedral heisst vollständig Ard-Eaglais Naomh Pádraig. Sie ist nicht nur die grösste Kathedrale Dublins, sondern auch die grösste von ganz Irland. Dieser Ort ist für die Iren sehr wichtig, weil man annimmt, dass hier die Quelle lag, an der St. Patrick bekehrte Christen getauft hatte. Ursprünglich gab es nur eine Holzkappelle. Das Gebäude wurde dann stetig vergrössert, bis 1270 das mittlerweile 91 Meter lange Schiff mit Chor entstand. Die Kathedrale wurde mit Hilfe der Guinness-Familie umfassend renoviert, weshalb eine Büste von Mr. Benjamin Guinness vor dem Gebäude steht. 1742 wurde hier der Messias von G.F. Händel uraufgeführt. In der Kathedrale ist eine Ausstellung zu besichtigen, die das Wirken von St. Patrick zeigt.",
      additionalInfo: 'Kein Besuch während den Gottesdiensten möglich.',
      images: [[smallStPatrick, bigStPatrick]],
    },
    {
      id: 'christ-church-cathedral-architecture',
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
      images: [[smallChristChurch, bigChristChurch]],
    },
    {
      id: 'dublin-castle-architecture',
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
      images: [
        [smallDublinCastle1, bigDublinCastle1],
        [smallDublinCastle2, bigDublinCastle2],
        [smallDublinCastle3, bigDublinCastle3],
      ],
    },
    {
      id: 'st-stephens-green-shopping-center',
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
      images: [
        [smallStStephen1, bigStStephen1],
        [smallStStephen2, bigStStephen2],
      ],
    },
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
      images: [[smallNationalLibrary, bigNationalLibrary]],
    },
    {
      id: 'trinity-college-architecture',
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
      images: [
        [smallTrinityCollegeLibrary1, bigTrinityCollegeLibrary1],
        [smallTrinityCollegeLibrary2, bigTrinityCollegeLibrary2],
        [smallTrinityCollegeLibrary3, bigTrinityCollegeLibrary3],
        [smallTrinityCollegeLibrary4, bigTrinityCollegeLibrary4],
      ],
    },
    {
      id: 'ha-penny-bridge',
      name: "Ha'penny Bridge",
      address: 'Bachelors Walk, North City, Dublin, Irland',
      estimatedTime: '5 min',
      description:
        'Diese Brücke hat eine lange Tradition in Dublin. Sie verbindet den Stadtteil Temple Bar und die Einkaufsstrasse rund um die Henry Street über den Fluss Liffey. Es ist eine reine Fussgängerbrücke, die 1816 gebaut wurde. Ihren Namen bekam sie, weil man früher einen halben bzw. einen Penny als Zoll für die Überquerung zahlen musste. Heute befinden sich an den weiss gestrichenen, gusseisernen Brüstungen viele love locks (Liebesschlösser).',
      images: [[smallHapennyBridge, bigHapennyBridge]],
    },
    {
      id: 'custom-house-architecture',
      name: 'Custom House',
      address: 'North Dock, Dublin 1, Irland',
      openingTimes: [{ content: 'Mo-Fr 09:00-17:00' }],
      type: 'ehem. Zollamt / heute Umweltministerium',
      buildStyle: 'Neoklassizismus',
      description:
        'Das Custom House (1781-1791) wurde vom Architekten James Gandos als Gesellenstück erbaut. Danach folgten einige weitere Prestigebauten in Dublin wie zum Beispiel das "Four Courts". Das imposante Gebäude hat eine Länge von 114 Metern und eine markante Kuppel. Die Kuppel von 60 Metern Höhe wird gekrönt von einer überlebensgrossen Statue des Handels. Der Bau kostete damals eine Summe von 200\'000 Pfund und verschaffte vielen Handwerkern in Dublin Arbeit. Ursprünglich wurde das Gebäude als Amt für Zölle von ankommenden Schiffen gebraucht, bis der Hafen weiter flussabwärts verlegt wurde. Im Bürgerkrieg 1921 wurde dieses Gebäude schwer beschädigt, was zu einer umfassenden Renovation führte. Ein Brand zerstörte die ganze Innengestaltung von J. Gandons und führte zum Einsturz der Kuppel führte. Diese wurde wiederaufgebaut, aber in einem anderen Kalksandstein.',
      images: [[smallCustomHouse, bigCustomHouse]],
    },
    {
      id: 'sean-o-casey-bridge',
      name: "Sean O'Casey Bridge",
      address: "Sean O'Casey Bridge, South-East Inner City, Irland",
      estimatedTime: '10 min',
      description:
        'Die Schrägseilbrücke Sean O\'Casey Bridge, die 2005 vom Architekten Cyril O\'Neil erbaut wurde, überquert den Fluss Liffey und verbindet das südliche und das nördliche Hafenviertel. Die Brücke ist knapp 100 Meter lang und kann um 90 Grad geschwenkt werden, um grossen Schiffen die Durchfahrt zu ermöglichen. 2006 erhielt der Entwurf der Brücke die Auszeichnung "beste Fussgängerbrücke".',
      images: [
        [smallSeanOCaseyBridge1, bigSeanOCaseyBridge1],
        [smallSeanOCaseyBridge2, bigSeanOCaseyBridge2],
      ],
    },
    {
      id: 'samuel-beckett-bridge',
      name: 'Samuel Beckett Bridge',
      address: 'Samuel Beckett Bridge, Dublin 2, Irland',
      buildYear: '2007-2009',
      estimatedTime: '10 min',
      description:
        'Die Brücke des spanischen Architekten und Bauingenieurs Santiago Calatrava ist einer Harfe nachempfunden, die das Wahrzeichen Irlands darstellt. Die Brücke wurde nach dem irischen Literaten Samuel Beckett benannt. Sie ist 120 Meter lang und an der höchsten Spitze 48 Meter hoch. Die Brücke verbindet die Macken Street auf der Südseite mit der Guild Street auf der Nordseite. Sie liegt im modernen Stadtteil Docklands. Die Brücke kann um 90 Grad gedreht werden, damit grosse Schiffe passieren können.',
      images: [
        [smallSamuelBeckettBridge1, bigSamuelBeckettBridge1],
        [smallSamuelBeckettBridge2, bigSamuelBeckettBridge2],
      ],
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
      images: [
        [smallBordGais1, bigBordGais1],
        [smallBordGais2, bigBordGais2],
      ],
    },
    {
      id: 'alliance-building',
      name: 'Alliance Building',
      address: 'South Lotts Road, Irland',
      type: 'Wohnhaus',
      additionalInfo: 'Besichtigung nur von aussen möglich.',
      description:
        'Der ehemalige Gasometer wurde in seinem bestehenden Stahlgerüst erhalten, aber neu ausgebaut. Heute bestehen die Fassaden hauptsächlich aus Glas und dem Stahlgerüst. Zurzeit wird das Gebäude als Wohnhaus bewohnt.',
      images: [
        [smallAllianceBuilding1, bigAllianceBuilding1],
        [smallAllianceBuilding2, bigAllianceBuilding2],
        [smallAllianceBuilding3, bigAllianceBuilding3],
      ],
    },
  ],
};

export const ALL_GUIDES = [ARCHITECTURE_GUIDE];
