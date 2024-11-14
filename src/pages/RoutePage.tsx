import { useParams } from 'react-router';
import Section from '../components/Section';

import { GUIDES } from '../data/guides';

const RoutePage: React.FC = () => {
  const params = useParams();
  const id = params.id;

  return (
    <main>
      <Section
        id="route"
        title={GUIDES.find((guide) => guide.id === id)?.text || 'No Title'}
      >

        
      </Section>
    </main>
  );
};

export default RoutePage;
