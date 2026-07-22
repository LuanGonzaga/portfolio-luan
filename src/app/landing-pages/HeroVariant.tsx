"use client";

import { useEffect, useState } from "react";

export default function HeroVariant() {
  const [secondTitle, setSecondTitle] = useState(false);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let swapTimeout: number | undefined;
    const interval = window.setInterval(() => {
      setChanging(true);
      swapTimeout = window.setTimeout(() => {
        setSecondTitle((current) => !current);
        setChanging(false);
      }, 320);
    }, 5500);
    return () => {
      window.clearInterval(interval);
      if (swapTimeout) window.clearTimeout(swapTimeout);
    };
  }, []);

  return (
    <h1 className={`lp-hero-title min-h-[3.15em] max-w-2xl font-(family-name:--font-display) text-[clamp(2.55rem,6vw,4.7rem)] font-bold leading-[1.02] tracking-[-0.055em] lg:min-h-[4.1em] ${changing ? "lp-title-changing" : ""}`}>
      <span key={secondTitle ? "second" : "first"} className="block">{secondTitle ? (
        <>Transforme visitas em <span className="text-[#0b7769]">pedidos de orçamento.</span></>
      ) : (
        <>Seu negócio já é bom. Sua página precisa deixar isso <span className="text-[#0b7769]">óbvio.</span></>
      )}</span>
    </h1>
  );
}
