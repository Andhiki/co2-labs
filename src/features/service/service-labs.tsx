import { Service } from "@/utils/types";

export default function ServiceLabs({ service }: { service: Service }) {
  return (
    <section className="bg-[#153147] lg:px-28 px-10 lg:h-screen flex flex-col justify-center gap-5 lg:py-0 py-10 text-white">
      {/* Title */}
      <div className="font-orbitron">
        <h1
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-anchor-placement="bottom-bottom"
          className="text-[#738391] sm:text-9xl text-8xl font-bold"
        >
          CO2
        </h1>
        <h1
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-anchor-placement="bottom-bottom"
          className="text-[#F9F8F6] sm:-mt-14 -mt-12 ml-2 sm:text-5xl text-4xl font-bold"
        >
          CO2 Labs
        </h1>
      </div>

      {/* Content */}
      <div className="flex lg:flex-row flex-col justify-between items-center py-10">
        {/* Image */}
        <div className="bg-gradient-to-b from-[#F9F8F6]/21 to-transparent rounded-lg flex items-end justify-center md:w-[500px] w-full px-20 py-10">
          <img
            src={service.slugContentImage}
            alt="intro img"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-anchor-placement="bottom-bottom"
          />
        </div>

        {/* Description */}
        <h6
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-anchor-placement="bottom-bottom"
          className="lg:text-end lg:w-1/2 text-center mt-5 lg:mt-0 font-medium text-xl"
        >
          {service.slugContentDescription}
        </h6>
      </div>
    </section>
  );
}
