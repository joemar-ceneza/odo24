export interface HeroSection {
  heading: string;
  description: string;
  ctaLabel: string;
  link: string;
}

export interface IodOutSourcingSection {
  heading: string;
  leftColumn: string[];
  rightColumn: string[];
  footerText: string;
  ctaLabel: string;
  link: string;
}

export interface IodScopeSection {
  image: string;
  alt: string;
  heading: string;
  description: string;
  bullets: string[];
}

export interface IodOdo24ServiceSection {
  heading: string;
  leftColumn: string[];
  rightColumn: string[];
  ctaLabel: string;
  link: string;
}

export interface IodDataProtectionSection {
  heading: string;
  description: string;
  items: string[];
  image: string;
  alt: string;
}

export interface IodPricingServiceSection {
  image: string;
  alt: string;
  heading: string;
  description: string;
  subheading: string;
  costComponentsHeading: string;
  costComponents: string[];
  footNote: string;
  source: { label: string; url: string };
  lastUpdate: string;
  footer: string;
  ctaLabel: string;
  link: string;
}

export interface IodDeliverablesSection {
  image: string;
  alt: string;
  heading: string;
  bullets: string[];
}

export interface IodDutiesSection {
  image: string;
  alt: string;
  header: string;
  subtitle: string;
  items: string[];
}

export interface IodTestimonialsSection {
  name: string;
  company: string;
  companyUrl: string;
  avatar: string;
  subtitle: string;
  quote: string;
  servicesLabel: string;
  services: {
    label: string;
    url: string;
  }[];
}

export interface LogoSlider {
  src: string;
  alt: string;
}

export interface IodCallToActionSection {
  image: string;
  alt: string;
  heading: string;
  description: string;
  ctaLabel: string;
  link: string;
}

export interface IodFaqHeaderSection {
  icon: string;
  alt: string;
  header: string;
}

export interface IodFaq {
  question: string;
  answer: string;
  id?: string;
}

export interface IodGreatestValueSection {
  heading: string;
  image1: string;
  alt1: string;
  image2: string;
  alt2: string;
}

export interface IodTeamContactsSection {
  heading: string;
  description: string;
  contacts: {
    image: string;
    alt: string;
    name: string;
    phone: string;
    email: string;
  }[];
  formHeader: string;
  formImage: string;
  formAlt: string;
  formctaLabel: string;
  formDescription: string;
  formLink: string;
}

export const iodHero: HeroSection = {
  heading: "Outsourcing IOD – Outsourcing funkcji Inspektora Ochrony Danych",
  description:
    "Skorzystaj ze sprawdzonego sposobu, dzięki któremu zoptymalizujesz procesy i koszty nadzoru nad ochroną danych osobowych. Wybierz outsourcing funkcji IOD.",
  ctaLabel: "Zapytaj o ofertę",
  link: "https://www.google.com/",
};

export const iodQuote: string =
  "„Skuteczny nadzór nad ochroną danych osobowych jest możliwy tylko wtedy, gdy zostanie wyznaczona osoba lub osoby odpowiedzialne za obszar RODO”.";

export const iodOutSourcing: IodOutSourcingSection = {
  heading: "Kiedy warto pomyśleć o outsourcingu IOD",
  leftColumn: [
    "Nie masz zasobów do tego, aby systematycznie prowadzić dokumentację i coroczne audyty zgodności z przepisami o ochronie danych osobowych.",
    "W Twojej firmie zdarzają się naruszenia i masz wątpliwości, co zgłosić do UODO, a czego nie zgłaszać.",
    "Potrzebujesz stałego doradztwa w zakresie bezpieczeństwa sieci i systemów informatycznych.",
    "To, aby utrzymać aktualną wiedzę pracowników z zakresu ochrony danych osobowych jest wyzwaniem dla Twojej firmy.",
    "Angażujesz się w projekty, które wymagają tego, aby uwzględniać ochronę danych osobowych – na etapie projektowania systemów i aplikacji.",
  ],
  rightColumn: [
    "Obawiasz się, że umowy, klauzule i regulaminy mają luki, przez co mogą być niezgodne z przepisami.",
    "Szukasz wsparcia w prowadzeniu rejestru czynności przetwarzania.",
    "Potrzebujesz punktu kontaktowego dla Prezesa Urzędu Ochrony Danych Osobowych.",
    "Osoby, których dane przetwarzacie w Twojej firmie, zadają Wam coraz więcej pytań.",
    "Podejrzewasz, że Twój system nadzoru nad ochroną danych osobowych nie jest wystarczający.",
  ],
  footerText: "Jeżeli borykasz się z takimi problemami, to warto porozmawiać z naszym doradcą.",
  ctaLabel: "Skontaktuj się z doradcą",
  link: "https://www.google.com/",
};

