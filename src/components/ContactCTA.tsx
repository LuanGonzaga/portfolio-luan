import Reveal from "@/components/Reveal";
import Magnetic from "@/components/Magnetic";
import { site } from "@/lib/data";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center px-6 py-32 text-center sm:px-10"
    >
      <Reveal>
        <span className="flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-medium shadow-sm">
          <span className="h-2 w-2 rounded-full bg-accent" />
          {site.availability}
        </span>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <h2 className="font-(family-name:--font-display) text-4xl font-extrabold tracking-tight sm:text-7xl">
          HAVE A PROJECT IN MIND?
        </h2>
      </Reveal>

      <Reveal delay={0.2} className="mt-6">
        <p className="max-w-lg text-sm leading-relaxed text-muted sm:text-base">
          Build it, secure it, grow it — or all three. Let&apos;s talk about
          what you need.
        </p>
      </Reveal>

      <Reveal delay={0.3} className="mt-10">
        <Magnetic>
          <a
            href={`mailto:${site.email}`}
            className="inline-block rounded-full bg-ink px-8 py-4 text-sm text-white"
          >
            Contact Me ↗
          </a>
        </Magnetic>
      </Reveal>
    </section>
  );
}
