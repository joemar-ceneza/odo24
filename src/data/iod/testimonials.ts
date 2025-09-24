import { IodTestimonialsSection } from "@/lib/validators/section/testimonials";
import { url, link } from "@/lib/base";

export const testimonials: IodTestimonialsSection = {
  title: "Poznaj opinie klientów – outsourcing",
  testimonials: [
    {
      name: "Agnieszka Karłowicz",
      company: "Spiżarnia",
      companyUrl: url("https://www.google.com/"),
      avatar: "/images/foto-spizarnia.jpg",
      subHeader: `"Praktyczne podejście, stała dostępność doradcza, fajne relacje"`,
      quote:
        "Z ODO24 współpracujemy od ponad roku. To dla nas rok spokojnego oddechu i poczucia bezpieczeństwa: przynajmniej w kwestii ochrony danych osobowych :-) Ludzie z ODO to profesjonaliści mówiący zrozumiałym językiem o niezrozumiałych dla zwykłego śmiertelnika sprawach. Rozumieją nie tylko swoją profesją, ale co dla nas bardzo ważne, biznes i jego wymagania. Praktyczne podejście, stała dostępność doradcza, fajne relacje - wszystko to sprawia, że mogę polecić tę Firmę wszystkim, którzy chcą pracować i spać spokojnie.",
      servicesLabel: "Zakres usług:",
      services: [link("Outsourcing IOD", "https://www.google.com/"), link("Wdrożenie RODO", "https://www.google.com/")],
    },
    {
      name: "Tomasz Siwicki",
      company: "Gefco",
      companyUrl: url("https://www.google.com/"),
      avatar: "/images/foto-gefco.jpg",
      subHeader: `"Polecam Państwu firmę ODO 24, jako profesjonalnego partnera"`,
      quote:
        "Od kilku lat w zakresie ochrony danych osobowych współpracujemy z firmą ODO 24. Profesjonalny zespół, który sprawnie pomógł nam również dostosować się do wymagań ,,RODO’’. Korzystamy nie tylko z wiedzy ekspertów, ale też z profesjonalnie przygotowanych e-szkoleń, dzięki temu udało nam się przeszkolić w bardzo krótkim czasie kilkuset pracowników. Zdecydowanie polecam Państwu firmę ODO 24, jako profesjonalnego partnera, dostarczającego usługi na najwyższym poziomie.",
      servicesLabel: "Zakres usług:",
      services: [link("Outsourcing IOD", "https://www.google.com/"), link("Wdrożenie RODO", "https://www.google.com/")],
    },
    {
      name: "Wojciech Kmiecik",
      company: "Szlachetna Paczka",
      companyUrl: url("https://www.google.com/"),
      avatar: "/images/foto_szlachetnapaczka.jpg",
      subHeader: `"ODO 24 sp. z o.o. to eksperci od ochrony danych osobowych i godny naśladowania przykład"`,
      quote:
        "ODO 24 sp. z o.o. to eksperci od ochrony danych osobowych i godny naśladowania przykład zaangażowania społecznego biznesu. Firma jest Partnerem merytorycznym Stowarzyszenia WIOSNA, wspierając nas swoją wiedzą w formie szkoleń, doradztwa i innych usług specjalistycznych. Spółka przeprowadziła również audyt w Stowarzyszeniu oraz zajęła się przygotowaniem wymaganej dokumentacji. Profesjonalizm, a w szczególności kompetencje ekspertów ODO 24 pozwalają nam na zdobycie praktycznej wiedzy, która sprawia, że czujemy się spokojni o bezpieczeństwo danych.",
      servicesLabel: "Zakres usług:",
      services: [link("Outsourcing IOD", "https://www.google.com/"), link("Wdrożenie RODO", "https://www.google.com/")],
    },
    {
      name: "Wiesław Chojnacki",
      company: "Dressler sp. z o.o.",
      companyUrl: url("https://www.google.com/"),
      avatar: "/images/wie-cho-dress.jpg",
      subHeader: `"Z przyjemnością rekomenduję ODO 24, jako rzetelnego partnera i polecam innym"`,
      quote:
        "W dotychczasowej współpracy ODO 24 wykazała się otwartością, pełnym profesjonalizmem oraz elastycznością w podejściu do realizacji powierzonych zadań. Warto zwrócić uwagę na łatwość nawiązania kontaktu, fachowe doradztwo oraz szybkość reakcji pracowników ODO 24 Mamy nadzieję, że nasza współpraca będzie owocowała nadal sympatycznym i miłym kontaktem oraz utrzymaniem wysokiej jakości świadczonych usług. Doceniając postawę ODO 24 z przyjemnością rekomenduję ją, jako rzetelnego partnera i mogę polecić innym.",
      servicesLabel: "Zakres usług:",
      services: [link("Outsourcing IOD", "https://www.google.com/"), link("Wdrożenie RODO", "https://www.google.com/")],
    },
  ],
};
