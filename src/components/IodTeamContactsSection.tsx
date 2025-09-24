import { teamContacts } from "@/data/iod/team-contacts";
import Image from "next/image";
import Link from "next/link";

export default function IodTeamContactsSection() {
  const hasHeading = Boolean(teamContacts.title);
  const hasDescription = Boolean(teamContacts.subText);
  const hasContacts = Boolean(teamContacts.contacts);
  const hasFormHeader = Boolean(teamContacts.formHeader);
  const hasFormImage = Boolean(teamContacts.formImage);
  const hasCtaLabel = Boolean(teamContacts.formCtaLabel);
  const hasFormDescription = Boolean(teamContacts.formSubText);
  const hasFormLink = Boolean(teamContacts.formUrl);

  const hasContent =
    hasHeading ||
    hasDescription ||
    hasContacts ||
    hasFormHeader ||
    hasFormImage ||
    hasCtaLabel ||
    hasFormDescription ||
    hasFormLink;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-sky-950 text-white">
      <div className="max-w-[1060px] mx-auto flex justify-between py-10 px-5 max-lg:flex-col max-lg:text-center">
        <div>
          {hasHeading && <h2 className="text-2xl font-bold">{teamContacts.title}</h2>}
          {hasDescription && <p className="my-5">{teamContacts.subText}</p>}
          {hasContacts && (
            <div className="my-12 pl-16 max-lg:pl-0">
              {teamContacts.contacts.map((item, idx) => (
                <div key={idx} className="flex gap-10 mb-8 max-lg:justify-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-white"
                  />
                  <div className="text-left">
                    <p className="font-bold">{item.name}</p>
                    <p>tel. {item.phone}</p>
                    <p className="text-sky-600">{item.email}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-1/2 bg-gray-200 rounded-3xl p-8 -mt-20 max-lg:w-full max-lg:-mt-0">
          <div className="flex justify-between items-end max-lg:items-center max-lg:flex-col-reverse">
            {hasFormHeader && <h3 className="text-2xl text-gray-600 font-bold pt-8">{teamContacts.formHeader}</h3>}
            {hasFormImage && (
              <Image
                src={teamContacts.formImage.image}
                alt={teamContacts.formImage.alt}
                width={150}
                height={150}
                className="-mt-16 max-lg:mt-0"
              />
            )}
          </div>
          <form className="text-gray-950 my-5 text-sm">
            <label>
              <input
                type="text"
                name="firstname"
                placeholder="Imię i nazwisko"
                className="w-full bg-white rounded-3xl border-1 border-sky-400 italic px-3 py-2 mb-3"
              />
            </label>
            <label>
              <input
                type="text"
                name="email"
                placeholder="Adres e-mail"
                className="w-full bg-white rounded-3xl border-1 border-sky-400 italic px-3 py-2 mb-3"
              />
            </label>
            <label>
              <input
                type="text"
                name="contact"
                placeholder="Telefon kontaktowy"
                className="w-full bg-white rounded-3xl border-1 border-sky-400 italic px-3 py-2 mb-3"
              />
            </label>
          </form>
          {hasCtaLabel && (
            <Link
              href={""}
              className="block w-full bg-sky-600 uppercase hover:bg-sky-700 text-white px-6 py-2 rounded-full transition duration-300 text-center">
              {teamContacts.formCtaLabel}
            </Link>
          )}
          <div className="text-gray-500 text-sm mt-10">
            {hasFormDescription && hasFormLink && (
              <p>
                {teamContacts.formSubText} <span className="text-sky-600 font-bold">{teamContacts.formUrl}</span>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
