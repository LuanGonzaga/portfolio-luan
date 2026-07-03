"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/**
 * Botão magnético: dentro do raio, o elemento é atraído pelo cursor;
 * ao sair, volta com mola elástica.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      xTo.current = gsap.quickTo(ref.current, "x", {
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
      yTo.current = gsap.quickTo(ref.current, "y", {
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    },
    { scope: ref },
  );

  const onMove = (e: React.MouseEvent) => {
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return;
    xTo.current?.((e.clientX - (bounds.left + bounds.width / 2)) * strength);
    yTo.current?.((e.clientY - (bounds.top + bounds.height / 2)) * strength);
  };

  const onLeave = () => {
    xTo.current?.(0);
    yTo.current?.(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}
