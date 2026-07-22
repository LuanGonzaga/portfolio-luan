"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import WhatsApp from "@/components/icons/WhatsApp";
import { useI18n } from "@/lib/i18n";
import { site, socials, ui } from "@/lib/data";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const { t } = useI18n();
  const innerRef = useRef<HTMLDivElement>(null);
  const rolesRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const colorRef = useRef<HTMLDivElement>(null);

  // estado do círculo de cor (posição suavizada + raio animado)
  const mask = useRef({ x: 0, y: 0, r: 0 });
  const maskXTo = useRef<gsap.QuickToFunc | null>(null);
  const maskYTo = useRef<gsap.QuickToFunc | null>(null);
  const insideRef = useRef(false);

  const applyMask = () => {
    const el = colorRef.current;
    if (!el) return;
    el.style.setProperty("--mx", `${mask.current.x}px`);
    el.style.setProperty("--my", `${mask.current.y}px`);
    el.style.setProperty("--r", `${mask.current.r}px`);
  };

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(photoRef.current, { opacity: 1, clearProps: "transform" });
      return;
    }
    // entrada da foto
    gsap.fromTo(
      photoRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.1, delay: 0.35, ease: "power3.out" },
    );

    // posição do círculo persegue o cursor com leve atraso
    maskXTo.current = gsap.quickTo(mask.current, "x", {
      duration: 0.25,
      ease: "power3.out",
      onUpdate: applyMask,
    });
    maskYTo.current = gsap.quickTo(mask.current, "y", {
      duration: 0.25,
      ease: "power3.out",
      onUpdate: applyMask,
    });

    // "troca de página": conforme o conteúdo cobre o hero,
    // ele escala pra trás, borra e apaga (efeito profundidade)
    gsap.to(innerRef.current, {
      scale: 0.92,
      autoAlpha: 0.35,
      filter: "blur(6px)",
      ease: "none",
      scrollTrigger: {
        trigger: "#page-content",
        start: "top bottom",
        end: "top top",
        scrub: true,
      },
    });
  });

  // rotação dos cargos: cada linha sobe, para, e dá lugar à próxima
  useGSAP(
    () => {
      const items = gsap.utils.toArray<HTMLElement>(".hero-role");
      if (items.length < 2) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(items, { yPercent: 0 });
        gsap.set(items.slice(1), { display: "none" });
        return;
      }

      gsap.set(items, { yPercent: 110 });
      const tl = gsap.timeline({ repeat: -1 });
      items.forEach((item) => {
        tl.fromTo(
          item,
          { yPercent: 110 },
          { yPercent: 0, duration: 0.6, ease: "power3.out" },
        )
          .to(item, { yPercent: 0, duration: 1.8 })
          .to(item, {
            yPercent: -110,
            duration: 0.6,
            ease: "power3.in",
          });
      });
    },
    { scope: rolesRef },
  );

  const onSectionMove = (e: React.MouseEvent) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = photoRef.current?.getBoundingClientRect();
    if (!bounds) return;

    maskXTo.current?.(e.clientX - bounds.left);
    maskYTo.current?.(e.clientY - bounds.top);

    const inside =
      e.clientX >= bounds.left &&
      e.clientX <= bounds.right &&
      e.clientY >= bounds.top &&
      e.clientY <= bounds.bottom;

    // anima o raio só na troca dentro/fora
    if (inside !== insideRef.current) {
      insideRef.current = inside;
      gsap.to(mask.current, {
        r: inside ? 140 : 0,
        duration: 0.45,
        ease: "power3.out",
        onUpdate: applyMask,
        overwrite: "auto",
      });
    }
  };

  return (
    <section
      onMouseMove={onSectionMove}
      className="sticky top-0 h-[calc(100svh-5.25rem)] overflow-hidden sm:h-[calc(100svh-5.5rem)]"
    >
      <div ref={innerRef} className="relative h-full px-6 sm:px-10">
        {/* nome centralizado, foto passa por cima */}
        <h1 className="pt-20 text-center font-(family-name:--font-display) text-[clamp(3rem,12vw,10rem)] font-extrabold leading-[0.95] tracking-tight sm:pt-28">
          <Reveal onScroll={false} delay={0.1}>
            <span className="text-outline">{site.firstName}</span>{" "}
            <span>{site.lastName}</span>
          </Reveal>
        </h1>

        {/* foto central: base monocromática + camada colorida em círculo */}
        <div
          ref={photoRef}
          className="pointer-events-none absolute bottom-0 left-1/2 h-[62svh] w-[150vw] -translate-x-1/2 opacity-0 sm:h-[84svh] sm:w-[min(94vw,720px)]"
        >
          <Image
            src="/images/luan.png"
            alt={`${site.firstName} ${site.lastName}`}
            fill
            priority
            sizes="(max-width: 640px) 88vw, 520px"
            className="object-contain object-bottom grayscale"
          />
          <div ref={colorRef} className="photo-color-mask absolute inset-0">
            <Image
              src="/images/luan.png"
              alt=""
              aria-hidden
              fill
              loading="eager"
              sizes="(max-width: 640px) 88vw, 520px"
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* bloco esquerdo: cargo rotativo + descrição + CTA */}
        <div className="absolute inset-x-4 bottom-6 z-10 rounded-2xl bg-card/80 p-5 backdrop-blur-md sm:inset-x-auto sm:bottom-14 sm:left-10 sm:max-w-xs sm:p-4">
          {/* leitor de tela recebe a lista completa; animação fica escondida */}
          <span className="sr-only">
            {site.roles.map((r) => t(r)).join(", ")}
          </span>
          <div
            ref={rolesRef}
            aria-hidden
            className="reveal-mask relative h-9 text-xl font-semibold sm:h-10 sm:min-w-[20ch] sm:text-2xl"
          >
            {site.roles.map((role) => (
              <div
                key={role.en}
                className="hero-role absolute inset-0 whitespace-nowrap"
              >
                {t(role)}
              </div>
            ))}
          </div>

          <Reveal onScroll={false} delay={0.5} className="mt-2">
            <p className="text-sm leading-relaxed text-muted">
              {t(ui.heroBlurb)}
            </p>
          </Reveal>

          <Reveal onScroll={false} delay={0.6} className="mt-5">
            <div className="flex flex-wrap items-center gap-3">
              <Magnetic>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-block rounded-full bg-ink px-6 py-3 text-sm text-white"
                >
                  {t(ui.letsCollaborate)} ↗
                </a>
              </Magnetic>

              {/* socials compactos — só no mobile (desktop usa a coluna direita) */}
              <div className="flex gap-2 sm:hidden">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-white px-3 py-2 text-xs font-medium text-ink-soft"
                  >
                    {s.icon === "whatsapp" && <WhatsApp className="h-3.5 w-3.5" />}
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* socials empilhados à direita */}
        <div className="absolute bottom-14 right-10 z-10 hidden flex-col items-end gap-3 sm:flex">
          {socials.map((s, i) => (
            <Reveal key={s.label} onScroll={false} delay={0.6 + i * 0.08}>
              <Magnetic strength={0.25}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium text-ink-soft shadow-sm transition-colors hover:text-ink"
                >
                  {s.icon === "whatsapp" && <WhatsApp className="h-3.5 w-3.5" />}
                  {s.label} ↗
                </a>
              </Magnetic>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
