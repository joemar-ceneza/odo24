import { iodPricingService } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodPricingServiceSection() {
  const hasHeading = Boolean(iodPricingService.title);
  const hasDescription = Boolean(iodPricingService.subText);
  const hasSubHeading = Boolean(iodPricingService.subHeader);
  const hasImage = Boolean(iodPricingService.image);
  const hasCostComponentsHeading = Boolean(iodPricingService.costComponentsTitle);
  const hasCostComponents = Boolean(iodPricingService.costComponents);
  const hasFootNote = Boolean(iodPricingService.footNote);
  const hasSource = Boolean(iodPricingService.source.label && iodPricingService.source.url);
  const hasLastUpdate = Boolean(iodPricingService.lastUpdate);
  const hasFooter = Boolean(iodPricingService.footer);
  const hasCtaLabel = Boolean(iodPricingService.cta.ctaLabel && iodPricingService.cta.ctaUrl);

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
        {hasHeading && <h2 className="text-3xl font-bold text-gray-600">{iodPricingService.title}</h2>}
        {hasDescription && <p className="py-3">{iodPricingService.subText}</p>}
        {hasSubHeading && <p className="text-[22px] font-bold text-gray-600 py-3">{iodPricingService.subHeader}</p>}
        {hasImage && (
          <Image
            src={iodPricingService.image}
            alt={iodPricingService.alt}
            width={500}
            height={500}
            className="w-full my-3"
          />
        )}
        <div className="my-5">
          {hasCostComponentsHeading && <p className="font-bold">{iodPricingService.costComponentsTitle}</p>}
          {hasCostComponents && (
            <ul className="flex flex-wrap gap-x-6 gap-y-4 my-5">
              {iodPricingService.costComponents.map((label, index) => (
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
            {iodPricingService.footNote}
            {hasSource && (
              <Link href={iodPricingService.source.url} className="text-blue-400">
                {iodPricingService.source.label}
              </Link>
            )}
          </p>
        )}
        {hasLastUpdate && <p>{iodPricingService.lastUpdate}</p>}
        <div className="bg-gray-200 flex justify-around items-center rounded-4xl py-6 px-5 mt-10 max-lg:flex-col">
          {hasFooter && <p>{iodPricingService.footer}</p>}
          {hasCtaLabel && (
            <Link
              href={iodPricingService.cta.ctaUrl}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300 max-lg:mt-5 uppercase">
              {iodPricingService.cta.ctaLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
