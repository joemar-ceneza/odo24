import { outSourcing } from "@/data/iod/outsourcing";
import Link from "next/link";
import Image from "next/image";

export default function IodOutSourcingSection() {
  const hasHeading = Boolean(outSourcing.title);
  const hasLeftColumn = Array.isArray(outSourcing.leftColumn) && outSourcing.leftColumn.length > 0;
  const hasRightColumn = Array.isArray(outSourcing.rightColumn) && outSourcing.rightColumn.length > 0;
  const hasFooterText = Boolean(outSourcing.footerText);
  const hasCtaLabel = Boolean(outSourcing.cta.ctaLabel && outSourcing.cta.ctaUrl);

  const hasContent = hasHeading || hasLeftColumn || hasRightColumn || hasFooterText || hasCtaLabel;
  const gridColumnClass = hasLeftColumn && hasRightColumn ? "md:grid-cols-2" : "grid-cols-1";

  if (!hasContent) {
    return null;
  }

  return (
    <section className="my-14 px-5">
      <div className="max-w-[1060px] mx-auto bg-gray-200 p-10 rounded-3xl max-sm:px-5">
        {hasHeading && <h2 className="text-2xl font-bold text-gray-600">{outSourcing.title}</h2>}
        {(hasLeftColumn || hasRightColumn) && (
          <div className={`grid ${gridColumnClass} gap-10 my-5 max-lg:grid-cols-1`}>
            {hasLeftColumn && (
              <ul className="space-y-6">
                {outSourcing.leftColumn.map((item, idx) => (
                  <li key={`left-${idx}`} className="flex items-start gap-3">
                    <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {hasRightColumn && (
              <ul className="space-y-6">
                {outSourcing.rightColumn.map((item, idx) => (
                  <li key={`right-${idx}`} className="flex items-start gap-3">
                    <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
        {(hasFooterText || hasCtaLabel) && (
          <div className="flex items-center justify-around gap-4 mt-12 text-center max-lg:flex-col">
            {hasFooterText && <p>{outSourcing.footerText}</p>}
            {hasCtaLabel && (
              <Link
                href={outSourcing.cta.ctaUrl}
                className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300 uppercase">
                {outSourcing.cta.ctaLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
