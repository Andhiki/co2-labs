import { Service } from "@/utils/types";

export default function ServiceAdvantages({ service }: { service: Service }) {
  const advantages = service.slugAdvantages;

  return (
    <section className="mt-20 mb-10 lg:mx-28 mx-10">
      <div className="m-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          {/* Judul kiri (desktop) */}
          <div className="lg:block hidden col col-left">
            <h2 className="font-orbitron text-4xl font-bold leading-normal">
              OUR
              <br />
              ADVANTAGES
            </h2>
          </div>

          {/* Konten kanan */}
          <div className="lg:col lg:col-right">
            {/* Judul atas (mobile) */}
            <div className="mb-10 flex gap-2 lg:hidden">
              <div className="bg-primary-500 w-2"></div>
              <h2>OUR ADVANTAGES</h2>
            </div>

            {/* Mapping dari data */}
            {service.slugAdvantages.map((adv, idx) => (
              <div key={idx} className="items mb-5">
                {/* Bullet + Title */}
                <div className="flex items-center gap-10 mb-4">
                  <div className="rounded-full sm:-ml-2 -ml-1 bg-[#ADB8BA] sm:w-5 w-1 sm:h-5 h-1 sm:p-0 p-2"></div>
                  <h3 className="font-bold text-3xl">{adv.title}</h3>
                </div>

                {/* Garis + Box Desc */}
                <div className="flex gap-10">
                  <div className="bg-[#ADB8BA] w-1"></div>
                  <div className="bg-white shadow-xl p-5 rounded-lg font-medium">
                    {adv.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
