import { IodFaqSection } from "@/lib/validators/section/faq";

export const faq: IodFaqSection = {
  image: "/images/piodicon.svg",
  alt: "piodicon",
  title: "Outsourcing IOD - pytania i odpowiedzi",
  faqs: [
    {
      question: "Ile kosztuje outsourcing IOD?",
      answer:
        "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
    },
    {
      question: "Co to jest funkcja IOD?",
      answer:
        "Inspektor Ochrony Danych (IOD, ang. DPO-Data Protection Officer) pomaga administratorowi lub podmiotowi przetwarzającemu dane we wszystkich kwestiach związanych z ochroną danych osobowych. Jego głównym zadaniem jest monitorowanie i kontrola zgodności działań firmy z prawem ochrony danych, udzielanie informacji i porad dotyczących przetwarzania danych oraz współpraca z organem nadzorczym ds. ochrony danych osobowych. Inspektora Ochrony Danych powołuje administrator.",
    },
    {
      question: "Czy powołanie IOD jest obowiązkowe?",
      answer:
        "Jeżeli firma nie ma takiego obowiązku prawnego, może i powinna rozważyć powołanie Inspektora Ochrony Danych, ponieważ zwiększa to bezpieczeństwo danych przetwarzanych w organizacji.",
    },
    {
      question: "Czy IOD to stanowisko kierownicze?",
      answer:
        "Zgodnie z art. 38 ust. 6 RODO, Inspektor Ochrony Danych może wykonywać inne zadania i obowiązki, jednak administrator lub podmiot przetwarzający powinni zapewnić, aby takie zadania i obowiązki nie powodowały konfliktu interesów. IOD nie może zajmować w organizacji stanowiska, na którym określa się sposoby i cele przetwarzania danych.",
    },
    {
      question: "Czy outsourcing jest legalny?",
      answer:
        "Outsourcing polega na powierzeniu wykonania usług niepowiązanych z podstawową działalnością przedsiębiorstwa podmiotowi zewnętrznemu. Jeśli w umowie zapewniono równorzędność stosunków pomiędzy przedsiębiorcą zlecającym a przedsiębiorcą przyjmującym zlecenie, jest to oczywiście forma całkowicie legalna, bez konsekwencji w razie kontroli PIP lub ZUS.",
    },
  ],
};
