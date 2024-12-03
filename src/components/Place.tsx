import { ReactNode } from 'react';
import { Place as PlaceProps } from '../data/sharedPlaces';
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
      <h3 className="text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
};

const Place: React.FC<{ place: PlaceProps }> = ({ place }) => {
  return (
    <article
      id={place.id}
      className="text-center w-full scroll-m-6 md:scroll-m-20"
    >
      <h2 className="text-2xl font-bold">{place.name}</h2>
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

        {place.closingTimes && (
          <PlaceDetail title="Schliessungszeiten" className="flex flex-col gap-4">
            <div className='grid grid-cols-4 gap-4'>
              {place.closingTimes.map((item, index) => (
                <div key={`${place.id}-opening-${index}`}>
                    <p>
                      <strong>{item.timeline}</strong>
                    </p>
                  <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
                </div>
              ))}
            </div>
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

      {(place.buildStyle ||
        place.buildYear ||
        place.estimatedTime ||
        place.guideDetails ||
        place.openingTimes ||
        place.type ||
        place.price ||
        place.guideDetails) && <Divider />}

      {place.additionalInfo && (
        <CollapsableParagraph clamp="line-clamp-2">
          {place.additionalInfo}
        </CollapsableParagraph>
      )}

      <Carousel slides={place.images} path={`${import.meta.env.BASE_URL}${place.imagesPath}`} className="my-4">
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
