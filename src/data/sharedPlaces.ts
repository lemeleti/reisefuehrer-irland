type OpeningTimes = {
  timeline?: string;
  content: string;
}[];

type ClosingTimes = {
  timeline: string;
  content: string;
}[]

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
  closingTimes?: ClosingTimes;
  guideDetails?: string;
  additionalInfo?: string;
  imagesPath: string;
  images: string[];
};

export const DUBLIN_CASTLE: Place = {
  id: 'dublin-castle',
  name: 'Dublin Castle',
  address: 'Dame Street, Dublin 2, Irland',
  estimatedTime: '1 h 30 min',
  url: 'http://www.dublincastle.ie/',
  urlText: 'www.dublincastle.ie',
  type: 'Burg mit Museen',
  price: `Studierende: 6 \u20AC
    Erwachsene: 7 \u20AC
  `,
  openingTimes: [
    {
      content: ` Mo-Sa 9:45-17:45
        Sonn- und Feiertage 12:00-16:45
      `,
    },
  ],
  description: `
    Nach vielen Umbauten aus dem 17.-20. Jahrhundert wurde aus der ehemaligen mittelalterlichen Burg immer mehr ein Schloss. 
    Das Castle hatte viele Nutzungen. 
    So diente es als militärisches Fort zur Verteidigung, als Gefängnis, Schatzkammer, Gericht und als Sitz der englischen Verwaltung von Irland. 
    1907 wurden die irischen Kronjuwelen aus dem Dublin Castle gestohlen. 
    Im Ballsaal "St. Patrick's Hall" feierte Queen Victoria 1897 ihren 60. Geburtstag. 
    Auch für politische Verhandlungen wurde das Gebäude benutzt. 
    So wurde hier ein Teil der Friedensgespräche von Nordirland geführt. 
    Heute wird es nur noch für repräsentative Veranstaltungen wie Staatsempfänge oder die Amtseinführung des Präsidenten gebraucht. 
    Im Dublin Castle gibt es verschiedene Museen.
  `,
  additionalInfo: `
    Auf der Führung sieht man Prunksäle, Reste der Stadtmauer aus der Wikingerzeit und den Mittelalter-Turm. 
    Es hat ein Museumscafé. Achtung: Wird für Staatsempfänge und Konferenzen gebraucht, mit eingeschränkten Öffnungszeiten.
  `,
  imagesPath: '/img/history',
  images: [
    '-Dublin-Castle.jpg',
    '28744593794_dc461db9b6_b.jpg',
    'IMG_7351.JPG',
  ],
};

export const CUSTOM_HOUES: Place = {
  id: 'custom-house',
  name: 'Custom House',
  address: 'North Dock, Dublin 1, Irland',
  openingTimes: [{ content: 'Mo-Fr 09:00-17:00' }],
  type: 'ehem. Zollamt / heute Umweltministerium',
  buildStyle: 'Neoklassizismus',
  description: `
    Das Custom House (1781-1791) wurde vom Architekten James Gandos als Gesellenstück erbaut. 
    Danach folgten einige weitere Prestigebauten in Dublin wie zum Beispiel das "Four Courts". 
    Das imposante Gebäude hat eine Länge von 114 Metern und eine markante Kuppel. 
    Die Kuppel von 60 Metern Höhe wird gekrönt von einer überlebensgrossen Statue des Handels. 
    Der Bau kostete damals eine Summe von 200'000 Pfund und verschaffte vielen Handwerkern in Dublin Arbeit. 
    Ursprünglich wurde das Gebäude als Amt für Zölle von ankommenden Schiffen gebraucht, bis der Hafen weiter flussabwärts verlegt wurde. 
    Im Bürgerkrieg 1921 wurde dieses Gebäude schwer beschädigt, was zu einer umfassenden Renovation führte. 
    Ein Brand zerstörte die ganze Innengestaltung von J. Gandons und führte zum Einsturz der Kuppel führte. 
    Diese wurde wiederaufgebaut, aber in einem anderen Kalksandstein.
  `,
  imagesPath: '/img/history',
  images: ['Custom_House_Dublin_01.JPG'],
};

