import { DATA } from "@/data";
import ServiceHero from "@/features/service/service-hero";
import ServiceLabs from "@/features/service/service-labs";
import ServiceAdvantages from "@/features/service/service-advantages";
import ServiceCta from "@/features/service/service-cta";
import { Service } from "@/utils/types";

export const generateStaticParams = () => {
  const services = DATA.services;
  return services.map((service: Service) => ({
    slug: service.href,
  }));
};

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const service = DATA.services.find(
    async (service: Service) => service.href === (await params).slug
  );

  return (
    <>
      <ServiceHero service={service!} />
      <ServiceLabs service={service!} />
      <ServiceAdvantages service={service!} />
      <ServiceCta service={service!} />
    </>
  );
}
