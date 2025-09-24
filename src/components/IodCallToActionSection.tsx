import { callToAction } from "@/data/iod/call-to-action";
import Image from "next/image";
import Link from "next/link";

export default function IodCallToActionSection() {
  const hasImage = Boolean(callToAction.image);
  const hasHeading = Boolean(callToAction.title);
  const hasDescription = Boolean(callToAction.subText);
  const hasCtaLabel = Boolean(callToAction.cta.ctaLabel && callToAction.cta.ctaUrl);

  const hasContent = hasImage || hasHeading || hasDescription || hasCtaLabel;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-sky-950 text-white mb-16">
      <div className="max-w-[600px] mx-auto text-center py-12 px-5">
        {hasImage && (
          <Image src={callToAction.image} alt={callToAction.alt} width={45} height={45} className="inline-block" />
        )}
        {hasHeading && <p className="text-2xl font-bold my-8">{callToAction.title}</p>}
        {hasDescription && <p className="my-8">{callToAction.subText}</p>}
        {hasCtaLabel && (
          <Link
            href={callToAction.cta.ctaUrl}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
            {callToAction.cta.ctaLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
