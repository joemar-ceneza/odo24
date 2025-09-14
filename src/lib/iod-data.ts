export interface HeroSection {
  heading: string;
  description: string;
  ctaLabel: string;
}

export interface iodOutSourcingSection {
  heading: string;
  leftColumn: string[];
  rightColumn: string[];
  footerText: string;
  ctaLabel: string;
}

export interface iodScopeSection {
  heading: string;
  description: string;
  bullets: string[];
}

export const iodHero: HeroSection = {
  heading: "Outsourcing IOD – Outsourcing funkcji Inspektora Ochrony Danych",
  description:
    "Skorzystaj ze sprawdzonego sposobu, dzięki któremu zoptymalizujesz procesy i koszty nadzoru nad ochroną danych osobowych. Wybierz outsourcing funkcji IOD.",
  ctaLabel: "Zapytaj o ofertę",
};

export const iodQuote: string =
  "„Skuteczny nadzór nad ochroną danych osobowych jest możliwy tylko wtedy, gdy zostanie wyznaczona osoba lub osoby odpowiedzialne za obszar RODO”.";

export const iodOutSourcing: iodOutSourcingSection = {
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
};

export const iodScope: iodScopeSection = {
  heading: "Jaki jest zakres usługi outsourcing funkcji Inspektora Ochrony Danych",
  description:
    "Outsourcing funkcji Inspektora Ochrony Danych oznacza dla Ciebie stały kontakt z doświadczonymi konsultantami z obszarów prawa, bezpieczeństwa sieci i systemów IT, zarządzania ryzykiem i bezpieczeństwa fizycznego. Usługa ta to również:",
  bullets: [
    "Dostęp do narzędzi informatycznych, które pozwalają wykazać zgodność z RODO. Będziesz móc korzystać także z platformy e-learningowej.",
    "Realizacja lub wsparcie w realizacji wielu obowiązków, które spoczywają bezpośrednio na organizacji.",
    "Szybka reakcja na Twoje bieżące potrzeby.",
  ],
};

export const iodOdo24Service = {
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
};

export const iodNeedSection = {
  heading: "Komu jest potrzebny outsourcing funkcji Inspektora Ochrony Danych",
  description:
    "Na usługę outsourcingu funkcji Inspektora Ochrony Danych, najczęściej decydują się zarządy firm, które chcą:",
  items: [
    "mieć pełną kontrolę nad procesami,",
    "zminimalizować ryzyko biznesowe,",
    "zredukować wysokie koszty stałe,",
    "szybkiej reakcji ekspertów na biznesowe potrzeby.",
  ],
};

export const iodPricing = {
  heading: "Jaka jest cena usługi outsourcingu IOD",
  description:
    "Usługę outsourcingu przygotowujemy tak, aby ograniczyć koszty, a jednocześnie zapewnić Ci niezmiennie jakościowe wsparcie najlepszych ekspertów od ochrony danych. Cena outsourcingu RODO zależy od zakresu usługi. Dopasowujemy go do rzeczywistych i aktualnych potrzeb Twojej firmy.",
  subheading:
    "Poniżej znajdziesz przykładowe porównanie kosztów etatu specjalisty ds. RODO z kosztem outsourcingu Inspektora Ochrony Danych",
  costComponentsHeading: "Składniki kosztów",
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
    label: "wynagrodzenia.pl",
    url: "https://wynagrodzenia.pl/moja-placa/ile-zarabia-inspektor-ochrony-danych-osobowych",
  },
  lastUpdate: "Ostatnia aktualizacja: styczeń 2025",
  footer: "Jeżeli chcesz skalkulować koszt miesięczny usługi, to warto porozmawiać z naszym doradcą.",
  ctaLabel: "Skontaktuj się",
};

export const iodDeliverablesSection = {
  heading: "Co otrzymujesz w ramach Outsourcingu IOD?",
  bullets: [
    "Wsparcie w prowadzeniu rejestru czynności przetwarzania.",
    "Pełnienie funkcji punktu kontaktowego dla Prezesa Urzędu Ochrony Danych Osobowych.",
    "Przygotowywanie odpowiedzi dla osób, których dane dotyczą.",
    "Ocena skutków przetwarzania danych dla ochrony danych.",
    "Weryfikacja umów, klauzul, regulaminów lub innych dokumentów w zakresie zgodności z przepisami o ochronie danych osobowych.",
  ],
};

