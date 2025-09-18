import { iodDuties } from "@/lib/iod-data";
import Image from "next/image";

export default function IodDutiesSection() {
  return (
    <section className="py-16">
      <div className="max-w-[1060px] mx-auto">
        <h2 className="text-gray-600 text-3xl font-bold my-10">{iodDuties.header}</h2>
        <div className="flex justify-around items-center">
          <Image src="/images/chase-rodo.png" alt="chase-rodo" width={500} height={500} />
          <div className="w-1/2 px-5">
            <h3 className="text-gray-600 text-lg font-bold">{iodDuties.subtitle}</h3>
            <ul className="space-y-4 my-5">
              {iodDuties.items.map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="mr-3">{String(idx + 1).padEnd(2, ".")}</div>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
