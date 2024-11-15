import { useParams } from 'react-router';
import Section from '../components/Section';

import { ALL_GUIDES } from '../data/guides';
import Place from '../components/Place';
import Divider from '../components/Divider';
import GoogleMap from '../components/GoogleMap';
import { ROUTES } from '../data/maps';
import CollapsableParagraph from '../components/CollapsableParagraph';

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
      <Section id="route" title={guide.title}>
        <GoogleMap routes={route} scrollToType="POINT" />

        <h2 className="text-xl font-bold my-4">Ungefähre Gehzeit</h2>
        <p>{guide.walkTime}</p>

        <h2 className="text-xl font-bold my-4">Beschreibung</h2>
        <CollapsableParagraph className="place-items-center">
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