export const iodScope: IodScopeSection = {
  image: "/images/man-with-documents.png",
  alt: "Zespół IOD",
  heading: "Jaki jest zakres usługi outsourcing funkcji Inspektora Ochrony Danych",
  description:
    "Outsourcing funkcji Inspektora Ochrony Danych oznacza dla Ciebie stały kontakt z doświadczonymi konsultantami z obszarów prawa, bezpieczeństwa sieci i systemów IT, zarządzania ryzykiem i bezpieczeństwa fizycznego. Usługa ta to również:",
  bullets: [
    "Dostęp do narzędzi informatycznych, które pozwalają wykazać zgodność z RODO. Będziesz móc korzystać także z platformy e-learningowej.",
    "Realizacja lub wsparcie w realizacji wielu obowiązków, które spoczywają bezpośrednio na organizacji.",
    "Szybka reakcja na Twoje bieżące potrzeby.",
  ],
};

export const iodOdo24Service: IodOdo24ServiceSection = {
  heading: "Usługa IOD – jak ODO 24 rozwiązuje Twoje problemy",
  leftColumn: [
    "W ODO 24 trzymamy rękę na pulsie – jesteśmy na bieżąco z najnowszymi zmianami w prawie.",
    "Praktycznie i skutecznie szkolimy Twój personel.",
    "Pomagamy dostosować nowe projekty do wymagań RODO.",
  ],
  rightColumn: [
    "Zarządzamy naruszeniami ochrony danych i pomagamy ich uniknąć w przyszłości.",
    "Bierzemy na siebie pełnienie funkcji punktu kontaktowego dla Prezesa Urzędu Ochrony Danych Osobowych.",
    "Mierzymy skuteczność środków bezpieczeństwa.",
  ],
  ctaLabel: "Zapytaj o ofertę",
  link: "https://www.google.com/",
};

export const iodDataProtection: IodDataProtectionSection = {
  heading: "Komu jest potrzebny outsourcing funkcji Inspektora Ochrony Danych",
  description:
    "Na usługę outsourcingu funkcji Inspektora Ochrony Danych, najczęściej decydują się zarządy firm, które chcą:",
  items: [
    "mieć pełną kontrolę nad procesami,",
    "zminimalizować ryzyko biznesowe,",
    "zredukować wysokie koszty stałe,",
    "szybkiej reakcji ekspertów na biznesowe potrzeby.",
  ],
  image: "/images/man-giving-gdrp-circle.png",
  alt: "man-giving-gdrp-circle",
};

export const iodPricingService: IodPricingServiceSection = {
  image: "/images/outsourcing-rodo-iod-cena.svg",
  alt: "outsourcing-rodo-iod-cena",
  heading: "Jaka jest cena usługi outsourcingu IOD",
  description:
    "Usługę outsourcingu przygotowujemy tak, aby ograniczyć koszty, a jednocześnie zapewnić Ci niezmiennie jakościowe wsparcie najlepszych ekspertów od ochrony danych. Cena outsourcingu RODO zależy od zakresu usługi. Dopasowujemy go do rzeczywistych i aktualnych potrzeb Twojej firmy.",
  subheading:
    "Poniżej znajdziesz przykładowe porównanie kosztów etatu specjalisty ds. RODO z kosztem outsourcingu Inspektora Ochrony Danych",
  costComponentsHeading: "Składniki kosztów:",
  costComponents: [
    "Wynagrodzenie netto",
    "ZUS",
    "Ubezpieczenie zdrowotne",
    "Podatek",
    "Budżet szkoleniowy",
    "Koszty L4",
    "FF/FGŚP",
    "Sprzęt/Oprogramowanie",
    "Benefity",
    "Wynajem biura",
    "Kadry i płace",
  ],
  footNote: "Źródło informacji o wynagrodzeniu na stanowisku inspektora danych osobowych:",
  source: {
    label: " wynagrodzenia.pl",
    url: "https://wynagrodzenia.pl/moja-placa/ile-zarabia-inspektor-ochrony-danych-osobowych",
  },
  lastUpdate: "Ostatnia aktualizacja: styczeń 2025",
  footer: "Jeżeli chcesz skalkulować koszt miesięczny usługi, to warto porozmawiać z naszym doradcą.",
  ctaLabel: "Skontaktuj się",
  link: "https://www.google.com/",
};

