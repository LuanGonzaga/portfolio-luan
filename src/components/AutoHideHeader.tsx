"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Esconde o header ao scrollar pra baixo, mostra ao subir.
 * Sempre visível perto do topo.
 */
export default function AutoHideHeader({ children }: { children: ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      setHidden(goingDown && y > 160);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {children}
    </div>
  );
}
