import HeroSection from "@/components/HeroSection";
import IodQuoteSection from "@/components/IodQuoteSection";
import IodOutSourcingSection from "@/components/IodOutSourcingSection";
import IodScopeSection from "@/components/IodScopeSection";
import IodOdo24ServiceSection from "@/components/IodOdo24ServiceSection";
import IodDataProtectionSection from "@/components/IodDataProtectionSection";
import IodPricingServiceSection from "@/components/IodPricingServiceSection";
import IodDeliverablesSection from "@/components/IodDeliverablesSection";
import IodDutiesSection from "@/components/IodDutiesSection";
import IodTestimonialsSection from "@/components/IodTestimonialsSection";
import LogoSlider from "@/components/Logo-Slider";
import IodCallToActionSection from "@/components/IodCallToActionSection";
import IodFaqSection from "@/components/IodFaqSection";
import IodGreatValue from "@/components/IodGreatestValueSection";
import IodTeamContactsSection from "@/components/IodTeamContactsSection";

export default function OutSourcing() {
  return (
    <main className="text-gray-500">
      <HeroSection />
      <IodQuoteSection />
      <IodOutSourcingSection />
      <IodScopeSection />
      <IodOdo24ServiceSection />
      <IodDataProtectionSection />
      <IodPricingServiceSection />
      <IodDeliverablesSection />
      <IodDutiesSection />
      <IodTestimonialsSection />
      <LogoSlider />
      <IodCallToActionSection />
      <IodFaqSection />
      <IodGreatValue />
      <IodTeamContactsSection />
    </main>
  );
}