export const iodDeliverables: IodDeliverablesSection = {
  image: "/images/man-juggling-currency.png",
  alt: "man-juggling-currency",
  heading: "Co otrzymujesz w ramach Outsourcingu IOD?",
  bullets: [
    "Wsparcie w prowadzeniu rejestru czynności przetwarzania.",
    "Pełnienie funkcji punktu kontaktowego dla Prezesa Urzędu Ochrony Danych Osobowych.",
    "Przygotowywanie odpowiedzi dla osób, których dane dotyczą.",
    "Ocena skutków przetwarzania danych dla ochrony danych.",
    "Weryfikacja umów, klauzul, regulaminów lub innych dokumentów w zakresie zgodności z przepisami o ochronie danych osobowych.",
  ],
};

export const iodDuties: IodDutiesSection = {
  image: "/images/chase-rodo.png",
  alt: "chase-rodo",
  header: "Od czego zaczynamy wdrożenie obowiązków IOD",
  subtitle: "3 kroki do przekazania funkcji Inspektora Ochrony Danych",
  items: [
    "Dokładnie określimy sytuację wyjściową – przeprowadzimy audyt",
    "Ocenimy skutki dla ochrony danych i ryzyko",
    "Opracujemy lub zaktualizujemy najważniejsze polityki ochrony oraz procedury przetwarzania danych osobowych",
  ],
};

export const iodTestimonialsHeader: string = "Poznaj opinie klientów – outsourcing";

