import { iodQuote } from "@/lib/iod-data";
import Image from "next/image";

export default function IodQuoteSection() {
  return (
    <section className="bg-sky-950 text-white ">
      <div className=" flex justify-center items-center mx-auto pt-10">
        <div className="max-w-96">
          <p className="text-2xl italic">{iodQuote}</p>
        </div>
        <Image src="/images/outsourcing-iod-zespol-odo-24-a.png" alt="Zespół IOD" width={600} height={600} />
      </div>
    </section>
  );
}
