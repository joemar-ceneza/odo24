import { iodCallToAction } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodCallToActionSection() {
  const hasImage = Boolean(iodCallToAction.image);
  const hasHeading = Boolean(iodCallToAction.heading);
  const hasDescription = Boolean(iodCallToAction.description);
  const hasCtaLabel = Boolean(iodCallToAction.ctaLabel && iodCallToAction.link);

  const hasContent = hasImage || hasHeading || hasDescription || hasCtaLabel;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-sky-950 text-white mb-16">
      <div className="max-w-[600px] mx-auto text-center py-12 px-5">
        {hasImage && (
          <Image
            src={iodCallToAction.image}
            alt={iodCallToAction.alt}
            width={45}
            height={45}
            className="inline-block"
          />
        )}
        {hasHeading && <p className="text-2xl font-bold my-8">{iodCallToAction.heading}</p>}
        {hasDescription && <p className="my-8">{iodCallToAction.description}</p>}
        {hasCtaLabel && (
          <Link
            href={iodCallToAction.link}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
            {iodCallToAction.ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
