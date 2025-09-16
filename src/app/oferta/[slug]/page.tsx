import HeroSection from "@/components/HeroSection";
import IodQuoteSection from "@/components/QuoteSection";
import IodOutSourcingSection from "@/components/IodOutSourcingSection";
import IodScopeSection from "@/components/IodScopeSection";

export default function OutSourcing() {
  return (
    <section className="text-gray-600">
      <HeroSection />
      <IodQuoteSection />
      <IodOutSourcingSection />
      <IodScopeSection />
    </section>
  );
}
