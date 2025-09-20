import { iodScope } from "@/lib/iod-data";
import Image from "next/image";

export default function IodDeliverablesSection() {
  return (
    <section className=" bg-sky-950 text-white">
      <div className="max-w-[1060px] mx-auto flex items-center px-5 max-lg:flex-col">
        <Image src={iodScope.image} alt={iodScope.alt} width={550} height={550} className="scale-x-[-1] -mt-8" />
        <div className="px-3 py-3">
          <h2 className="text-3xl font-bold my-3 max-lg:text-center">{iodScope.heading}</h2>
          <p className="mb-6 leading-relaxed">{iodScope.description}</p>
          <ul className="space-y-4 py-3 pl-2">
            {iodScope.bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <Image src="/images/icon-check-white.svg" alt="icon-check-white" width={25} height={25} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