export const iodTestimonials: IodTestimonialsSection[] = [
  {
    name: "Agnieszka Karłowicz",
    company: "Spiżarnia",
    companyUrl: "https://www.google.com/",
    avatar: "/images/foto-spizarnia.jpg",
    subtitle: `"Praktyczne podejście, stała dostępność doradcza, fajne relacje"`,
    quote:
      "Z ODO24 współpracujemy od ponad roku. To dla nas rok spokojnego oddechu i poczucia bezpieczeństwa: przynajmniej w kwestii ochrony danych osobowych :-) Ludzie z ODO to profesjonaliści mówiący zrozumiałym językiem o niezrozumiałych dla zwykłego śmiertelnika sprawach. Rozumieją nie tylko swoją profesją, ale co dla nas bardzo ważne, biznes i jego wymagania. Praktyczne podejście, stała dostępność doradcza, fajne relacje - wszystko to sprawia, że mogę polecić tę Firmę wszystkim, którzy chcą pracować i spać spokojnie.",
    servicesLabel: "Zakres usług:",
    services: [
      { label: "Outsourcing IOD", url: "/uslugi/outsourcing-iod" },
      { label: "Wdrożenie RODO", url: "/uslugi/wdrozenie-rodo" },
    ],
  },
  {
    name: "Tomasz Siwicki",
    company: "Gefco",
    companyUrl: "https://www.google.com/",
    avatar: "/images/foto-gefco.jpg",
    subtitle: `"Polecam Państwu firmę ODO 24, jako profesjonalnego partnera"`,
    quote:
      "Od kilku lat w zakresie ochrony danych osobowych współpracujemy z firmą ODO 24. Profesjonalny zespół, który sprawnie pomógł nam również dostosować się do wymagań ,,RODO’’. Korzystamy nie tylko z wiedzy ekspertów, ale też z profesjonalnie przygotowanych e-szkoleń, dzięki temu udało nam się przeszkolić w bardzo krótkim czasie kilkuset pracowników. Zdecydowanie polecam Państwu firmę ODO 24, jako profesjonalnego partnera, dostarczającego usługi na najwyższym poziomie.",
    servicesLabel: "Zakres usług:",
    services: [
      { label: "Outsourcing IOD", url: "/uslugi/outsourcing-iod" },
      { label: "Wdrożenie RODO", url: "/uslugi/wdrozenie-rodo" },
    ],
  },
  {
    name: "Wojciech Kmiecik",
    company: "Szlachetna Paczka",
    companyUrl: "https://www.google.com/",
    avatar: "/images/foto_szlachetnapaczka.jpg",
    subtitle: `"ODO 24 sp. z o.o. to eksperci od ochrony danych osobowych i godny naśladowania przykład"`,
    quote:
      "ODO 24 sp. z o.o. to eksperci od ochrony danych osobowych i godny naśladowania przykład zaangażowania społecznego biznesu. Firma jest Partnerem merytorycznym Stowarzyszenia WIOSNA, wspierając nas swoją wiedzą w formie szkoleń, doradztwa i innych usług specjalistycznych. Spółka przeprowadziła również audyt w Stowarzyszeniu oraz zajęła się przygotowaniem wymaganej dokumentacji. Profesjonalizm, a w szczególności kompetencje ekspertów ODO 24 pozwalają nam na zdobycie praktycznej wiedzy, która sprawia, że czujemy się spokojni o bezpieczeństwo danych.",
    servicesLabel: "Zakres usług:",
    services: [
      { label: "Outsourcing IOD", url: "/uslugi/outsourcing-iod" },
      { label: "Wdrożenie RODO", url: "/uslugi/wdrozenie-rodo" },
    ],
  },
  {
    name: "Wiesław Chojnacki",
    company: "Dressler sp. z o.o.",
    companyUrl: "https://www.google.com/",
    avatar: "/images/wie-cho-dress.jpg",
    subtitle: `"Z przyjemnością rekomenduję ODO 24, jako rzetelnego partnera i polecam innym"`,
    quote:
      "W dotychczasowej współpracy ODO 24 wykazała się otwartością, pełnym profesjonalizmem oraz elastycznością w podejściu do realizacji powierzonych zadań. Warto zwrócić uwagę na łatwość nawiązania kontaktu, fachowe doradztwo oraz szybkość reakcji pracowników ODO 24 Mamy nadzieję, że nasza współpraca będzie owocowała nadal sympatycznym i miłym kontaktem oraz utrzymaniem wysokiej jakości świadczonych usług. Doceniając postawę ODO 24 z przyjemnością rekomenduję ją, jako rzetelnego partnera i mogę polecić innym.",
    servicesLabel: "Zakres usług:",
    services: [
      { label: "Outsourcing IOD", url: "/uslugi/outsourcing-iod" },
      { label: "Wdrożenie RODO", url: "/uslugi/wdrozenie-rodo" },
    ],
  },
];

export const logoSlider: LogoSlider[] = [
  {
    src: "/images/logo-slider/1.png",
    alt: "1",
  },
  {
    src: "/images/logo-slider/2.png",
    alt: "2",
  },
  {
    src: "/images/logo-slider/3.png",
    alt: "3",
  },
  {
    src: "/images/logo-slider/4.png",
    alt: "4",
  },
  {
    src: "/images/logo-slider/5.png",
    alt: "5",
  },
  {
    src: "/images/logo-slider/6.png",
    alt: "6",
  },
  {
    src: "/images/logo-slider/9.png",
    alt: "9",
  },
  {
    src: "/images/logo-slider/10.png",
    alt: "10",
  },
  {
    src: "/images/logo-slider/11.png",
    alt: "11",
  },
  {
    src: "/images/logo-slider/12.png",
    alt: "12",
  },
  {
    src: "/images/logo-slider/13.png",
    alt: "13",
  },
  {
    src: "/images/logo-slider/14.png",
    alt: "14",
  },
  {
    src: "/images/logo-slider/15.png",
    alt: "15",
  },
  {
    src: "/images/logo-slider/16.png",
    alt: "16",
  },
  {
    src: "/images/logo-slider/17.png",
    alt: "17",
  },
  {
    src: "/images/logo-slider/18.png",
    alt: "18",
  },
  {
    src: "/images/logo-slider/21.png",
    alt: "21",
  },
  {
    src: "/images/logo-slider/22.png",
    alt: "22",
  },
  {
    src: "/images/logo-slider/23.png",
    alt: "23",
  },
  {
    src: "/images/logo-slider/24.png",
    alt: "24",
  },
  {
    src: "/images/logo-slider/25.png",
    alt: "25",
  },
  {
    src: "/images/logo-slider/26.png",
    alt: "26",
  },
  {
    src: "/images/logo-slider/27.png",
    alt: "27",
  },
  {
    src: "/images/logo-slider/28.png",
    alt: "28",
  },
  {
    src: "/images/logo-slider/29.png",
    alt: "29",
  },
  {
    src: "/images/logo-slider/30.png",
    alt: "30",
  },
];

