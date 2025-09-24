import { scope } from "@/data/iod/scope";
import Image from "next/image";

export default function IodDeliverablesSection() {
  const hasImage = Boolean(scope.image);
  const hasHeading = Boolean(scope.title);
  const hasDescription = Boolean(scope.subText);
  const hasBullets = Array.isArray(scope.items);

  const hasContent = hasImage || hasHeading || hasDescription || hasBullets;

  if (!hasContent) {
    return null;
  }

  return (
    <section className=" bg-sky-950 text-white">
      <div className="max-w-[1060px] mx-auto flex items-center px-5 max-lg:flex-col">
        {hasImage && (
          <Image src={scope.image} alt={scope.alt} width={550} height={550} className="scale-x-[-1] -mt-8" />
        )}

        <div className="px-3 py-3">
          {hasHeading && <h2 className="text-3xl font-bold my-3 max-lg:text-center">{scope.title}</h2>}
          {hasDescription && <p className="mb-6 leading-relaxed">{scope.subText}</p>}
          {hasBullets && (
            <ul className="space-y-4 py-3 pl-2">
              {scope.items.map((item, idx) => (
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
