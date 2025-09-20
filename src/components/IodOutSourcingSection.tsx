import { iodOutSourcing } from "@/lib/iod-data";
import Link from "next/link";
import Image from "next/image";

export default function IodOutSourcingSection() {
  return (
    <section className="my-14 px-3">
      <div className="max-w-[1060px] mx-auto bg-gray-200 p-10 rounded-3xl max-sm:px-5">
        <h2 className="text-2xl font-bold text-gray-600">{iodOutSourcing.heading}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5 max-lg:grid-cols-1">
          <ul className="space-y-6">
            {iodOutSourcing.leftColumn.map((item, idx) => (
              <li key={`left-${idx}`} className="flex items-start gap-3">
                <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <ul className="space-y-6">
            {iodOutSourcing.rightColumn.map((item, idx) => (
              <li key={`right-${idx}`} className="flex items-start gap-3">
                <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-around gap-4 mt-12 text-center max-lg:flex-col">
          <p>{iodOutSourcing.footerText}</p>
          <Link
            href={iodOutSourcing.link}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300 uppercase">
            {iodOutSourcing.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
