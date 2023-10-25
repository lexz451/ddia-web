import { useState, useEffect } from 'react';

export default function useScroll() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>();
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  
    useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.scrollY);
      }
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (scrollPosition == prevScrollPosition) return;
      if (scrollPosition > prevScrollPosition) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
  
      setPrevScrollPosition(scrollPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scrollPosition]);
  
    return { scrollPosition, scrollDirection };
  }