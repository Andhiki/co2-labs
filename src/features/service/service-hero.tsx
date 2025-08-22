import { Button } from "@/components/ui/button";
import { DATA } from "@/data";
import { Service } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <header className="h-screen flex justify-between items-center" id="hero">
      <div className="lg:ml-28 ml-10 w-full">
        <div className="lg:flex items-center justify-between box-border lg:w-2/3">
          {/* Hero Images - Right Side */}
          <div className="lg:order-2 flex justify-end items-center">
            <Image
              src={service.slugHeroImage}
              className="lg:w-96 sm:w-1/2 w-2/3 absolute md:right-40 right-20 rounded-xl shadow-md"
              alt="Hero Image"
              width={500}
              height={500}
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            />
            <Image
              src={DATA.hero.backdrop}
              className="-z-10 lg:w-[400px] sm:w-1/2 w-2/3 lg:absolute right-0"
              alt="Backdrop"
              width={500}
              height={500}
            />
          </div>

          {/* Hero Text */}
          <div className="lg:w-2/3 lg:mr-0 mr-10 lg:order-1 relative">
            <Image
              src={`/services/quote.png`}
              alt="Service Hero Image"
              width={500}
              height={500}
              className="absolute top-0 left-0 w-25 -translate-x-[44px] -translate-y-[54px]"
            />
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="sm:text-5xl text-3xl sm:flex flex-col items-start font-orbitron font-bold"
            >
              {service.slugHeroTitle}
            </h1>

            <h6
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="my-5 text-xl font-medium leading-normal"
            >
              "{service.slugHeroDescription}"
            </h6>
            <div className="w-40 border-t-4 border-[#153147]" />
          </div>
        </div>
      </div>
    </header>
  );
}
