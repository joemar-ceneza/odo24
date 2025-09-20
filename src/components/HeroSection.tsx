import { iodHero } from "@/lib/iod-data";
import Link from "next/link";

export default function IodHeroSection() {
  return (
    <section className="bg-gray-200 text-center py-6">
      <div className="max-w-[662px] mx-auto px-5">
        <h1 className="text-gray-600 text-4xl text-center font-bold my-6">{iodHero.heading}</h1>
        <p className="py-3">{iodHero.description}</p>
        <div className="flex items-center justify-center my-5">
          <Link
            href={iodHero.link}
            className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-6 rounded-full transition duration-300 uppercase">
            {iodHero.ctaLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
