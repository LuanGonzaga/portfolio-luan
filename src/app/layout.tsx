import type { Metadata } from "next";
import { Geist, Archivo } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { LocaleProvider } from "@/lib/i18n";
import { site } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luangonzaga.dev"),
  title: {
    default: `${site.firstName} ${site.lastName} — Web · OffSec · Marketing`,
    template: `%s — ${site.firstName} ${site.lastName}`,
  },
  description:
    "I build web products, break them to make them safer, and market them to grow. Web development, offensive security and digital marketing.",
  keywords: [
    "web development",
    "offensive security",
    "pentest",
    "digital marketing",
    "Next.js",
    "portfolio",
  ],
  openGraph: {
    title: `${site.firstName} ${site.lastName} — Web · OffSec · Marketing`,
    description:
      "Three crafts, one person: build it, secure it, grow it.",
    type: "website",
    locale: "en_US",
    images: ["/images/luan.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.firstName} ${site.lastName} — Web · OffSec · Marketing`,
    description: "Three crafts, one person: build it, secure it, grow it.",
    images: ["/images/luan.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="clouds min-h-full flex flex-col">
        <LocaleProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LocaleProvider>
      </body>
    </html>
  );
}
