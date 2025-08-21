import Container from "@/components/container";
import { DATA } from "@/data";

export default function OurServices() {
  return (
    <Container
      className="bg-[#153147] flex items-center justify-center"
      id="service"
    >
      <div className="flex flex-col gap-8">
        <h1 className="sm:text-center xl:text-left text-bgbase sm:mx-0 mx-10 font-orbitron text-5xl font-semibold text-white">
          Our Services
        </h1>

        <div className="flex flex-wrap gap-3 justify-center">
          {DATA.services.map((service) => (
            <div
              key={service.href}
              className="rounded-xl bg-white h-96 w-72 p-7 flex flex-col items-center justify-center"
            >
              <div className="bg-[#EFF1F1] w-20 h-20 flex justify-center items-center rounded-full mb-5">
                {/* <i className={`bx ${service.icon} text-2xl`}></i> */}
                {service.icon}
              </div>
              <h5 className="text-center font-semibold text-xl">
                {service.title}
              </h5>
              <span className="text-center my-5 font-medium">
                {service.description}
              </span>
              <a
                href={`/service/${service.href}`}
                className="font-generalsans font-semibold text-base hover:text-blue-900 underline text-black"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