export const ST_STEPHENS_GREEN_PARK: Place = {
  id: 'st-stephens-green-park',
  name: "St. Stephen's Green Park",
  address: "St Stephen's Green, Dublin 2, Irland",
  url: 'http://www.ststephensgreenpark.ie/',
  urlText: 'www.ststephensgreenpark.ie',
  openingTimes: [
    {
      content: `Mo-Sa 07:30-Sonnenuntergang
        Sonn- und Feiertage 09:30-Sonnenuntergang
      `
    }
  ],
  guideDetails: 'Auf Anfrage, spätestens einen Monat vor Durchführung',
  imagesPath: '/img/oasen',
  images: ['IMG_7426.JPG', 'IMG_7431.JPG'],
  description: `
    Der Park mit dem grossen Teich lädt zum Verweilen im Stadtinnern ein. 
    Dieser Park hat eine lange Geschichte. 
    Der Stephen's Green wurde vor 1815 noch als Weideland für Schafe und Kühe genutzt. 
    Ab 1815 wurde das umliegende Land für Bebauungen freigegeben, so dass sich der Park heute inmitten des Stadtzentrums befindet. 
    Zuerst war die Benutzung des Parks nur für die Anwohner der neuen Bauten gedacht. 
    Doch 1880 wurde der Park neu gestaltet und von der Familie Guinness und Baron Ardilaun der Öffentlichkeit zugänglich gemacht. 
    Manche Angestellten, die rund um den Park arbeiten, gönnen sich hier eine Pause. 
    Im Sommer finden im Pavillon Konzerte statt.
  `
}

export const CHRIST_CHURCH_CATHEDRAL: Place = {
  id: 'christ-church-cathedral',
  name: 'Christ Church Cathedral',
  address: 'Christchurch Place, Dublin 8, Irland',
  url: 'http://www.christchurchcathedral.ie/de/besucher/',
  urlText: 'www.christchurchcathedral.ie/',
  buildStyle: 'Frühgotik',
  price: `Studierende: 3 \u20AC
    Erwachsene: 6 \u20AC
  `,
  openingTimes: [
    {
      timeline: 'April, Mai, September und Oktober',
      content: `Mo-Sa 09:30-18:00 Uhr
        (letzter Einlass 17:15 Uhr)
      `,
    },
    {
      timeline: 'Juni-August',
      content: `Mo-Sa 09:30-19:00 Uhr
        (letzter Einlass 18:15 Uhr)
      `,
    },
    {
      timeline: 'November-März',
      content: `Mo-Sa 09:30-17:00 Uhr
        (letzter Einlass 16:15 Uhr)
      `,
    },
  ],
  description: `
    Die Christ Church Cathedral ist die ältere der beiden mittelalterlichen Kathedralen, die in Dublin stehen. 
    Sie befindet sich an der Stelle, an der vorher eine hölzerne Kirche der Wikinger stand. 
    In der Krypta sind eine mumifizierte Katze und eine Ratte zu sehen, die im Roman von James Joyce als Tom und Jerry vorkommen. 
    Bereits 1038 stand hier eine hölzerne Kirche der Wikinger. 
    Im Jahr 1240 errichtete der englische Adelige Richard de Clare die steinerne Kirche im gotischen Stil, die heutige Christ Church Cathedral. 
    Im 15. Jahrhundert ereignete sich hier etwas Interessantes: Betrüger versuchten, aus einem einfachen Jungen einen Herrscher zu machen. 
    Sie krönten den zehnjährigen Lambert Simnel zum König Eduard VI. 
    Er sollte den König Heinrich VII. von England entthronen. 
    Der Versuch scheiterte aber, die Betrüger wurden bestraft und der Junge begnadigt.
  `,
  imagesPath: '/img/history',
  images: ['4095831289_b190f62546_b.jpg'],
};

export const TRINITY_COLLEGE: Place = {
  id: 'trinity-college',
  name: 'Trinity College',
  address: 'College Green, Dublin 2, Irland',
  url: 'http://www.tcd.ie/',
  urlText: 'www.tcd.ie',
  openingTimes: [
    {
      timeline: 'Mai-September',
      content: `Mo-Sa 9:30-17:00
        So 9:30-16:45
      `,
    },
    {
      timeline: 'Oktober-April',
      content: `Mo-Sa 9:30-17:00
        So 12:00-16:30
      `,
    },
  ],
  // TODO: how to format sqaured meters?
  description: `
    Das Trinity College befand sich zur Gründungszeit noch vor den Toren der Stadt, heute ist es der Mittelpunkt von Dublin. 
    Das College wurde 1592 von Königin Elisabeth I für protestantische Studenten gegründet und hiess damals "College of the Holy and Undivided Trinity of Queen Elisabeth near Dublin". 
    Das Gelände mit 190'000 m2 umfasst Sportplätze, die Bibliothek, eine Kapelle, den bekannten Glockenturm, Schulgebäude und viele weitere Gebäude. 
    Die Bibliothek des Trinity College umfasst 4,5 Millionen Bücher, unter denen sich alte Drucke, historische Handschriften und Manuskripte befinden. 
    Das bekannteste Buch ist das "Book of Kells", das jeden Tag eine andere geöffnete Seite zeigt. 
    Der schönste Raum in der Bibliothek ist der Long Room mit 64 Metern Länge und 12 Metern Höhe.
  `,
  imagesPath: '/img/architecture',
  images: ['IMG_7555.JPG', 'IMG_5222.JPG', 'IMG_7553.JPG', 'IMG_7561.JPG'],
};

