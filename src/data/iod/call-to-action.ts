import { IodCallToActionSection } from "@/lib/validators/section/call-to-action";
import { url } from "@/lib/base";

export const callToAction: IodCallToActionSection = {
  image: "/images/uslugi-pasek.svg",
  alt: "uslugi-pasek",
  title: "Pełnienie funkcji IOD - najwyższe standardy pracy",
  subText:
    "Jesteśmy przekonani, że usługa przejęcia funkcji Inspektora Ochrony Danych, którą Ci proponujemy, to skuteczne narzędzie, aby zapewnić bezpieczeństwo Twojego biznesu.",
  cta: {
    ctaLabel: "Zapytaj o ofertę",
    ctaUrl: url("https://www.google.com/"),
  },
};
