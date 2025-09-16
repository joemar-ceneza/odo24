import { iodScope } from "@/lib/iod-data";
import Image from "next/image";

export default function IodQuoteSection() {
  return (
    <section className="bg-sky-950 text-white">
      <div className="max-w-full w-[1050px] flex justify-between items-center mx-auto">
        <Image
          src="/images/man-with-documents.png"
          alt="Zespół IOD"
          width={500}
          height={500}
          className="scale-x-[-1] -mt-10"
        />
        <div className="max-w-3/4">
          <p className="text-3xl font-bold">{iodScope.heading}</p>
          <p className="py-3">{iodScope.description}</p>
          <ul className="space-y-3 py-3">
            {iodScope.bullets.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="text-white text-5xl">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
