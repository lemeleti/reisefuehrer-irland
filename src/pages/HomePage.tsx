import { Link } from 'react-router-dom';

import HeaderNavigation from '../components/HeaderNavigation';
import Section from '../components/Section';
import GuideSummaryItem from '../components/GuideSummaryItem';

import { ROUTES } from '../maps';

const HomePage: React.FC = () => {
  return (
    <>
      <header className="w-[85vw] py-2 px-4 mx-auto bg-black text-[#c0c0c0] font-bold uppercase flex justify-between">
        <Link to="" className="text-[1.25rem]">
          Reisef&uuml;hrer
        </Link>
        <HeaderNavigation />
      </header>
      <main>
        <Section id="dublin" title="Dublin">
          <p className="text-justify">
            Dublin, die Hauptstadt Irlands, liegt an der Ostk&uuml;ste der
            Insel. Die Stadt wird durch den Fluss Liffey in einen Nord- und
            einen S&uuml;dteil gegliedert. Der Flughafen liegt etwas ausserhalb,
            die Verbindung mit dem &ouml;ffentlichen Verkehr ist aber sehr gut
            organisiert. Dublin hat eine wirklich sch&ouml;ne Altstadt, die uns
            stark an London erinnert. Temple Bar, ein besonders beliebter
            Stadtteil, ist sehr interessant. Die Gassen sind dort ges&auml;umt
            mit Gesch&auml;ften, Restaurants und Pubs. Durch Dublins Strassen
            fahren Doppeldeckerbusse und &uuml;ber den Liffey f&uuml;hren viele
            sehenswerte Br&uuml;cken. Am Ufer gibt es zahlreiche B&auml;nke, auf
            denen man sich eine Pause g&ouml;nnen und den Fluss oder die Leute
            beobachten kann.
          </p>
        </Section>
        <Section id="about" title="Über uns">
          <p className="text-justify">
            Wir sind vier Studierende aus der Berufsmittelschule Winterthur.
            F&uuml;r unsere Maturit&auml;tsarbeit durften wir ein kreatives
            Projekt gestalten zum Oberthema Dublin. Um dir die Stadt Dublin
            n&auml;her zu bringen, haben wir vor Ort unsere Spazierg&auml;nge
            entworfen. F&uuml;r junge Erwachsene im Low-Budget-Bereich haben wir
            eine interaktive Homepage erstellt, auf der du je nach
            Interessensgebiet einen Spaziergang findest. Wir hoffen, wir
            k&ouml;nnen dir mit unserer Arbeit einige Vorbereitungszeit f&uuml;r
            deine Reise nach Dublin abnehmen. Viel Spass beim St&ouml;bern
            w&uuml;nschen dir Anabel, C&eacute;line, Leandro und Silke.
          </p>
        </Section>
        <Section id="guides" title="Spaziergänge">

          <h2 className="font-bold text-xl mb-8">
            Graue Marker sind in mehrere Touren vorhanden!
          </h2>
          <ul>
            <GuideSummaryItem
              dotColor={ROUTES[0].strokeColor}
              title="Architektur"
            >
              Dieser Spaziergang f&uuml;hrt dich quer durch ganz Dublin an
              wichtigen architektonischen Bauten vorbei. Die Zeitepoche reicht
              vom Mittelalter bis zur heutigen Zeit.
            </GuideSummaryItem>
            <GuideSummaryItem
              dotColor={ROUTES[1].strokeColor}
              title="Geschichte"
            >
              Interessiert dich Geschichte? Aber willst du dir dein Wissen nicht
              nur aus Museen und B&uuml;chern holen? Dann findest du den kleinen
              Exkurs in die Dubliner Geschichte sicher spannend. Dieser
              Spaziergang f&uuml;hrt dich durch vergangene Zeiten und vermittelt
              dir ein paar Eindr&uuml;cke. Wenn dir etwas besonders
              gef&auml;llt, steht es dir frei, ob du noch mehr aus dieser Zeit
              entdecken willst.
            </GuideSummaryItem>
            <GuideSummaryItem
              dotColor={ROUTES[2].strokeColor}
              title="Kulinarik"
            >
              Wenn du nicht nur Burger und Pommes essen und nach dem Guinness
              Abend am n&auml;chsten Morgen einen hervorragenden Kaffee mit oder
              ohne Brunch geniessen m&ouml;chtest, sind diese Restaurants
              perfekt.
            </GuideSummaryItem>
            <GuideSummaryItem dotColor={ROUTES[3].strokeColor} title="Kunst">
              Der Spaziergang ist ideal f&uuml;r Leute, die nicht nur in Museen
              verweilen wollen, sondern parallel zur Kunst auch die
              wundersch&ouml;ne Stadt entdecken m&ouml;chten. Die Tour
              beschr&auml;nkt sich auf Street-Art und kann gut mit anderen
              Touren kombiniert werden. Street-Art ist sehr lebendig und immer
              im Wandel, daher kann sich viel ver&auml;ndern und wir garantieren
              nicht, dass die beschriebenen Kunstwerke noch vorhanden sind, wenn
              du sie dir ansehen willst. Unser Tipp: Achte beim Flanieren auch
              auf die Nebengassen, Street-Art versteckt sich genau dort, wo man
              nicht darauf achtet.
            </GuideSummaryItem>
            <GuideSummaryItem dotColor={ROUTES[4].strokeColor} title="Musik">
              In Dublin ist Musik sehr wichtig. In vielen Pubs kann man
              traditionelle Livemusik erleben, aber auch Rock'n Roll, Jazz und
              Klassik spielen eine wichtige Rolle. Aus Dublin kommt Irlands
              ber&uuml;hmteste Rockband U2. Dieser Spaziergang f&uuml;r dich an
              Orte, die mit Musik zu tun haben.
            </GuideSummaryItem>
            <GuideSummaryItem dotColor={ROUTES[5].strokeColor} title="By Night">
              In Dublin kann man auch am Abend viel sehen und erleben. Es gibt
              zahlreiche Pubs und Restaurants und viele Br&uuml;cken &uuml;ber
              den Liffey sind nachts beleuchtet. Ein sehr beliebtes Viertel ist
              Temple Bar, dort hat es an jeder zweiten Ecke ein Pub oder eine
              Bar.
            </GuideSummaryItem>
            <GuideSummaryItem dotColor={ROUTES[6].strokeColor} title="Oasen">
              Brauchst du Zeit, um abzuschalten oder einfach einmal die Zeit zu
              geniessen und dies erst noch an der frischen Luft, dann wirst du
              hier sicher f&uuml;ndig.
            </GuideSummaryItem>
            <GuideSummaryItem dotColor={ROUTES[7].strokeColor} title="Politik">
              Dieser Spaziergang f&uuml;hrt dich zu historischen und heute
              wichtigen Geb&auml;uden, die mit dem Thema Politik zu tun haben.
            </GuideSummaryItem>
            <GuideSummaryItem
              dotColor={ROUTES[8].strokeColor}
              title="Sehenswertes"
            >
              Dieser Spaziergang f&uuml;hrt dich vorbei an bekannten
              Geb&auml;uden, Orten und Sehensw&uuml;rdigkeiten.
            </GuideSummaryItem>
          </ul>
        </Section>
      </main>
    </>
  );
};

export default HomePage;
