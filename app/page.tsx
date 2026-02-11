import { HeroSection } from "@/components/hero-section";
import { AgencySection } from "@/components/agency-section";
import { DestinationsGallery } from "@/components/destinations-gallery";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AgencySection />
      <DestinationsGallery />
    </main>
  );
}
