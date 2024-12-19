import { useParams } from 'react-router';

// Components
import CollapsableParagraph from '../components/CollapsableParagraph/CollapsableParagraph';
import Divider from '../components/Divider/Divider';
import GoogleMap from '../components/GoogleMap/GoogleMap';
import Place from '../components/Place/Place';
import Section from '../components/Section/Section';

// Types
import { ScrollToTypeEnum } from '../components/GoogleMap/types';

// Data
import { ALL_GUIDES } from '../data/guides';
import { ROUTES } from '../data/maps';

const RoutePage: React.FC = () => {
  const params = useParams();
  const id = params.id;

  if (!id) {
    return <Section id="error" title="ERROR: Param ID missing!"></Section>;
  }

  const guide = ALL_GUIDES.find((guide) => guide.id === id);
  if (!guide) {
    return <Section id="error" title="ERROR: Guide not found"></Section>;
  }

  const route = ROUTES.find((r) => r.id === id);
  if (!route) {
    return <Section id="error" title="ERROR: Route not found"></Section>;
  }

  return (
    <main>
      <Section id={guide.id} title={guide.title}>
        <GoogleMap routes={route} scrollToType={ScrollToTypeEnum.POINT} />

        <Divider className="mt-10" />

        {guide.walkTime && (
          <>
            <h2 className="text-2xl font-bold my-4 text-center">
              Ungefähre Gehzeit
            </h2>
            <p className="text-center">{guide.walkTime}</p>
          </>
        )}

        <h2 className="text-2xl font-bold my-4 text-center">Beschreibung</h2>
        <CollapsableParagraph className="flex flex-col place-items-center">
          {guide.description}
        </CollapsableParagraph>

        <Divider large />
        {guide.places.map((place) => (
          <Place key={place.id} place={place} />
        ))}
      </Section>
    </main>
  );
};

export default RoutePage;
