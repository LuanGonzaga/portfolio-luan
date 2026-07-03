"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  /** atraso em segundos */
  delay?: number;
  className?: string;
  /** anima ao entrar na viewport (default) ou imediatamente no mount */
  onScroll?: boolean;
};

/**
 * Reveal por máscara: o wrapper corta (overflow) e o conteúdo sobe.
 * Mesmo efeito dos títulos da referência.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  onScroll = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const inner = ref.current?.firstElementChild;
      if (!inner) return;

      gsap.fromTo(
        inner,
        { yPercent: 115 },
        {
          yPercent: 0,
          duration: 0.9,
          delay,
          ease: "power4.out",
          ...(onScroll
            ? {
                scrollTrigger: {
                  trigger: ref.current,
                  start: "top 88%",
                  once: true,
                },
              }
            : {}),
        },
      );
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`reveal-mask ${className}`}>
      <div>{children}</div>
    </div>
  );
}