export const iodCallToAction: IodCallToActionSection = {
  image: "/images/uslugi-pasek.svg",
  alt: "uslugi-pasek",
  heading: "Pełnienie funkcji IOD - najwyższe standardy pracy",
  description:
    "Jesteśmy przekonani, że usługa przejęcia funkcji Inspektora Ochrony Danych, którą Ci proponujemy, to skuteczne narzędzie, aby zapewnić bezpieczeństwo Twojego biznesu.",
  ctaLabel: "Zapytaj o ofertę",
  link: "https://www.google.com/",
};

export const iodFaqHeader: IodFaqHeaderSection = {
  icon: "/images/piodicon.svg",
  alt: "piodicon",
  header: "Outsourcing IOD - pytania i odpowiedzi",
};

export const iodFaq: IodFaq[] = [
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
  {
    question: "Ile kosztuje outsourcing IOD?",
    answer:
      "Cena outsourcingu IOD jest zazwyczaj znacznie niższa niż koszt zatrudnienia wewnętrznego Inspektora Ochrony Danych. Zależy jednak od wielu czynników, takich jak: zakres usług, wielkość firmy, rodzaj przetwarzanych danych osobowych, branża, liczba pracowników i stopień złożoności procesów przetwarzania danych.",
  },
];

export const iodGreatestValue: IodGreatestValueSection = {
  heading: "Największą wartość stanowi zaufanie naszych klientów",
  image1: "/images/maciej-kaczmarski-o-nas-page.png",
  alt1: "maciej-kaczmarski-o-nas-page",
  image2: "/images/logo-klientow-odo24-onas-page.png",
  alt2: "logo-klientow-odo24-onas-page",
};

export const iodTeamContacts: IodTeamContactsSection = {
  heading: "W czym Ci możemy pomóc?",
  description: "Napisz lub zadzwoń, znajdziemy rozwiązanie",
  contacts: [
    {
      image: "/images/zespol-odo24-celu.jpg",
      alt: "zespol-odo24-celu",
      name: "Cezary Lutyński",
      phone: "+48 690 957 609 , 22 740 99",
      email: "96ujemy@odo24.pl",
    },
    {
      image: "/images/zespol-odo24-maku.jpg",
      alt: "zespol-odo24-maku",
      name: "Cezary Lutyński",
      phone: "+48 690 957 609 , 22 740 99",
      email: "96ujemy@odo24.pl",
    },
  ],
  formHeader: "Skorzystaj z formularza",
  formImage: "/images/odo24-zapytaj-o-oferte-formularz-new.gif",
  formAlt: "odo24-zapytaj-o-oferte-formularz-new",
  formctaLabel: "Skontaktuj się",
  formDescription:
    "Administratorem przesłanych danych osobowych będzie ODO 24 sp. z o.o. z siedzibą w Warszawie przy ul. Kamionkowskiej 45. Twoje dane będą przetwarzane w celu przygotowania, przesłania oraz archiwizacji oferty współpracy. Więcej informacji na ten temat znajduje się w",
  formLink: "Polityce Prywatności",
};
