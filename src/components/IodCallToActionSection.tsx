import { iodCallToAction } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodCallToActionSection() {
  return (
    <section className="bg-sky-950 text-white mb-16">
      <div className="max-w-[600px] mx-auto text-center py-12 px-5">
        <Image src={iodCallToAction.icon} alt={iodCallToAction.alt} width={45} height={45} className="inline-block" />
        <p className="text-2xl font-bold my-8">{iodCallToAction.heading}</p>
        <p className="mb-10">{iodCallToAction.description}</p>
        <Link
          href=""
          className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
          {iodCallToAction.ctaLabel}
        </Link>
      </div>
    </section>
  );
}
