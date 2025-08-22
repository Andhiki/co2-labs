"use client";

import * as m from "motion/react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavigationLink } from "./navbar";
import { usePathname } from "next/navigation";

const MobileNav = (props: { links: NavigationLink[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size={`icon`}
        variant={`ghost`}
        className="size-12 lg:hidden"
      >
        <Menu className="size-8" strokeWidth={3} />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-60 overflow-clip bg-black/50 lg:hidden"
              style={{ overflow: "hidden" }}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3, type: "tween", ease: "easeOut" }}
              className="fixed top-0 left-0 z-70 flex h-screen w-80 flex-col gap-4 overflow-y-auto bg-white p-4 shadow-lg lg:hidden"
            >
              <Button
                onClick={() => setIsOpen(false)}
                size={`icon`}
                variant={`ghost`}
                className="size-12"
              >
                <X className="size-8" />
              </Button>

              {props.links.map((link, index) => (
                <ListItem
                  key={index}
                  {...link}
                  onClose={() => setIsOpen(false)}
                />
              ))}

              <Button size={`lg`} asChild className="mt-4">
                <Link
                  href={`https://api.whatsapp.com/send/?phone=6581181595&text=Hi+Co2%2C+I+would+like+ask+about+your+services.&type=phone_number&app_absent=0`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Get Started Today!
                </Link>
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

const ListItem = (props: NavigationLink & { onClose: () => void }) => {
  const handleServiceClick = () => {
    if (props.name === "Our Services") {
      // Check if we're on the home page
      if (window.location.pathname === "/") {
        // If on home page, just scroll to services section
        const servicesSection = document.getElementById("service");
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // If on other page, navigate to home page with services hash
        window.location.href = "/#service";
      }
      props.onClose();
    }
  };

  return (
    <>
      <Button
        asChild={!!props.href}
        variant={`accent`}
        size={`lg`}
        className={`w-full justify-start text-left ${
          !props.href && "hover:cursor-default"
        }`}
        onClick={!props.href ? handleServiceClick : undefined}
      >
        {props.href ? (
          <Link href={props.href} onClick={props.onClose}>
            {props.name}
          </Link>
        ) : (
          <>{props.name}</>
        )}
      </Button>

      {props.children && (
        <ul className="list-disc pl-6">
          {props.children.map((child, i) => (
            <li key={i}>
              <Button asChild={!!child.href} variant={`link`}>
                {child.href ? (
                  <Link
                    className="underline"
                    href={child.href}
                    onClick={props.onClose}
                  >
                    {child.name}
                  </Link>
                ) : (
                  <>{child.name}</>
                )}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobileNav;
