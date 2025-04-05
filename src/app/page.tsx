import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodSection } from "@/components/sections/method-section";
import { ResultsSection } from "@/components/sections/results-section";
import { CitationSection } from "@/components/sections/citation-section";
import AdBanner from "@/components/AdBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AdBanner />
      <MethodSection />
      <AdBanner />
      <ResultsSection />
      <CitationSection />
      <Footer />
    </main>
  );
}
