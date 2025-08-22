"use client";

import React, { useState } from "react";
import Container from "@/components/container";
import { cn } from "@/utils/cn";
import { DATA } from "@/data";

const Methodology = () => {
  return (
    <section data-aos="fade-up" className="bg-[#f8f8f7]" id="methodology">
      <Container className="items-center gap-12 pt-20">
        <div className="space-y-2 text-center" data-aos="fade-down">
          <h1 className="font-orbitron text-5xl font-semibold">
            {DATA.methodology.title}
          </h1>
          <p className="font-semibold text-2xl">
            {DATA.methodology.description}
          </p>
        </div>
      </Container>

      <section className="grid min-h-130 grid-cols-1 lg:grid-cols-3">
        {DATA.methodology.steps.map((item, i) => (
          <Card key={item.title} idx={i} {...item} />
        ))}
      </section>
    </section>
  );
};

const Card = (props: {
  idx: number;
  title: string;
  subtitle: string;
  description: string | React.ReactNode;
  list: string[];
}) => {
  const animationDelay = props.idx * 200;
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 1023px)").matches);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) setExpanded((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "group h-fit overflow-clip p-8",
        props.idx % 2 === 0 ? "bg-[#EDEAE3]" : "bg-[#ADB8BA]",
        isMobile ? "cursor-pointer" : ""
      )}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
      data-aos-duration="800"
      onClick={handleToggle}
      tabIndex={0}
      role="button"
      aria-expanded={isMobile ? expanded : undefined}
    >
      <h1 className="text-3xl font-black">{props.title}</h1>
      <h2 className="text-xl font-medium">{props.subtitle}</h2>

      <div
        className={cn(
          "space-y-2 overflow-hidden pt-4 font-medium transition-all duration-300 ease-out",
          isMobile
            ? expanded
              ? "max-h-64"
              : "max-h-0"
            : "max-h-0 group-hover:max-h-64"
        )}
      >
        {props.description}
        <ul className="list-disc pl-5 mt-5">
          {props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <svg
        className={cn(
          "transform transition-transform duration-300 ease-in-out mx-auto mt-8",
          isMobile
            ? expanded
              ? "rotate-0"
              : "rotate-180"
            : "group-hover:rotate-0 rotate-180",
          props.idx % 2 === 0 ? "text-muted-foreground" : "text-neutral-300"
        )}
        width="59"
        height="23"
        viewBox="0 0 59 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M56 20L29.5 3L3 20"
          stroke={props.idx % 2 === 0 ? "#ADB8BA" : "#EDEAE3"}
          strokeWidth="5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
  );
};

export default Methodology;
