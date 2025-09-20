import { iodQuote } from "@/lib/iod-data";
import Image from "next/image";

export default function IodQuoteSection() {
  return (
    <section className="bg-sky-950 text-white ">
      <div className="max-w-[1030px] flex justify-around items-center pt-10 px-5 mx-auto max-[950px]:flex-col">
        <div className="max-w-96">
          <p className="text-2xl italic max-[950px]:mb-10">{iodQuote}</p>
        </div>
        <Image src="/images/outsourcing-iod-zespol-odo-24-a.png" alt="Zespół IOD" width={600} height={600} />
      </div>
    </section>
  );
}
