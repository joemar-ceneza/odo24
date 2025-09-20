"use client";

import { iodFaqHeader, iodFaq } from "@/lib/iod-data";
import Image from "next/image";
import { useState } from "react";

export default function IodFaqSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section>
      <div className="max-w-full mx-auto bg-gray-200 px-5">
        <div className="max-w-[1060px] mx-auto flex items-center py-10 max-md:flex-col">
          <div>
            <Image src={iodFaqHeader.icon} alt={iodFaqHeader.alt} width={90} height={90} className="object-contain" />
          </div>
          <h2 className="text-4xl font-bold text-gray-600 pl-7 max-md:mt-5 max-md:text-center">
            {iodFaqHeader.header}
          </h2>
        </div>
      </div>
      <div className="max-w-[1060px] mx-auto px-5">
        <div className="space-y-4">
          {iodFaq.map((item, idx) => {
            const isOpen = openItems.has(idx);
            return (
              <div
                key={idx}
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                className="border-b border-b-gray-300 cursor-pointer">
                <button className="w-full px-6 text-left cursor-pointer">
                  <div>
                    <h2 className="text-2xl font-bold text-sky-600 my-5">
                      <span className="pr-5" aria-hidden="true">
                        {isOpen ? "-" : "+"}
                      </span>
                      {item.question}
                    </h2>
                  </div>
                </button>
                <div
                  id={`faq-answer-${idx}`}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}>
                  <div className="pl-14 pb-3">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
