import { iodPricingService } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodPricingServiceSection() {
  return (
    <section className="py-10">
      <div className="max-w-[1060px] mx-auto">
        <h2 className="text-3xl font-bold text-gray-600">{iodPricingService.heading}</h2>
        <p className="py-3">{iodPricingService.description}</p>
        <p className="text-[22px] font-bold text-gray-600 py-3">{iodPricingService.subheading}</p>
        <Image
          src="/images/outsourcing-rodo-iod-cena.svg"
          alt="outsourcing-rodo-iod-cena"
          width={500}
          height={500}
          className="w-full my-3"
        />
        <div className="my-5">
          <p className="font-bold">{iodPricingService.costComponentsHeading}</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-4 my-5">
            {iodPricingService.costComponents.map((label, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="w-9 h-9 flex items-center justify-center border border-gray-500 rounded-full text-sm text-gray-800">
                  {index + 1}
                </span>
                <span className="text-sm">{label}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-10">
          {iodPricingService.footNote}
          <Link href={iodPricingService.source.url} className="text-blue-400">
            {iodPricingService.source.label}
          </Link>
        </p>
        <p>{iodPricingService.lastUpdate}</p>
        <div className="bg-gray-200 flex justify-around items-center rounded-4xl py-6 mt-10">
          <p>{iodPricingService.footer}</p>
          <Link
            href={""}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
            {iodPricingService.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
