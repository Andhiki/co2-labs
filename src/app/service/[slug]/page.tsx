import { DATA } from "@/data";

export const generateStaticParams = () => {
  const services = DATA.services;
  return services.map((service: any) => ({
    slug: service.href,
  }));
};

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{params.slug}</h1>
    </main>
  );
}
