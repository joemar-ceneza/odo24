import { IodTeamContactsSection } from "@/lib/validators/section/team-contacts";
import { email, phoneNumber, url } from "@/lib/base";

export const teamContacts: IodTeamContactsSection = {
  title: "W czym Ci możemy pomóc?",
  subText: "Napisz lub zadzwoń, znajdziemy rozwiązanie",
  contacts: [
    {
      image: "/images/zespol-odo24-celu.jpg",
      alt: "zespol-odo24-celu",
      name: "Cezary Lutyński",
      phone: phoneNumber("+48 690 957 609 , 22 740 99"),
      email: email("96ujemy@odo24.pl"),
    },
    {
      image: "/images/zespol-odo24-maku.jpg",
      alt: "zespol-odo24-maku",
      name: "Cezary Lutyński",
      phone: phoneNumber("+48 690 957 609 , 22 740 99"),
      email: email("96ujemy@odo24.pl"),
    },
  ],
  formHeader: "Skorzystaj z formularza",
  formImage: {
    image: "/images/odo24-zapytaj-o-oferte-formularz-new.gif",
    alt: "odo24-zapytaj-o-oferte-formularz-new",
  },
  formCtaLabel: "Skontaktuj się",
  formSubText:
    "Administratorem przesłanych danych osobowych będzie ODO 24 sp. z o.o. z siedzibą w Warszawie przy ul. Kamionkowskiej 45. Twoje dane będą przetwarzane w celu przygotowania, przesłania oraz archiwizacji oferty współpracy. Więcej informacji na ten temat znajduje się w",
  formUrl: url("https://www.google.com/"),
};
