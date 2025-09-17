import { iodOutSourcing } from "@/lib/iod-data";
import Link from "next/link";
import Image from "next/image";

export default function IodOutSourcingSection() {
  return (
    <section className="container mx-auto">
      <div className="py-14">
        <div className="max-w-full w-[1100px] mx-auto bg-gray-200 p-10 md:p-16 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-700">{iodOutSourcing.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-5">
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
          <div className="flex flex-col md:flex-row items-center justify-around gap-4 mt-12 text-center">
            <p>{iodOutSourcing.footerText}</p>
            <Link
              href="#"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
              {iodOutSourcing.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
