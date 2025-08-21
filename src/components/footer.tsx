import Container from "@/components/container";
import { DATA } from "@/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#141516] text-white">
      <Container>
        <div className="lg:flex lg:justify-between">
          {/* Kiri */}
          <div className="flex flex-col justify-between">
            <h3 className="text-2xl font-bold">{DATA.footer.title}</h3>
            <div className="flex flex-col gap-5">
              <h5 className="text-lg">{DATA.footer.description}</h5>
              <form className="flex ">
                <input
                  type="email"
                  name="user_email"
                  placeholder={DATA.footer.content.newsletter.placeholder}
                  className="py-2 px-5 rounded-l-full text-black sm:w-72 w-full bg-white"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 py-2 px-5 rounded-r-full font-semibold text-black"
                >
                  {DATA.footer.content.newsletter.button}
                </button>
              </form>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex xl:ml-0 lg:ml-10 flex-wrap gap-8 lg:mt-0 mt-20">
            {/* Services */}
            <ul>
              <h6 className="text-lg font-semibold mb-3">
                {DATA.footer.content.services.title}
              </h6>
              {DATA.footer.content.services.links.map((link) => (
                <li key={link.title} className="mb-2 list-disc list-inside">
                  <Link
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* About */}
            <ul>
              <h6 className="text-lg font-semibold mb-3">
                {DATA.footer.content.about.title}
              </h6>
              {DATA.footer.content.about.links.map((link) => (
                <li key={link.title} className="mb-2 list-disc list-inside">
                  <Link
                    href={link.href}
                    className="hover:text-yellow-400 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact */}
            <ul>
              <h6 className="text-lg font-semibold mb-3">
                {DATA.footer.content.contact.title}
              </h6>
              {DATA.footer.content.contact.links.map((link) => (
                <li
                  key={link.title}
                  className="mb-2 list-disc list-outside ml-4"
                >
                  <Link
                    href={link.href}
                    className="flex items-center hover:text-yellow-400 transition-colors"
                  >
                    {link.icon}
                    <span>{link.value}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex sm:flex-row flex-col-reverse justify-between mt-10">
          <span className="text-sm">{DATA.footer.copyright}</span>
          <div className="flex gap-10 sm:mb-0 mb-5">
            {DATA.footer.content.bottomLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="hover:text-yellow-400 transition-colors"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
