import { iodScope } from "@/lib/iod-data";
import Image from "next/image";

export default function IodQuoteSection() {
  return (
    <section className="bg-sky-950 text-white">
      <div className="max-w-full w-[1060px] flex justify-between items-center mx-auto">
        <Image
          src="/images/man-with-documents.png"
          alt="Zespół IOD"
          width={500}
          height={500}
          className="scale-x-[-1] -mt-40"
        />
        <div className="max-w-3/4 py-20">
          <p className="text-3xl font-bold">{iodScope.heading}</p>
          <p className="py-3">{iodScope.description}</p>
          <ul className="space-y-6 py-3">
            {iodScope.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Image src="/images/icon-check-white.svg" alt="check" width={25} height={25} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
