import { iodQuote } from "@/lib/iod-data";
import Image from "next/image";

export default function IodQuoteSection() {
  return (
    <section className="bg-sky-900 text-white">
      <div className=" flex justify-center items-center mx-auto pb-20">
        <Image
          src="/images/man-with-documents.png"
          alt="Zespół IOD"
          width={500}
          height={500}
          className="scale-x-[-1] -mt-10"
        />
        <div className="max-w-96">
          <p className="text-2xl italic">{iodQuote}</p>
        </div>
      </div>
    </section>
  );
}
