import { iodOdo24Service } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodOdo24ServiceSection() {
  const hasHeading = Boolean(iodOdo24Service.heading);
  const hasLeftColumn = Boolean(iodOdo24Service.leftColumn) && iodOdo24Service.leftColumn.length > 0;
  const hasRightColumn = Boolean(iodOdo24Service.rightColumn) && iodOdo24Service.rightColumn.length > 0;
  const hasCtaLabel = Boolean(iodOdo24Service.ctaLabel && iodOdo24Service.link);

  const hasContent = hasHeading || hasLeftColumn || hasRightColumn || hasCtaLabel;
  const gridColumnClass = hasLeftColumn && hasRightColumn ? "md:grid-cols-2 gap-10" : "grid-cols-1 gap-0";

  if (!hasContent) {
    return null;
  }

  return (
    <section className="py-14">
      <div className="max-w-[1060px] mx-auto px-5">
        <div className="bg-gray-200 rounded-2xl py-7 px-16 max-sm:px-5">
          {hasHeading && <h2 className="text-gray-600 text-3xl font-bold">{iodOdo24Service.heading}</h2>}
          {(hasLeftColumn || hasRightColumn) && (
            <div className={`grid ${gridColumnClass} my-5`}>
              <ul className="space-y-6">
                {iodOdo24Service.leftColumn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 ml-5 max-md:ml-0">
                    <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-6">
                {iodOdo24Service.rightColumn.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 ">
                    <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex justify-end pt-3">
            {hasCtaLabel && (
              <Link
                href={iodOdo24Service.link}
                className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300 uppercase">
                {iodOdo24Service.ctaLabel}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
