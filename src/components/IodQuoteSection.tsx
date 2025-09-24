import { quote } from "@/data/iod/quote";
import Image from "next/image";

export default function IodQuoteSection() {
  const hasQuote = Boolean(quote.quote);
  const hasImage = Boolean(quote.image);

  const hasContent = hasQuote || hasImage;

  if (!hasContent) {
    return null;
  }

  return (
    <section className="bg-sky-950 text-white ">
      <div className="max-w-[1030px] flex justify-around items-center pt-10 px-5 mx-auto max-[950px]:flex-col">
        <div className="max-w-96">
          {quote.quote && <p className="text-2xl italic mb-10 max-[950px]:mb-10">{quote.quote}</p>}
        </div>
        {quote.image && <Image src={quote.image} alt={quote.alt} width={600} height={600} className="mx-auto" />}
      </div>
    </section>
  );
}
