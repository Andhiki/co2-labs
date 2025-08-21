import Container from "@/components/container";
import { DATA } from "@/data";
import Image from "next/image";

export default function AboutUs() {
  return (
    // <section className="lg:h-screen flex items-center mb-40" id="about">
    <Container
      className="lg:flex gap-20 lg:flex-row lg:h-screen items-center mb-24 bg-[#f8f8f7]"
      id="about"
    >
      {/* Left: Text */}
      <div className="lg:text-right flex flex-col lg:items-end items-center justify-center lg:w-1/2 lg:gap-11 gap-5">
        <h1 className="font-orbitron text-5xl font-semibold">
          {DATA.about.title}
        </h1>
        <h6 className="font-medium text-xl">{DATA.about.description}</h6>

        {/* Wave Line */}
        <div>
          <svg
            className="xl:w-[600px] w-full"
            height="81"
            viewBox="0 0 710 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
              stroke="#EDEAE3"
              strokeWidth="20"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center items-center lg:w-1/2">
        <Image
          src={DATA.about.image}
          alt="About us illustration"
          className="rounded-xl outline-1 w-full aspect-[1600/1196]"
          width={500}
          height={500}
        />
      </div>
    </Container>
    // </section>
  );
}
