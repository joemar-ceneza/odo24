import { hero } from "@/data/iod/hero";
import Link from "next/link";

export default function IodHeroSection() {
  const hasHeading = Boolean(hero.title);
  const hasDescription = Boolean(hero.subText);
  const hastCta = Boolean(hero.cta.ctaLabel && hero.cta.ctaUrl);

  const hasContent = hasHeading || hasDescription || hastCta;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-gray-200 text-center py-6">
      <div className="max-w-[662px] mx-auto px-5">
        {hero.title && <h1 className="text-gray-600 text-4xl text-center font-bold my-6">{hero.title}</h1>}
        {hero.subText && <p className="py-3">{hero.subText}</p>}
        {hero.cta.ctaLabel && (
          <div className="flex items-center justify-center my-5">
            <Link
              href={hero.cta.ctaUrl}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 uppercase">
              {hero.cta.ctaLabel}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
