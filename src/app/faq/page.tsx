import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function FAQ() {
  return (
    <section className="flex flex-col items-center mb-20 mt-10">
      <h1 className="text-center text-primary-500 mx-10 my-20 font-orbitron font-bold text-5xl">
        CO2 Labs Terms and Policy
      </h1>

      <div className="md:w-1/2 w-5/6">
        <details className="bg-white p-5 rounded-lg shadow-md mb-5">
          <summary className="text-2xl cursor-pointer font-bold">
            1. What services does CO2 Labs provide?
          </summary>
          <div className="mt-5 font-medium">
            <span>
              CO2 Labs specialises in offering end-to-end software solutions,
              including:
            </span>
            <ul className="list-disc ml-5 my-3">
              <li>Website and app design and development</li>
              <li>
                Maintenance and optimization for existing web and mobile
                applications
              </li>
              <li>
                CTO-level consulting for tech strategies and architecture
                planning
              </li>
              <li>IT support services</li>
              <li>Integration with third-party platforms and services</li>
            </ul>
            <span>
              We cater to businesses seeking scalable and reliable technology
              solutions to enhance their digital presence.
            </span>
          </div>
        </details>

        <details className="bg-white p-5 rounded-lg shadow-md mb-5">
          <summary className="text-2xl cursor-pointer font-bold">
            2. How much do your services cost?
          </summary>
          <div className="mt-5 font-semibold">
            <span>
              Service pricing varies based on the scope and complexity of the
              project. For example:
            </span>
            <ul className="list-disc ml-5 my-3">
              <li>
                <strong>Website Design and Development:</strong> Typically
                ranges from <strong>$5,000 to $20,000</strong>, depending on the
                features and scale.
              </li>
              <li>
                <strong>App Development:</strong> Costs can range from{" "}
                <strong>$10,000 to $50,000</strong>, depending on the
                functionality and platform requirements.
              </li>
              <li>
                <strong>Maintenance Services:</strong> Start at{" "}
                <strong>$500 per month</strong>, depending on the needs of your
                website or application.
              </li>
            </ul>
            <span>
              Please contact us to receive a customised quote for your project.
            </span>
          </div>
        </details>

        <details className="bg-white p-5 rounded-lg shadow-md mb-5">
          <summary className="text-2xl cursor-pointer font-bold">
            3. How long does it take to complete a typical project?
          </summary>
          <div className="mt-5 font-semibold">
            <span>
              The project timeline depends on the complexity and requirements of
              the task. Generally, a small-to-medium-sized website takes between{" "}
              <strong>6 to 12 weeks</strong>, while a mobile application can
              take <strong>3 to 6 months</strong> to develop. For ongoing
              maintenance, the time frame depends on the frequency and scope of
              work needed.
            </span>
          </div>
        </details>

        <details className="bg-white p-5 rounded-lg shadow-md mb-5">
          <summary className="text-2xl cursor-pointer font-bold">
            4. Do you provide post-launch support and maintenance?
          </summary>
          <div className="mt-5 font-semibold">
            <span>
              Yes, CO2 Labs offers ongoing support and maintenance for all
              websites and apps we develop. Our maintenance packages include
              regular updates, security patches, performance optimization, and
              technical support to ensure your product stays functional and
              up-to-date.
            </span>
          </div>
        </details>

        <details className="bg-white p-5 rounded-lg shadow-md mb-5">
          <summary className="text-2xl cursor-pointer font-bold">
            5. What industries do you specialise in?
          </summary>
          <div className="mt-5 font-semibold">
            <span>
              CO2 Labs works across various industries, with a special focus on:
            </span>
            <ul className="list-disc ml-5 my-3">
              <li>Catering and Hospitality</li>
              <li>Meetings, Incentives, Conferences, and Exhibitions (MICE)</li>
              <li>E-commerce and Online Businesses</li>
            </ul>
            <span>
              We have experience delivering tailored software solutions that
              address the specific needs of these industries, helping them
              streamline operations, engage customers, and improve digital
              experiences.
            </span>
          </div>
        </details>
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
