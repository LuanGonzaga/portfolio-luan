const items = ["WEB DEVELOPMENT", "OFFENSIVE SECURITY", "DIGITAL MARKETING"];

/** Faixa infinita de texto — separador visual entre hero e conteúdo. */
export default function Marquee() {
  const strip = items.map((t) => `${t} · `).join("");

  return (
    <div
      aria-hidden
      className="marquee overflow-hidden border-y border-line py-4"
    >
      <div className="marquee-track flex w-max whitespace-nowrap font-(family-name:--font-display) text-2xl font-bold tracking-tight text-ink-soft sm:text-4xl">
        <span className="pr-2">{strip}</span>
        <span className="pr-2">{strip}</span>
      </div>
    </div>
  );
}
