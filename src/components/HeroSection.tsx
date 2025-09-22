import { iodHero } from "@/lib/iod-data";
import Link from "next/link";

export default function IodHeroSection() {
  const hasHeading = Boolean(iodHero.title);
  const hasDescription = Boolean(iodHero.subText);
  const hastCta = Boolean(iodHero.cta.ctaLabel && iodHero.cta.ctaUrl);

  const hasContent = hasHeading || hasDescription || hastCta;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-gray-200 text-center py-6">
      <div className="max-w-[662px] mx-auto px-5">
        {iodHero.title && <h1 className="text-gray-600 text-4xl text-center font-bold my-6">{iodHero.title}</h1>}
        {iodHero.subText && <p className="py-3">{iodHero.subText}</p>}
        {iodHero.cta.ctaLabel && (
          <div className="flex items-center justify-center my-5">
            <Link
              href={iodHero.cta.ctaUrl}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 uppercase">
              {iodHero.cta.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
