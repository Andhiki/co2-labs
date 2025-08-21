import Image from "next/image";
import { DATA } from "@/data";
import Container from "@/components/container";

export default function OurPortfolio() {
  return (
    <Container className="gap-12 bg-[#153147]" id="portfolio">
      <h1 className="font-orbitron text-5xl font-semibold text-white">
        {DATA.portfolio.title}
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {DATA.portfolio.projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-70 flex-col gap-2 rounded-lg p-2 text-white"
          >
            <div className="relative aspect-square w-full overflow-clip rounded-lg">
              <Image
                // src={project.image}
                src="/placeholder.png"
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="/placeholder.png"
                className="object-cover transition-transform duration-300 ease-out group-hover:scale-105"
              />
            </div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </a>
        ))}
      </div>
    </Container>
  );
}