export const iodDuties = {
  header: "Od czego zaczynamy wdrożenie obowiązków IOD",
  subtitle: "3 kroki do przekazania funkcji Inspektora Ochrony Danych",
  item: [
    "Dokładnie określimy sytuację wyjściową – przeprowadzimy audyt",
    "Ocenimy skutki dla ochrony danych i ryzyko",
    "Opracujemy lub zaktualizujemy najważniejsze polityki ochrony oraz procedury przetwarzania danych osobowych",
  ],
};

export const iodTestimonials = [
  {
    name: "Agnieszka Karłowicz",
    company: "Spiżarnia",
    companyUrl: "#",
    avatar: "#",
    subtitle: `"Praktyczne podejście, stała dostępność doradcza, fajne relacje"`,
    quote:
      "Z ODO24 współpracujemy od ponad roku. To dla nas rok spokojnego oddechu i poczucia bezpieczeństwa: przynajmniej w kwestii ochrony danych osobowych :-) Ludzie z ODO to profesjonaliści mówiący zrozumiałym językiem o niezrozumiałych dla zwykłego śmiertelnika sprawach. Rozumieją nie tylko swoją profesją, ale co dla nas bardzo ważne, biznes i jego wymagania. Praktyczne podejście, stała dostępność doradcza, fajne relacje - wszystko to sprawia, że mogę polecić tę Firmę wszystkim, którzy chcą pracować i spać spokojnie.",
    services: ["Outsourcing IOD", "Wdrożenie RODO"],
  },
  {
    name: "Tomasz Siwicki",
    company: "Gefco",
    companyUrl: "#",
    avatar: "#",
    subtitle: `"Polecam Państwu firmę ODO 24, jako profesjonalnego partnera"`,
    quote:
      "Od kilku lat w zakresie ochrony danych osobowych współpracujemy z firmą ODO 24. Profesjonalny zespół, który sprawnie pomógł nam również dostosować się do wymagań ,,RODO’’. Korzystamy nie tylko z wiedzy ekspertów, ale też z profesjonalnie przygotowanych e-szkoleń, dzięki temu udało nam się przeszkolić w bardzo krótkim czasie kilkuset pracowników. Zdecydowanie polecam Państwu firmę ODO 24, jako profesjonalnego partnera, dostarczającego usługi na najwyższym poziomie.",
    services: ["Outsourcing IOD", "Wdrożenie RODO"],
  },
  {
    name: "Wojciech Kmiecik",
    company: "Szlachetna Paczka",
    companyUrl: "#",
    avatar: "#",
    subtitle: `"ODO 24 sp. z o.o. to eksperci od ochrony danych osobowych i godny naśladowania przykład"`,
    quote:
      "ODO 24 sp. z o.o. to eksperci od ochrony danych osobowych i godny naśladowania przykład zaangażowania społecznego biznesu. Firma jest Partnerem merytorycznym Stowarzyszenia WIOSNA, wspierając nas swoją wiedzą w formie szkoleń, doradztwa i innych usług specjalistycznych. Spółka przeprowadziła również audyt w Stowarzyszeniu oraz zajęła się przygotowaniem wymaganej dokumentacji. Profesjonalizm, a w szczególności kompetencje ekspertów ODO 24 pozwalają nam na zdobycie praktycznej wiedzy, która sprawia, że czujemy się spokojni o bezpieczeństwo danych.",
    services: ["Outsourcing IOD", "Wdrożenie RODO"],
  },
  {
    name: "Wiesław Chojnacki",
    company: "Dressler sp. z o.o.",
    companyUrl: "#",
    avatar: "#",
    subtitle: `"Z przyjemnością rekomenduję ODO 24, jako rzetelnego partnera i polecam innym"`,
    quote:
      "W dotychczasowej współpracy ODO 24 wykazała się otwartością, pełnym profesjonalizmem oraz elastycznością w podejściu do realizacji powierzonych zadań. Warto zwrócić uwagę na łatwość nawiązania kontaktu, fachowe doradztwo oraz szybkość reakcji pracowników ODO 24 Mamy nadzieję, że nasza współpraca będzie owocowała nadal sympatycznym i miłym kontaktem oraz utrzymaniem wysokiej jakości świadczonych usług. Doceniając postawę ODO 24 z przyjemnością rekomenduję ją, jako rzetelnego partnera i mogę polecić innym.",
    services: ["Outsourcing IOD", "Wdrożenie RODO"],
  },
];

