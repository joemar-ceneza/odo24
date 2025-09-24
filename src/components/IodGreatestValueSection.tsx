import { greatestValues } from "@/data/iod/greatest-values";
import Image from "next/image";

export default function IodGreatestValue() {
  const hasHeading = Boolean(greatestValues.title);
  const hasImage = Boolean(greatestValues.images);

  const hasContent = hasHeading || hasImage;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="max-w-[1060px] mx-auto px-5">
        {hasHeading && (
          <h2 className="text-3xl font-bold text-gray-600 my-5 max-lg:text-center">{greatestValues.title}</h2>
        )}

        <div className="flex pt-10 justify-center items-start max-lg:flex-col  max-lg:items-center">
          {hasImage &&
            Array.isArray(greatestValues.images) &&
            greatestValues.images.map((img: { src: string; alt: string }, idx: number) => (
              <Image key={idx} src={img.src} alt={img.alt} width={400} height={400} />
            ))}
        </div>
      </div>
    </section>
  );
}
