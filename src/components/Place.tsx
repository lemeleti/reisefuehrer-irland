import { ReactNode } from 'react';
import { Place as PlaceProps } from '../data/guides';
import Divider from './Divider';
import Carousel from './Carousel';
import CollapsableParagraph from './CollapsableParagraph';

const PlaceDetail: React.FC<{
  title: string;
  className?: string;
  children?: ReactNode;
}> = ({ title, className, children }) => {
  return (
    <div className={className}>
      <h3 className="text-lg font-bold">{title}</h3>
      {children}
    </div>
  );
};

const Place: React.FC<{ place: PlaceProps }> = ({ place }) => {
  return (
    <article id={place.id} className="text-center w-full">
      <h2 className="text-xl font-bold">{place.name}</h2>
      <p>{place.address}</p>

      {place.url && (
        <p>
          <a href={place.url} target="_blank">
            {place.urlText}
          </a>
        </p>
      )}

      <Divider />
      <div className="flex flex-col gap-10 items-center ">
        {place.buildYear && (
          <PlaceDetail title="Baujahr">{place.buildYear}</PlaceDetail>
        )}

        {place.estimatedTime && (
          <PlaceDetail title="Ungefähre Dauer des Besuchs">
            {place.estimatedTime}
          </PlaceDetail>
        )}

        {place.openingTimes && (
          <PlaceDetail title="Öffnungszeiten" className="flex flex-col gap-4">
            {place.openingTimes.map((item, index) => (
              <div key={`${place.id}-opening-${index}`}>
                {item.timeline && (
                  <p>
                    <strong>{item.timeline}</strong>
                  </p>
                )}
                <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
              </div>
            ))}
          </PlaceDetail>
        )}

        {place.type && (
          <PlaceDetail title="Beschreibung">{place.type}</PlaceDetail>
        )}

        {place.price && (
          <PlaceDetail title="Preis">
            <p style={{ whiteSpace: 'pre-line' }}>{place.price}</p>
          </PlaceDetail>
        )}

        {place.guideDetails && (
          <PlaceDetail title="Führung">
            <p style={{ whiteSpace: 'pre-line' }}>{place.guideDetails}</p>
          </PlaceDetail>
        )}

        {place.buildStyle && (
          <PlaceDetail title="Baustil">
            <p>{place.buildStyle}</p>
          </PlaceDetail>
        )}
      </div>

      {place.additionalInfo && (
        <>
          <Divider />
          <p>{place.additionalInfo}</p>
        </>
      )}

      <Carousel slides={place.images} className="my-4">
        <p className="text-left">
          Abbildung{place.images.length > 1 ? 'en' : ''}: {place.name}
        </p>
      </Carousel>

      <Divider />

      <CollapsableParagraph>{place.description}</CollapsableParagraph>

      <Divider large />
    </article>
  );
};

export default Place;
