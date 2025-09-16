import { iodOutSourcing } from "@/lib/iod-data";
import Link from "next/link";

export default function IodOutSourcingSection() {
  return (
    <section className="container mx-auto">
      <div className="py-14 ">
        <div className="w-4/5 mx-auto bg-gray-200 p-16 rounded-3xl">
          <h2 className="text-2xl font-bold text-gray-700">{iodOutSourcing.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-8 mx-10">
            <ul className="space-y-6">
              {iodOutSourcing.leftColumn.map((item, idx) => (
                <li key={`left-${idx}`} className="flex gap-3">
                  <span className="text-red-800 text-5xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {iodOutSourcing.rightColumn.map((item, idx) => (
                <li key={`right-${idx}`} className="flex gap-3">
                  <span className="text-red-800 text-5xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-around mt-12">
            <p>{iodOutSourcing.footerText}</p>
            <Link
              href={""}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium px-6 py-2 rounded-full transition duration-300">
              {iodOutSourcing.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
