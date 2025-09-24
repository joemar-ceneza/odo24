import { duties } from "@/data/iod/duties";
import Image from "next/image";

export default function IodDutiesSection() {
  const hasHeading = Boolean(duties.title);
  const hasImage = Boolean(duties.image);
  const hasSubHeader = Boolean(duties.subHeader);
  const hasItems = Boolean(duties.items);

  const hasContent = hasHeading || hasImage || hasSubHeader || hasItems;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="py-16 max-sm:py-5">
      <div className="max-w-[1060px] mx-auto px-5">
        {hasHeading && <h2 className="text-gray-600 text-3xl font-bold my-10">{duties.title}</h2>}
        <div className="flex justify-between items-center max-md:flex-col">
          {hasImage && <Image src={duties.image} alt={duties.alt} width={500} height={500} />}
          <div className="w-1/2 px-5 max-md:w-full max-md:my-5">
            {hasSubHeader && <h3 className="text-gray-600 text-lg font-bold">{duties.subHeader}</h3>}
            {hasItems && (
              <ul className="space-y-4 my-5">
                {duties.items.map((item, idx) => (
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
