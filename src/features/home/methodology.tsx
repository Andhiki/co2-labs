"use client";

import React, { useEffect } from "react";
import AOS from "aos";
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

  return (
    <div
      className={`group h-fit overflow-clip p-8 ${
        props.idx % 2 === 0 ? "bg-[#EDEAE3]" : "bg-[#ADB8BA]"
      }`}
      data-aos="fade-up"
      data-aos-delay={animationDelay}
      data-aos-duration="800"
    >
      <h1 className="text-3xl font-black">{props.title}</h1>
      <h2 className="text-xl font-medium">{props.subtitle}</h2>

      <div className="max-h-0 space-y-2 overflow-hidden pt-4 font-medium transition-all duration-300 ease-out group-hover:max-h-64">
        {props.description}
        <ul className="list-disc pl-5 mt-5">
          {props.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <svg
        className={cn(
          "transform transition-transform duration-300 ease-in-out group-hover:rotate-0 rotate-180 mx-auto mt-8",
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
