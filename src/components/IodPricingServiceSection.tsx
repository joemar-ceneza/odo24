import { pricingServices } from "@/data/iod/pricing";
import Image from "next/image";
import Link from "next/link";

export default function IodPricingServiceSection() {
  const hasHeading = Boolean(pricingServices.title);
  const hasDescription = Boolean(pricingServices.subText);
  const hasSubHeading = Boolean(pricingServices.subHeader);
  const hasImage = Boolean(pricingServices.image);
  const hasCostComponentsHeading = Boolean(pricingServices.costComponentsTitle);
  const hasCostComponents = Boolean(pricingServices.costComponents);
  const hasFootNote = Boolean(pricingServices.footNote);
  const hasSource = Boolean(pricingServices.source.label && pricingServices.source.url);
  const hasLastUpdate = Boolean(pricingServices.lastUpdate);
  const hasFooter = Boolean(pricingServices.footer);
  const hasCtaLabel = Boolean(pricingServices.cta.ctaLabel && pricingServices.cta.ctaUrl);

  const hasContent =
    hasHeading ||
    hasDescription ||
    hasSubHeading ||
    hasImage ||
    hasCostComponentsHeading ||
    hasCostComponents ||
    hasFootNote ||
    hasSource ||
    hasLastUpdate ||
    hasFooter ||
    hasCtaLabel;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="py-10">
      <div className="max-w-[1060px] mx-auto px-5">
        {hasHeading && <h2 className="text-3xl font-bold text-gray-600">{pricingServices.title}</h2>}
        {hasDescription && <p className="py-3">{pricingServices.subText}</p>}
        {hasSubHeading && <p className="text-[22px] font-bold text-gray-600 py-3">{pricingServices.subHeader}</p>}
        {hasImage && (
          <Image
            src={pricingServices.image}
            alt={pricingServices.alt}
            width={500}
            height={500}
            className="w-full my-3"
          />
        )}
        <div className="my-5">
          {hasCostComponentsHeading && <p className="font-bold">{pricingServices.costComponentsTitle}</p>}
          {hasCostComponents && (
            <ul className="flex flex-wrap gap-x-6 gap-y-4 my-5">
              {pricingServices.costComponents.map((label, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full text-sm text-gray-800">
                    {index + 1}
                  </span>
                  <span className="text-sm">{label}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {hasFootNote && (
          <p className="mt-10">
            {pricingServices.footNote}
            {hasSource && (
              <Link href={pricingServices.source.url} className="text-blue-400">
                {pricingServices.source.label}
              </Link>
            )}
          </p>
        )}
        {hasLastUpdate && <p>{pricingServices.lastUpdate}</p>}
        <div className="bg-gray-200 flex justify-around items-center rounded-4xl py-6 px-5 mt-10 max-lg:flex-col">
          {hasFooter && <p>{pricingServices.footer}</p>}
          {hasCtaLabel && (
            <Link
              href={pricingServices.cta.ctaUrl}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300 max-lg:mt-5 uppercase">
              {pricingServices.cta.ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
