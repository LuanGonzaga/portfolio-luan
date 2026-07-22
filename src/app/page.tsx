import PageTransition from "@/components/PageTransition";
import AutoHideHeader from "@/components/AutoHideHeader";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import ContactCTA from "@/components/ContactCTA";
import { site } from "@/lib/data";

export default function Home() {
  return (
    <PageTransition>
      <main className="mx-3 my-3 rounded-2xl bg-card shadow-2xl sm:mx-6">
        <AutoHideHeader>
          <Nav />
        </AutoHideHeader>
        <Hero />
        {/* sobe por cima do hero fixo: efeito "troca de página" no scroll */}
        <div
          id="page-content"
          className="relative z-10 rounded-t-2xl bg-card shadow-[0_-24px_80px_rgba(0,0,0,0.18)]"
        >
          <Marquee />
          <Pillars />
          <Skills />
          <Experience />
          <ContactCTA />
          <footer className="flex items-center justify-between px-6 py-8 text-xs text-muted sm:px-10">
            <span>
              © {new Date().getFullYear()} {site.firstName}
            </span>
            <span>Web · OffSec · Marketing</span>
          </footer>
        </div>
      </main>
    </PageTransition>
  );
}
