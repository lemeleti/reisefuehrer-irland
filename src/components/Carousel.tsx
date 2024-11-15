import { ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import useCheckMobileScreen from '../hooks/useCheckMobileScreen';

const Carousel: React.FC<{
  slides: string[];
  path?: string;
  className?: string;
  children?: ReactNode;
}> = ({ slides, path, className, children }) => {
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
            <button onClick={prevSlide} className="bg-black p-2 px-4">
              &#10094;
            </button>
            <button onClick={nextSlide} className="bg-black p-2 px-4">
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
