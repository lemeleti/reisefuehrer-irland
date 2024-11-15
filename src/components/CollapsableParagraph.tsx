import { ReactNode, useLayoutEffect, useRef, useState } from 'react';

const CollapsableParagraph: React.FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [initialClientHeight, setInitialClientHeight] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  const toggleDescription = () => setIsOpen((prev) => !prev);

  useLayoutEffect(() => {
    const compute = (resized: boolean) => {
      if (ref.current) {
        if (!isOpen) {
          if (ref.current.clientHeight < ref.current.scrollHeight) {
            setInitialClientHeight(ref.current.clientHeight);
          }
          setShowButton(ref.current.clientHeight < ref.current.scrollHeight);
        } else {
          if (resized) {
            setShowButton(initialClientHeight !== ref.current.clientHeight);
          }
        }
      }
    };

    compute(false);

    const observer = new ResizeObserver(() => compute(true));

    if (ref.current) {
      observer.observe(ref.current);
    }

    const observedRefItem = ref.current;

    return () => {
      if (observedRefItem) {
        observer.unobserve(observedRefItem);
      }
    };
  }, [ref, isOpen, initialClientHeight]);

  return (
    <div className={className}>
      <p
        ref={ref}
        className={`text-justify ${isOpen ? 'line-clamp-none' : 'line-clamp-3'}`}
      >
        {children}
      </p>
      {showButton && (
        <button
          onClick={toggleDescription}
          className="mt-4 py-2 px-3 rounded-full bg-[#444] text-white"
        >
          {isOpen ? 'Weniger anzeigen' : 'Mehr anzeigen'}
        </button>
      )}
    </div>
  );
};

export default CollapsableParagraph;
