import { iodScope } from "@/lib/iod-data";
import Image from "next/image";

export default function IodScopeSection() {
  return (
    <section className="bg-sky-950 text-white">
      <div className="max-w-full w-[1060px] flex justify-between items-center mx-auto px-5 max-lg:flex-col">
        <Image
          src="/images/man-with-documents.png"
          alt="Zespół IOD"
          width={500}
          height={500}
          className="scale-x-[-1] -mt-48 max-lg:mt-0"
        />
        <div className="max-w-3/4 py-20 max-lg:py-8 max-lg:max-w-full">
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
