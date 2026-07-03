import type { Metadata } from "next";
import PillarPage from "@/components/PillarPage";

export const metadata: Metadata = {
  title: "Web Development",
};

export default function DevPage() {
  return <PillarPage slug="dev" />;
}
