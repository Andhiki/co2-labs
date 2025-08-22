import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function TermsPolicy() {
  return (
    <section className="flex flex-col items-center mb-20 mt-10">
      <h1 className="text-center text-primary-500 mx-10 my-20 font-orbitron font-bold text-5xl">
        CO2 Labs Terms and Policy
      </h1>

      <div className="md:w-1/2 w-5/6">
        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">1. Introduction</h3>
          <span className="font-medium">
            Welcome to CO2 Labs. By accessing or using our services, you agree
            to comply with and be bound by the following terms and conditions.
            Please read these terms carefully before using our website or
            engaging with our services.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">2. Services Offered</h3>
          <span className="font-medium">
            CO2 Labs provides software solutions, including website development,
            mobile application development, maintenance services, IT support,
            and CTO-level consulting. All services are subject to the terms
            outlined here, and any additional terms agreed upon in the service
            contract.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">3. Privacy Policy</h3>
          <span className="font-medium">
            Your privacy is important to us. CO2 Labs collects personal data
            such as your name, email address, and other relevant contact details
            only for communication purposes related to our services. We do not
            sell, share, or distribute your personal information to third
            parties unless required by law.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">4. Data Security</h3>
          <span className="font-medium">
            CO2 Labs takes all necessary precautions to ensure the security of
            any personal data we collect. However, we cannot guarantee absolute
            security due to the nature of online transactions and data storage.
            In the event of a data breach, we will notify you and the relevant
            authorities promptly, following legal obligations.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">5. Refund Policy</h3>
          <span className="font-medium">
            Refunds for services provided by CO2 Labs will be handled on a
            case-by-case basis. Clients must notify us within{" "}
            <strong>7 days</strong> of any dissatisfaction with the services
            provided. We reserve the right to either rectify the issue or offer
            a partial or full refund, depending on the circumstances and the
            service contract.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">6. Intellectual Property</h3>
          <span className="font-medium">
            All content, designs, and software developed by CO2 Labs are
            protected by intellectual property laws. Unless otherwise stated in
            the service agreement, CO2 Labs retains ownership of all
            intellectual property created during the project. Clients are
            granted a license to use the product under specific terms agreed
            upon in the contract.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">
            7. Relationship to Coding Collective
          </h3>
          <span className="font-medium">
            CO2 Labs is a related entity to{" "}
            <strong>Coding Collective Pte Ltd</strong>, a company that
            specializes in IT Outsourcing, HR Outsourcing, and Offshore Software
            Development. We work closely with Coding Collective to deliver
            high-quality, comprehensive solutions to our clients, ensuring both
            companies meet the evolving needs of businesses in the digital
            landscape.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">8. Limitation of Liability</h3>
          <span className="font-medium">
            CO2 Labs shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of our services,
            including but not limited to lost profits, data loss, or business
            interruption. Our total liability to clients shall not exceed the
            fees paid for the services rendered.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">
            9. Third-Party Links and Services
          </h3>
          <span className="font-medium">
            Our website or services may include links to third-party services or
            websites. CO2 Labs is not responsible for the content, privacy
            policies, or practices of these third parties. Use of such services
            is at your own risk, and we recommend reviewing their policies
            before engagement.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">10. Modification of Terms</h3>
          <span className="font-medium">
            CO2 Labs reserves the right to modify these terms at any time.
            Changes will be effective immediately upon posting on our website.
            Continued use of our services after any modifications indicates your
            acceptance of the updated terms.
          </span>
        </div>

        <div className="flex flex-col gap-5 mb-10">
          <h3 className="font-bold text-3xl">11. Contact Information</h3>
          <span className="font-medium">
            If you have any questions or concerns regarding these terms, our
            services, or your personal data, please contact us at:
            <ul className="list-disc ml-5 mt-2">
              <li>Email: info@co2labs.com</li>
              <li>Address: 100D Pasir Panjang Road #02-08 S118520</li>
            </ul>
          </span>
        </div>
      </div>

      <Link
        href="/"
        className={buttonVariants({ variant: "default", size: "lg" })}
      >
        Bring me back <i className="bx bx-left-arrow-alt"></i>
      </Link>
    </section>
  );
}
