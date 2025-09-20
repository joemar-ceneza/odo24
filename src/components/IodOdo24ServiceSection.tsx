import { iodOdo24Service } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodOdo24ServiceSection() {
  return (
    <section className="py-14">
      <div className="max-w-[1060px] mx-auto px-5">
        <div className="bg-gray-200 rounded-2xl py-7 px-16 max-sm:px-5">
          <h2 className="text-gray-600 text-3xl font-bold">{iodOdo24Service.heading}</h2>
          <div className="grid grid-cols-1 gap-10 my-5 md:grid-cols-2">
            <ul className="space-y-6">
              {iodOdo24Service.leftColumn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 ml-5 max-md:ml-0">
                  <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {iodOdo24Service.rightColumn.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 ">
                  <Image src="/images/icon-check.svg" alt="check" width={25} height={25} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-end pt-3">
            <Link
              href="#"
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
              {iodOdo24Service.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
