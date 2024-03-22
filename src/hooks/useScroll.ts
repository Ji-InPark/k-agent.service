import { useEffect, useState } from 'react';

export const useScroll = (maxScroll: number) => {
  const [scrollY, setScrollY] = useState(0);

  const handler = () => setScrollY(Math.min(window.scrollY, maxScroll));

  useEffect(() => {
    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return scrollY;
};
