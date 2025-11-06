// Components
import GoogleMap from '../components/GoogleMap/GoogleMap';
import GuideSummary from '../components/GuideSummary/GuideSummary';
import Section from '../components/Section/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons';

// Data
import { ROUTES } from '../data/maps';

const HomePage: React.FC = () => {
  return (
    <>
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
          <GoogleMap routes={ROUTES} />

          <h2 className="font-bold text-xl mb-8 text-center">
            Graue Marker sind in mehrere Touren vorhanden!
          </h2>

          <GuideSummary />
        </Section>
      </main>
      <footer>
        <div className="bg-white-transparent w-[85vw] mx-auto">
          <hr className="mx-auto border-[#666] border-2 w-3/4" />
        </div>
        <Section id="impressum" title="Impressum">
          <p className="text-center mb-4">Zuletzt aktualisiert 02.02.2018</p>
          <div className="text-center mb-8">
            <h2 className="font-bold text-xl">Redaktionsteam</h2>
            <p>Anabel, C&eacute;line, Leandro, Silke</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 text-center">
            <div className="flex flex-col flex-1 items-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-4xl mb-3" />
              <a href="mailto:info@reisefuehrer-irland.ch">
                info@reisefuehrer-irland.ch
              </a>
            </div>
            <div className="flex flex-col flex-1 items-center">
              <FontAwesomeIcon icon={faUserCircle} className="text-4xl mb-3" />
              <p className="w-3/4">
                Built by Leandro Meleti using React and Tailwind
              </p>
            </div>
          </div>
        </Section>
      </footer>
    </>
  );
};

export default HomePage;
