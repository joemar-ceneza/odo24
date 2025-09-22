import { iodDuties } from "@/lib/iod-data";
import Image from "next/image";

export default function IodDutiesSection() {
  const hasHeading = Boolean(iodDuties.title);
  const hasImage = Boolean(iodDuties.image);
  const hasSubHeader = Boolean(iodDuties.subHeader);
  const hasItems = Boolean(iodDuties.items);

  const hasContent = hasHeading || hasImage || hasSubHeader || hasItems;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="py-16 max-sm:py-5">
      <div className="max-w-[1060px] mx-auto px-5">
        {hasHeading && <h2 className="text-gray-600 text-3xl font-bold my-10">{iodDuties.title}</h2>}
        <div className="flex justify-between items-center max-md:flex-col">
          {hasImage && <Image src={iodDuties.image} alt={iodDuties.alt} width={500} height={500} />}
          <div className="w-1/2 px-5 max-md:w-full max-md:my-5">
            {hasSubHeader && <h3 className="text-gray-600 text-lg font-bold">{iodDuties.subHeader}</h3>}
            {hasItems && (
              <ul className="space-y-4 my-5">
                {iodDuties.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="mr-3">{String(idx + 1).padEnd(2, ".")}</div>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
