import Container from "@/components/container";
import { DATA } from "@/data";

export default function ContactUs() {
  return (
    <section className="lg:mx-28 mx-10 flex flex-col gap-16 py-24" id="contact">
      <div className="md:flex justify-between">
        <h1>{DATA.contact.title}</h1>
        <div className="flex sm:gap-20 gap-10 justify-center items-center md:mt-0 mt-10">
          {DATA.contact.socials.map((social, idx) => (
            <a key={idx} href={social.url} target="_blank" rel="noreferrer">
              <img src={social.icon} alt={social.type} className="w-10 h-10" />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:flex xl:gap-24 gap-5 lg:justify-between">
        {/* Form */}
        <form className="bg-white flex flex-col justify-center md:p-14 p-5 lg:w-1/2 gap-5 rounded-xl shadow-xl">
          <h4>{DATA.contact.form.title}</h4>

          {DATA.contact.form.fields.map((field, idx) =>
            field.type === "textarea" ? (
              <textarea
                key={idx}
                className="px-8 py-3 rounded-lg bg-gray-200 w-full h-24"
                placeholder={field.placeholder}
                required={field.required}
              />
            ) : (
              <input
                key={idx}
                type={field.type}
                className="px-8 py-3 rounded-lg bg-gray-200 w-full"
                placeholder={field.placeholder}
                required={field.required}
              />
            )
          )}

          <h5>{DATA.contact.form.referralTitle}</h5>
          <div className="flex flex-wrap gap-4">
            {DATA.contact.form.referralOptions.map((option, idx) => (
              <div className="flex items-center gap-2" key={idx}>
                <input
                  type="radio"
                  id={option}
                  value={option}
                  name="referral"
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>

          <button className="bg-primary-500 rounded-md py-2 px-4 font-medium font-generalsans shadow-custom-drop text-bgbase block self-start">
            {DATA.contact.form.button}
          </button>
        </form>

        {/* Map */}
        <div className="lg:w-1/2">
          <iframe
            className="w-full h-full rounded-xl lg:mt-0 mt-10"
            src={DATA.contact.mapEmbed}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
