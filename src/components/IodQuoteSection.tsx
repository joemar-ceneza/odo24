import { iodQuote } from "@/lib/iod-data";
import Image from "next/image";

export default function IodQuoteSection() {
  const hasQuote = Boolean(iodQuote.quote);
  const hasImage = Boolean(iodQuote.image);

  const hasContent = hasQuote || hasImage;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-sky-950 text-white ">
      <div className="max-w-[1030px] flex justify-around items-center pt-10 px-5 mx-auto max-[950px]:flex-col">
        <div className="max-w-96">
          {iodQuote.quote && <p className="text-2xl italic mb-10 max-[950px]:mb-10">{iodQuote.quote}</p>}
        </div>
        {iodQuote.image && (
          <Image src={iodQuote.image} alt={iodQuote.alt} width={600} height={600} className="mx-auto" />
        )}
      </div>
    </section>
  );
}
