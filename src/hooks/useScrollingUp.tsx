import { useEffect, useRef, useState } from 'react';

const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const prevScrollRef = useRef<number>(0);

  const handleScroll = () => {
    const currScroll = window.scrollY;
    const isScrolled = prevScrollRef.current > currScroll;
    setScrollingUp(isScrolled);
    prevScrollRef.current = currScroll;
  };

  useEffect(() => {
    const options: boolean | AddEventListenerOptions = { passive: true }
    const type = 'scroll'
    const listener = handleScroll

    window.addEventListener(type, listener, options);
    return () => window.addEventListener(type, listener, options);
  }, []);

  return scrollingUp;
};

export default useScrollingUp;
