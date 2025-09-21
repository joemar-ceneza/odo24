import { iodGreatestValue } from "@/lib/iod-data";
import Image from "next/image";

export default function IodGreatestValue() {
  const hasHeading = Boolean(iodGreatestValue.heading);
  const hasImage1 = Boolean(iodGreatestValue.image1);
  const hasImage2 = Boolean(iodGreatestValue.image2);

  const hasContent = hasHeading || hasImage1 || hasImage2;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="mt-16">
      <div className="max-w-[1060px] mx-auto px-5">
        {hasHeading && (
          <h2 className="text-3xl font-bold text-gray-600 my-5 max-lg:text-center">{iodGreatestValue.heading}</h2>
        )}

        <div className="flex pt-10 justify-center items-start max-lg:flex-col  max-lg:items-center">
          {hasImage1 && <Image src={iodGreatestValue.image1} alt={iodGreatestValue.alt1} width={400} height={400} />}
          {hasImage2 && <Image src={iodGreatestValue.image2} alt={iodGreatestValue.alt2} width={650} height={500} />}
        </div>
      </div>
    </section>
  );
}
