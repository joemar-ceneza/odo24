import { iodScope } from "@/lib/iod-data";
import Image from "next/image";

export default function IodScopeSection() {
  return (
    <section className="bg-sky-950 text-white">
      <div className="max-w-[1060px] w-full mx-auto flex items-center justify-between px-5 py-20 gap-10 max-lg:flex-col max-lg:py-10">
        <div className="shrink-0 -mt-40 max-lg:mt-0">
          <Image
            src={iodScope.image}
            alt="Zespół IOD"
            width={400}
            height={400}
            className="scale-x-[-1] h-auto max-w-full -mt-10"
            priority
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold leading-tight mb-4">{iodScope.heading}</h2>
          <p className="mb-6 leading-relaxed">{iodScope.description}</p>
          <ul className="space-y-6">
            {iodScope.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Image src="/images/icon-check-white.svg" alt="check" width={24} height={24} className="mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
