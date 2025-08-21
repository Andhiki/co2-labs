"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return <>{children}</>;
};

export default AnimationProvider;
