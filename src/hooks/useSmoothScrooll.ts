// hooks/useSmoothScroll.ts
import { useEffect, useRef } from "react";
import Lenis from "lenis";

export const useSmoothScroll = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Solo inicializar en el cliente
    if (typeof window !== "undefined") {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        if (lenisRef.current) {
          lenisRef.current.destroy();
          lenisRef.current = null;
        }
      };
    }
  }, []);
};
