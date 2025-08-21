// src/components/Team.tsx
import Image from "next/image";
import { DATA } from "@/data";
import Container from "@/components/container";

export default function OurTeam() {
  return (
    <Container className="flex flex-col justify-center bg-[#f8f8f7]" id="team">
      {/* Title */}
      <div className="flex justify-between lg:mb-32 mb-20 lg:mx-0 mx-10">
        <h1 className="text-5xl font-semibold font-orbitron">
          {DATA.team.title}
        </h1>
      </div>

      {/* Team Members */}
      <div className="lg:flex gap-5">
        {DATA.team.members.map((member) => (
          <div
            key={member.name}
            className="lg:bg-white rounded-2xl lg:shadow-lg lg:w-1/3 lg:px-10 md:px-36 px-10 pb-10 lg:hover:scale-110 lg:hover:shadow-2xl transition-all"
          >
            <div className="flex flex-col items-center">
              <div className="lg:-mt-24">
                <Image
                  // src={member.image}
                  src="/placeholder.png"
                  alt={member.name}
                  width={192}
                  height={192}
                  className="shadow-lg rounded-full w-48 h-48 object-cover"
                />
              </div>
              <h4 className="mt-4 text-xl font-semibold">{member.name}</h4>
              <span className="font-semibold text-center">{member.role}</span>
              <div className="italic text-center mt-2 text-xs leading-relaxed font-medium">
                {member.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
