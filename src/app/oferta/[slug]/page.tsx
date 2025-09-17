import HeroSection from "@/components/HeroSection";
import IodQuoteSection from "@/components/IodQuoteSection";
import IodOutSourcingSection from "@/components/IodOutSourcingSection";
import IodScopeSection from "@/components/IodScopeSection";
import IodOdo24ServiceSection from "@/components/IodOdo24ServiceSection";
import IodDataProtectionSection from "@/components/IodDataProtectionSection";

export default function OutSourcing() {
  return (
    <main className="text-gray-500">
      <HeroSection />
      <IodQuoteSection />
      <IodOutSourcingSection />
      <IodScopeSection />
      <IodOdo24ServiceSection />
      <IodDataProtectionSection />
    </main>
  );
}