export const THE_CHURCH: Place = {
  id: 'the-church',
  name: 'The Church',
  address:
    'Junction of Mary Street & Jervis Street, North City, Dublin 1, Irland',
  url: 'http://www.thechurch.ie/',
  urlText: 'www.thechurch.ie',
  openingTimes: [
    {
      content: `Mo-Do 10:30-23:00
        Fr und Sa 10:30-02:30
        So 11:30-23:00
      `,
    },
  ],
  type: 'Restaurant und Pub',
  description: `
    Das Lokal The Church ist sehr aussergewöhnlich und gehört zu den bekanntesten Pubs in Dublin. 
    Es befindet sich in einer ehemaligen reformierten Kirche. 
    Als diese vor rund 300 Jahren entstand, wurde sie als eine der ersten Kirchen in Irland mit einer Empore ausgestattet und bekam wertvolle Buntglas-Fenster sowie eine schöne Orgel aus der Werkstatt des berühmten Orgelbauers Renatus Harris. 
    Doch 1967 wurde die Kirche geschlossen und verfiel. 
    Nach einer umfassenden Renovation eröffnete darin 2005 das Restaurant/Pub. 
    Weil die Umwandlung sorgfältig erfolgte, kann man die wunderschönen Fenster und die Orgel noch immer bewundern. 
    Wie in vielen Pubs in Dublin darf Live Musik nicht fehlen, diese spielt vorne beim ehemaligen Altar. 
    The Church ist das beste Pub, um ein Guinness zu trinken, weil hier der Gründer von Guinness einst heiratete.
  `,
  imagesPath: '/img/music',
  images: ['IMG_5830.jpg', '9696750448_00d8028896_o.jpg'],
};

export const O_CONNELL_BRIDGE: Place = {
  id: 'o-connel-bridge',
  name: "O'Connel Bridge",
  address: "O'Connell Bridge, Dublin, Irland",
  estimatedTime: '10 min',
  description: `
    Die O'Connel Bridge wurde vom Architekten James Gandon erbaut. 
    Sie ist eine der wichtigsten Brücken über den Fluss Liffey und verbindet den Boulevard O'Connell Street und die Gabelung D'Olier Street/Westmoreland Street. 
    Seit diese Brücke im Jahr 1794 eröffnet wurde, ist sie von grosser Bedeutung, da sie eine zentrale Verbindung in Irlands Nord-Süd-Achse darstellt. 
    Sie ist sehr breit und hat Platz für mehrere Fahrspuren. 
    Doch sie ist nicht nur für den Verkehr sehr wichtig, sie hat auch einen bedeutenden architektonischen Wert. 
    Ihr Erbauer war nämlich ein berühmter englischer Architekt, der in Dublin im 18. und frühen 19. Jahrhundert viele grosse, öffentliche Bauten erstellte und so das Aussehen der Stadt prägte. 
    Nachts ist die Brücke beleuchtet, aber auch tagsüber ist sie sehr schön anzusehen.
  `,
  imagesPath: '/img/night',
  images: [
    'IMG_7011.jpg',
    "O'Connell_Street_Dublin2.JPG",
    'O_Connell_Bridge.crop.JPG',
  ],
};

export const ST_PATRICKS_CATHEDRAL: Place = {
  id: 'st-patricks-cathedral',
  name: "St. Patrick's Cathedral",
  address: "St Patrick's Close, Wood Quay, Dublin 8, Irland",
  url: 'http://www.stpatrickscathedral.ie/',
  urlText: 'www.stpatrickscathedral.ie',
  type: 'Kirche',
  buildStyle: 'Gotische Architektur',
  price: `Studierende: 4.50 \u20AC
    Erwachsene: 5.50 \u20AC
  `,
  openingTimes: [
    {
      timeline: 'März-Oktober',
      content: `Mo-Fr 9:30-17:00
        Sa 9:00-18:00
        So 9:00-10:30, 12:30-14:30 und 16:30-18:00
      `,
    },
    {
      timeline: 'November-Februar',
      content: `Mo-Fr 9:30-17:00
        Sa 9:30-17:00
        So 9:00-10:30 und 12:30-14:30
      `,
    },
  ],
  guideDetails: `Täglich 10:30, 11:30, 15:00 und 15:30
      (im Eintrittspreis enthalten)
    `,
  description: `
    Die St. Patrick's Cathedral heisst vollständig Ard-Eaglais Naomh Pádraig. 
    Sie ist nicht nur die grösste Kathedrale Dublins, sondern auch die grösste von ganz Irland. 
    Dieser Ort ist für die Iren sehr wichtig, weil man annimmt, dass hier die Quelle lag, an der St. Patrick bekehrte Christen getauft hatte. 
    Ursprünglich gab es nur eine Holzkappelle. 
    Das Gebäude wurde dann stetig vergrössert, bis 1270 das mittlerweile 91 Meter lange Schiff mit Chor entstand. 
    Die Kathedrale wurde mit Hilfe der Guinness-Familie umfassend renoviert, weshalb eine Büste von Mr. Benjamin Guinness vor dem Gebäude steht. 
    1742 wurde hier der Messias von G.F. Händel uraufgeführt. 
    In der Kathedrale ist eine Ausstellung zu besichtigen, die das Wirken von St. Patrick zeigt.
  `,
  additionalInfo: 'Kein Besuch während den Gottesdiensten möglich.',
  imagesPath: '/img/architecture',
  images: ['IMG_5172.JPG'],
};

