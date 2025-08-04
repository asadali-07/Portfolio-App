"use client";
import { ReactLenis } from 'lenis/react';
import { useRef, useEffect } from 'react';
import { cancelFrame, frame } from 'framer-motion';

const LenisWrapper = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }

    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis 
      root 
      ref={lenisRef}
      options={{ 
        autoRaf: false,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default LenisWrapper;