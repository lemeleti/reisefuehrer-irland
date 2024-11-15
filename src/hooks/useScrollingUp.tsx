import { useEffect, useRef, useState } from 'react';

const on = (
  window: Window,
  type: 'scroll',
  listener: (this: Window, ev: Event) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  window.addEventListener(type, listener, options);
};

const off = (
  window: Window & typeof globalThis,
  type: 'scroll',
  listener: (this: Window, ev: Event) => void,
  options?: boolean | AddEventListenerOptions,
) => {
  window.removeEventListener(type, listener, options);
};

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
    on(window, 'scroll', handleScroll, { passive: true });

    return () => off(window, 'scroll', handleScroll, { passive: true });
  }, []);

  return scrollingUp;
};

export default useScrollingUp;
