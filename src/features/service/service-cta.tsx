import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";
import { Service } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function ServiceCta({ service }: { service: Service }) {
  return (
    <section className="lg:mx-28 mx-10 md:h-screen flex items-center md:my-0 my-20">
      <div className="md:flex items-center">
        {/* Garis samping */}
        <div className="lg:h-96 bg-[#EDEAE3] lg:mr-14 mr-10 lg:w-6"></div>

        {/* Card CTA */}
        <div className="md:flex-row rounded-xl shadow-xl flex flex-col items-center ">
          {/* Image */}
          <Image
            src={service.slugCtaImage}
            alt="ctaimg"
            width={500}
            height={500}
            className="object-cover md:w-96 h-96 w-full md:rounded-l-xl md:rounded-r-none rounded-t-xl"
          />

          {/* Content */}
          <div className="flex flex-col gap-5 xl:px-20 lg:px-10  p-10">
            <h3 className="font-bold text-3xl">{service.slugCtaTitle}</h3>
            <h6 className="lg:text-xl text-base font-medium">
              {service.slugCtaDescription}
            </h6>
            <Link
              href={`https://wa.me/6581181595`}
              target="_blank"
              className={cn(
                buttonVariants({ variant: "yellow" }),
                "flex items-center self-start bg-yellow-500 text-black rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop hover:scale-105 transition-all"
              )}
            >
              {service.slugCtaButton}
              <i className="bx bx-right-arrow-alt ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
