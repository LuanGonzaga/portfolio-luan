import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";

export const metadata: Metadata = {
  title: "Digital Marketing",
};

export default function MarketingPage() {
  return <PillarPage slug="marketing" />;
}
