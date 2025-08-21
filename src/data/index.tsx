export const DATA = {
  hero: {
    title: "Where Code Meets Creativity",
    description:
      "Harnessing the power of our Coding Collective to build solutions for your business needs.",
    button: "Get a free consult",
    image: "/images/hero.jpg",
  },
  services: {
    "web-main": {
      icon: "💻",
      title: "Web Development",
      description:
        "We build custom websites and web applications to meet your business needs.",
      slugHeroTitle: "Web Development",
      slugHeroDescription: "Custom websites and web applications",
      slugHeroImage: "/images/hero.jpg",
      slugContentImage: "/images/hero.jpg",
      slugContentDescription:
        "We build custom websites and web applications to meet your business needs.",
      slugAdvantages: [
        {
          title: "Agile Development",
          description:
            "We use agile methodologies to deliver projects on time and within budget.",
        },
        {
          title: "Custom Development",
          description:
            "We build custom websites and web applications to meet your business needs.",
        },
      ],
      slugCtaTitle: "Get a free consult",
      slugCtaDescription:
        "We build custom websites and web applications to meet your business needs.",
      slugCtaButton: "Get a free consult",
      slugCtaImage: "/images/hero.jpg",
    },
  },
  portfolio: {
    title: "Our Portfolio",
    projects: [
      {
        title: "AOTC Cosmetics",
        image: "/images/aotc-cosmetics.png",
        link: "https://aotccosmetics.com",
      },
      {
        title: "Nosh kitchen Website",
        image: "/images/nosh-kitchen.png",
        link: "https://noshkitchen.com",
      },
      {
        title: "Michelah Event Organizer Singapore",
        image: "/images/michelah-event.png",
        link: "https://michelah.com.sg",
      },
      {
        title: "Joywaltzstudio Academy",
        image: "/images/joywaltzstudio-academy.png",
        link: "https://joywaltzstudio.com/academy",
      },
      {
        title: "Octopay Payment",
        image: "/images/octopay-payment.png",
        link: "https://octopay.com",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        question: "What is the best way to contact you?",
        answer: "You can contact us by email or phone.",
      },
    ],
  },
  footer: {
    title: "Let’s Grow With CO2 Labs",
    description: "Get Exclusive Updates From Us",
    button: "Get a free consult",
    image: "/images/hero.jpg",
    copyright: "©2024 CO2 Labs. All Right Reserved",
    content: {
      newsletter: {
        heading: "Let’s Grow With CO2 Labs",
        subheading: "Get Exclusive Updates From Us",
        placeholder: "Yourmail@example.com",
        button: "Subscribe",
      },
      services: {
        title: "Services",
        links: [
          {
            title: "Web Maintenance",
            href: "/services/web-main",
          },
          {
            title: "Web & App Development",
            href: "/services/web-dev",
          },
          {
            title: "IT Service",
            href: "/services/it-support",
          },
          {
            title: "3rd Party AI Solution",
            href: "/services/ai-solution",
          },
        ],
      },
      about: {
        title: "About",
        links: [
          {
            title: "Our Approach",
            href: "/about-us#approach",
          },
          {
            title: "Our Team",
            href: "/our-team",
          },
          {
            title: "Our Portfolio",
            href: "/our-portfolio",
          },
        ],
      },
      contact: {
        title: "Contact",
        links: [
          {
            title: "Phone",
            icon: <i className="bx bxs-phone text-2xl mr-2"></i>,
            value: "+65-8118-1595",
            href: "https://wa.me/6581181595",
          },
          {
            title: "Email",
            icon: <i className="bx bxl-gmail text-2xl mr-2"></i>,
            value: "info@co2labs.com",
            href: "mailto:info@co2labs.com",
          },
          {
            title: "Address",
            icon: <i className="bx bx-map-alt text-2xl mr-2"></i>,
            value: "100D Pasir Panjang Road",
            href: "https://maps.app.goo.gl/sXvWLYMD6nfN7pK3A",
          },
        ],
      },
      bottomLinks: [
        { title: "FAQ", href: "/faq" },
        { title: "Terms & Policy", href: "/terms-policy" },
      ],
    },
  },
};
