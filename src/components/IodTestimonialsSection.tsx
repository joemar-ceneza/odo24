import { iodTestimonialsHeader, iodTestimonials } from "@/lib/iod-data";
import Image from "next/image";
import Link from "next/link";

export default function IodTestimonialsSection() {
  const hasHeading = typeof iodTestimonialsHeader === "string" && iodTestimonialsHeader.trim().length > 0;
  const hasTestimonials = Array.isArray(iodTestimonials) && iodTestimonials.length > 0;

  const hasContent = hasHeading || hasTestimonials;

  if (!hasContent) return null;

  return (
    <section>
      <div className="max-w-[1060px] mx-auto px-5">
        {hasHeading && <h2 className="text-3xl text-gray-600 font-bold my-5">{iodTestimonialsHeader}</h2>}

        {hasTestimonials && (
          <div className="grid grid-cols-2 gap-6 py-7 max-md:grid-cols-1">
            {iodTestimonials.map((testimonial, idx) => (
              <article key={idx} className="bg-gray-200 rounded-3xl p-5">
                <div className="flex justify-end items-center my-5">
                  <p>
                    {testimonial.name} -{" "}
                    <Link href={testimonial.companyUrl} className="text-sky-500">
                      {testimonial.company}
                    </Link>
                  </p>

                  <Image src={testimonial.avatar} alt="" width={60} height={60} className="rounded-full ml-5" />
                </div>
                <hr className="border-t border-white my-5" />
                <h3 className="text-lg font-bold my-3">{testimonial.subHeader}</h3>
                <p className="italic">{testimonial.quote}</p>
                <div className="flex my-7">
                  <p>
                    <strong>{testimonial.servicesLabel}</strong>
                  </p>
                  <ul className="flex">
                    {testimonial.services.map((service, idx) => (
                      <li key={idx} className="flex">
                        <Image src="/images/icon-check.svg" alt="check" width={25} height={25} className="mx-1" />
                        <Link href={service.url} className="text-sky-500 mr-5">
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
