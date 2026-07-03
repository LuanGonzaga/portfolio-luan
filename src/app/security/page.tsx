import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";

export const metadata: Metadata = {
  title: "Offensive Security",
};

export default function SecurityPage() {
  return <PillarPage slug="security" />;
}