export const O_NEILS_PUB_AND_KITCHEN: Place = {
  id: 'o-neill-s-pub-and-kitchen',
  name: "O'Neill's Pub and Kitchen",
  address: '2 Suffolk Street, Dublin 2, Irland',
  url: 'http://www.oneillspubdublin.com/',
  urlText: 'www.oneillspubdublin.com',
  type: 'Pub und Restaurant mit Livemusik',
  additionalInfo: 'Beim Frühstück ist noch kein Gedränge. Über die Qualität des Essens sind sich die Gäste uneinig.',
  openingTimes: [
    {
      content: `Mo-Do 8:00-23:30
        Fr und Sa 8:00-0:30
        So 8:00-23:00
      `,
    },
  ],
  imagesPath: '/img/music',
  images: ['o-neils.jpg'],
  description: `
    Das rund 130-jährige Pub befindet sich in einem viktorianischen Gebäude. 
    Es besitzt viele Ecken, Erker und Treppen und ist sehr verwinkelt. 
    Von aussen wirkt es eher klein, überrascht aber im Innern mit viel Platz. 
    Über zwei Etagen sind fünf Theken verteilt. Auch eine Dachterrasse hat es. 
    In diesem altehrwürdigen Pub gibt es neben verschiedenen Bieren und 40 irischen Whiskys traditionelle irische Hausmannskost. 
    Vom Frühstück über das Mittagessen bis zum Abendessen und Zwischenmahlzeiten ist alles erhältlich. 
    Die Portionen sind gross und günstig. Praktisch täglich steht Live-Musik auf dem Programm. 
    Auf grossen TV-Bildschirmen werden wichtige Fussballspiele übertragen. 
    Das Pub wird gerne von den Studierenden der nahen Universität besucht, ist aber auch eine Touristenattraktion. 
    Das Gedränge kann sehr gross werden. 
    Zum Pub gehört auch noch ein Gästehaus mit einigen Hotelzimmern.
  `,
};

export const CITY_HALL: Place = 
{
  id: 'city-hall',
  name: 'City Hall',
  address: 'Dame Street, Dublin 2, Irland',
  url: 'http://www.dublincity.ie/',
  urlText: 'www.dublincity.ie',
  type: 'ehem. Rathaus',
  openingTimes: [
    {
      content: `Mo-Sa 10:00-17:15
        So geschlossen
      `,
    },
  ],
  imagesPath: '/img/politics',
  images: ['IMG_7358.JPG', 'IMG_7336.JPG', 'IMG_7340.JPG'],
  description: `
    Die City Hall (1769-1779) ist eines der besten Beispiele der georgianischen Architektur. 
    Sie war ursprünglich eine Börse, wurde aber 1851 nach einer wirtschaftlichen Krise von der Dublin City Corporation gekauft und für die Stadtverwaltung eingerichtet. 
    Diese Verwaltung stand damals noch unter englischer Führung. 
    Darum wurde die City Hall von den irischen Rebellen besetzt, als sich diese 1916 gegen die englische Herrschaft auflehnten. 
    Der sogenannte Osteraufstand scheiterte zwar, aber 1922 wurde Irland doch noch unabhängig und die neue Regierung bezog die City Hall provisorisch als Hauptquartier. 
    1995 musste die Stadtverwaltung das Gebäude wegen Platzproblemen verlassen. Aber jeden ersten Montag im Monat kehrt der Stadtrat zurück in die City Hall. 
    Heute wird im Kellergewölbe eine Ausstellung gezeigt, die Einblick in die Entwicklung der Stadt gibt.
  `,
}
