"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 700,
      easing: "ease-out-cubic",
    });

    const handleLoad = () => {
      AOS.refreshHard();
    };
    if (typeof window !== "undefined") {
      window.addEventListener("load", handleLoad);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;
