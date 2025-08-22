"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AnimationProvider = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      once: false,
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

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return <>{children}</>;
};

export default AnimationProvider;
