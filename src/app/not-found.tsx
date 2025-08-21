import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  const nf = DATA.notFound;

  return (
    <section className="text-primary-500 flex flex-col items-center justify-center h-screen gap-5">
      {/* Logo */}
      <div>
        <Image
          src={DATA.nav.logo}
          alt="brand-logo"
          className="w-18 invert"
          width={100}
          height={100}
        />
      </div>

      {/* Title + Code */}
      <h4 className="font-semibold text-2xl">{nf.title}</h4>
      <h1 className="font-semibold text-9xl text-[#153147]">{nf.code}</h1>
      <h6 className="text-gray-400 mx-5 text-lg font-medium">
        {nf.description}
      </h6>

      {/* CTA */}
      <Link
        href={nf.cta.url}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "bg-[#153147] rounded-lg px-4 py-2 flex items-center gap-2"
        )}
      >
        {nf.cta.text}
        <i className="bx bx-left-arrow-alt"></i>
      </Link>

      {/* Contacts */}
      <div className="flex flex-wrap justify-center gap-5">
        {nf.contacts.map((contact, i) => (
          <Link
            key={i}
            href={contact.url}
            className="flex items-center text-gray-700 hover:text-primary-500 font-semibold"
          >
            <i className={`bx ${contact.icon} text-2xl mr-1`}></i>
            {contact.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
