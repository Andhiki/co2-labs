"use client";

import {
  Hero,
  OurServices,
  Methodology,
  AboutUs,
  OurTeam,
  OurPortfolio,
  ContactUs,
} from "@/features/home";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash === "#service") {
        // Wait for the page to fully load, then scroll to services section
        setTimeout(() => {
          const servicesSection = document.getElementById("service");
          if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Hero />
      <OurServices />
      <Methodology />
      <AboutUs />
      <OurTeam />
      <OurPortfolio />
      <ContactUs />
    </>
  );
}
