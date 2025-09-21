import { iodDeliverables } from "@/lib/iod-data";
import Image from "next/image";

export default function IodDeliverablesSection() {
  const hasImage = Boolean(iodDeliverables.image);
  const hasHeading = Boolean(iodDeliverables.heading);
  const hasBullets = Boolean(iodDeliverables.bullets);

  const hasContent = hasImage || hasHeading || hasBullets;

  if (!hasContent) {
    return null;
  }

  return (
    <section className=" bg-sky-950 text-white">
      <div className="max-w-[1060px] mx-auto flex justify-around items-center px-5 max-lg:flex-col">
        {hasImage && (
          <Image src={iodDeliverables.image} alt={iodDeliverables.alt} width={550} height={550} className="-mt-8" />
        )}

        <div className="px-3 py-3">
          {hasHeading && <h2 className="text-3xl font-bold my-3 max-lg:text-center">{iodDeliverables.heading}</h2>}
          {hasBullets && (
            <ul className="space-y-4 py-3 pl-2">
              {iodDeliverables.bullets.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Image src="/images/icon-check-white.svg" alt="icon-check-white" width={25} height={25} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
