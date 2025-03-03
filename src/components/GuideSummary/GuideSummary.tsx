import GuideSummaryItem from '../GuideSummaryItem/GuideSummaryItem';

import { GUIDES_SUMMARY } from '../../data/guides';
import { ROUTES } from '../../data/maps';

const GuideSummary: React.FC = () => {
  return (
    <ul>
      {GUIDES_SUMMARY.map((guideSummary) => {
        const route = ROUTES.find((route) => route.id === guideSummary.id);

        if (!route) {
          return (
            <div key={guideSummary.id}>
              <h1 className="text-center font-bold text-red-600">
                ERROR: Could not find route information for {guideSummary.title}{' '}
              </h1>
            </div>
          );
        }

        return (
          <GuideSummaryItem
            key={guideSummary.id}
            id={guideSummary.id}
            dotColor={route.strokeColor}
            title={guideSummary.title}
          >
            {guideSummary.description}
          </GuideSummaryItem>
        );
      })}
    </ul>
  );
};

export default GuideSummary;
