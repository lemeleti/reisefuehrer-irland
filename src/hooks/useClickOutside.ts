import { useEffect, useRef } from 'react';

/**
 * This Hook can be used for detecting clicks outside the Opened Menu
 */
const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [callback]);

  return ref;
};

export default useClickOutside;
