"use client";

import { useEffect, type ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    // respeita quem pede menos movimento: scroll nativo, sem inércia
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.location.pathname.startsWith("/landing-pages")) return;

    let cleanup: (() => void) | undefined;
    let cancelled = false;

    void Promise.all([import("lenis"), import("gsap"), import("gsap/ScrollTrigger")]).then(([lenisModule, gsapModule, scrollTriggerModule]) => {
      if (cancelled) return;
      const Lenis = lenisModule.default;
      const gsap = gsapModule.default;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({ lerp: 0.12 });
      lenis.on("scroll", ScrollTrigger.update);

      // gsap.ticker passa time em segundos; lenis.raf espera milissegundos
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      cleanup = () => { gsap.ticker.remove(raf); lenis.destroy(); };
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <>{children}</>;
}