export const iodCallToAction = {
  icon: "#",
  title: "Pełnienie funkcji IOD - najwyższe standardy pracy",
  subtitle:
    "Jesteśmy przekonani, że usługa przejęcia funkcji Inspektora Ochrony Danych, którą Ci proponujemy, to skuteczne narzędzie, aby zapewnić bezpieczeństwo Twojego biznesu.",
  ctaLabe: "Zapytaj o ofertę",
};

export const iodFaq = [
  { header: "Outsourcing IOD - pytania i odpowiedzi" },
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

export const iodGreatestValue = {
  heading: "The greatest value is the trust of our customers",
};

export const teamContacts = [
  {
    header: "W czym Ci możemy pomóc?",
    description: "Write or call, we will find a solution",
  },
  {
    name: "Cezary Lutyński",
    phone: "+48 690 957 609 , 22 740 99",
    email: "96ujemy@odo24.pl",
    image: "#",
  },
  {
    name: "Cezary Lutyński",
    phone: "+48 690 957 609 , 22 740 99",
    email: "96ujemy@odo24.pl",
    image: "#",
  },
];

export const footerLinks = [
  {
    tile: "Ochrona danych osobowych:",
    links: [
      {
        label: "Audyt zgodności",
        link: "#",
      },
      {
        label: "Obsługa RODO - bieżące wsparcie",
        link: "#",
      },
      {
        label: "DPIA i analiza ryzyka",
        link: "#",
      },
      {
        label: "Kontrola UODO",
        link: "#",
      },
      {
        label: "Przejęcie funkcji IOD",
        link: "#",
      },
      {
        label: "Wdrożenie RODO",
        link: "#",
      },
    ],
  },
  {
    tile: "Cyberbezpieczeństwo:",
    links: [
      {
        label: "Wdrożenie NIS2",
        link: "#",
      },
      {
        label: "Wdrożenie ISO 27001",
        link: "#",
      },
      {
        label: "Audyt Wewnętrzny ISO 27001",
        link: "#",
      },
      {
        label: "Wdrożenie ISO 22301 (BCM)",
        link: "#",
      },
      {
        label: "Badanie podatności zasobów informatycznych",
        link: "#",
      },
    ],
  },
  {
    tile: "Szkolenia:",
    links: [
      {
        label: "WdrSzkolenia otwarte online",
        link: "#",
      },
      {
        label: "Szkolenia zamknięte",
        link: "#",
      },
      {
        label: "E-learning",
        link: "#",
      },
    ],
  },
  {
    tile: "Wiedza:",
    links: [
      {
        label: "ABC RODO",
        link: "#",
      },
      {
        label: "Biuletyn",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
      {
        label: "Webinary RODO",
        link: "#",
      },
      {
        label: "RODO Nawigator online",
        link: "#",
      },
      {
        label: "RODO Migawki",
        link: "#",
      },
      {
        label: "Poradniki i przewodniki RODO",
        link: "#",
      },
      {
        label: "Pytania i odpowiedzi",
        link: "#",
      },
    ],
  },
  {
    tile: "Aspekty prawne:",
    links: [
      {
        label: "Regulamin ŚUDE",
        link: "#",
      },
      {
        label: "Polityka prywatności",
        link: "#",
      },
      {
        label: "Regulamin szkoleń otwartych",
        link: "#",
      },
      {
        label: "Polityka cookies",
        link: "#",
      },
    ],
  },
  {
    tile: "Kontakt:",
    links: [
      {
        label: "Zapytaj o ofertę",
        link: "#",
      },
      {
        label: "Zadzwoń 22 740 99 00 (pon. - pt.: 8.00-17.00)",
        link: "#",
      },
    ],
  },
];
