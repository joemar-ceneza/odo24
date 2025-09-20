import { iodDataProtection } from "@/lib/iod-data";
import Image from "next/image";

export default function IodDataProtectionSection() {
  return (
    <section>
      <div className="max-w-[1030px] flex justify-between items-center mx-auto px-5 max-lg:flex-col">
        <div>
          <p className="text-3xl font-bold text-gray-600 my-5">{iodDataProtection.heading}</p>
          <p className="my-5">{iodDataProtection.description}</p>
          <ul className="space-y-4">
            {iodDataProtection.items.map((item, idx) => (
              <li key={idx} className="flex items-center ml-5">
                <div className="min-w-[30px] h-[30px] bg-[#b40057] text-white font-bold flex items-center justify-center mr-4">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={iodDataProtection.image}
          alt={iodDataProtection.alt}
          width={500}
          height={500}
          className="mt-16 max-lg:mt-5"
        />
      </div>
    </section>
  );
}
