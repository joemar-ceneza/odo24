import { iodHero } from "@/lib/iod-data";
import Link from "next/link";

export default function IodHeroSection() {
  const hasHeading = Boolean(iodHero.heading);
  const hasDescription = Boolean(iodHero.description);
  const hastCta = Boolean(iodHero.ctaLabel && iodHero.link);

  const hasContent = hasHeading || hasDescription || hastCta;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-gray-200 text-center py-6">
      <div className="max-w-[662px] mx-auto px-5">
        {iodHero.heading && <h1 className="text-gray-600 text-4xl text-center font-bold my-6">{iodHero.heading}</h1>}
        {iodHero.description && <p className="py-3">{iodHero.description}</p>}
        {iodHero.ctaLabel && (
          <div className="flex items-center justify-center my-5">
            <Link
              href={iodHero.link}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 uppercase">
              {iodHero.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
