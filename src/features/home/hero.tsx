import { Button } from "@/components/ui/button";
import { DATA } from "@/data";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="h-screen flex justify-between items-center" id="hero">
      <div className="lg:ml-28 ml-10 w-full">
        <div className="lg:flex items-center justify-between box-border lg:w-2/3">
          {/* Hero Images - Right Side */}
          <div className="lg:order-2 flex justify-end items-center">
            <Image
              src={DATA.hero.image}
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
          <div className="lg:w-2/3 lg:mr-0 mr-10 lg:order-1">
            <h1
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="sm:text-5xl text-3xl sm:flex flex-col items-start font-orbitron font-bold"
            >
              <div className="mb-4">{DATA.hero.title[0]}</div>
              {DATA.hero.highlight ? (
                <span className=" sm:text-5xl text-3xl bg-[#153147] text-[#f8f8f7] px-5">
                  {DATA.hero.title[1]}
                </span>
              ) : (
                <span>{DATA.hero.title[1]}</span>
              )}
            </h1>

            <h6
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              className="my-5 text-xl font-medium leading-normal"
            >
              {DATA.hero.description}
            </h6>

            <div
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="flex gap-8 items-center"
            >
              <div className="flex justify-start w-full">
                <Link href={DATA.hero.button.url}>
                  <Button
                    size={"lg"}
                    className="rounded-md py-2 px-4 font-medium hover:scale-110 transition-all hover:shadow-primary-600 hover:shadow-md"
                  >
                    {DATA.hero.button.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
