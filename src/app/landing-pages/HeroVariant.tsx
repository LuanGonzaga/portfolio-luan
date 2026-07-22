"use client";

import { useEffect, useState } from "react";

export default function HeroVariant() {
  const [secondTitle, setSecondTitle] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setSecondTitle((current) => !current), 5500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <h1 className="max-w-2xl font-(family-name:--font-display) text-[clamp(2.55rem,6vw,4.7rem)] font-bold leading-[1.02] tracking-[-0.055em]">
      {secondTitle ? (
        <>Transforme visitas em <span className="text-[#0b7769]">pedidos de orçamento.</span></>
      ) : (
        <>Seu negócio já é bom. Sua página precisa deixar isso <span className="text-[#0b7769]">óbvio.</span></>
      )}
    </h1>
  );
}
