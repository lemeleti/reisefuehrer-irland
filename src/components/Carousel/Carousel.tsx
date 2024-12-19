import { useState } from 'react';

// Hooks
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

// Util
import { twMerge } from 'tailwind-merge';

// Types
import { CarouselProps } from './types';

const Carousel: React.FC<CarouselProps> = ({
  slides,
  path,
  className,
  children,
}) => {
  const [current, setCurrent] = useState<number>(0);
  const { isMobile } = useCheckMobileScreen();

  const prevSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent((prev) => prev - 1);
    }
  };

  const nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  return (
    <>
      <div
        className={twMerge(
          `overflow-hidden relative w-full max-w-[85vw] mx-auto`,
          className,
        )}
        style={{ height: 'auto' }}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => {
            const src = path
              ? `${path}/${isMobile ? 'thumbnails' : 'fullsize'}/${slide}`
              : slide;
            return (
              <img
                key={src}
                src={src}
                className="flex-shrink-0 w-full h-auto object-cover"
              />
            );
          })}
        </div>

        {slides.length > 1 && (
          <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between items-center text-white text-xl">
            <button
              onClick={prevSlide}
              className="bg-black hover:bg-gray-400 p-2 px-4 border border-white rounded-r-md"
            >
              &#10094;
            </button>
            <button
              onClick={nextSlide}
              className="bg-black hover:bg-gray-400 p-2 px-4 border border-white rounded-l-md"
            >
              &#10095;
            </button>
          </div>
        )}

        {slides.length > 1 && (
          <div className="absolute bottom-2 py-2 flex justify-center gap-3 w-full">
            {slides.map((_, i) => (
              <div
                onClick={() => setCurrent(i)}
                key={i}
                className={`cursor-pointer rounded-full w-3 h-3 ${
                  i === current ? 'bg-white' : 'bg-gray-400'
                }`}
              ></div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-2">{children}</div>
    </>
  );
};

export default Carousel;
