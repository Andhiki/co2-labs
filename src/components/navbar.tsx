"use client";

import { DATA } from "@/data";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/utils/cn";
import Image from "next/image";
import * as React from "react";
import MobileNav from "./mobile-nav";

export interface NavigationLink {
  name: string;
  href?: string;
  children?: NavigationLink[];
}

export default function Navbar() {
  // Convert DATA.nav.links to NavigationLink format
  const navigationLinks: NavigationLink[] = DATA.nav.links.map((link) => {
    if (link.type === "dropdown" && link.items) {
      return {
        name: link.label,
        children: link.items.map((item) => ({
          name: item.title,
          href: item.url,
        })),
      };
    } else {
      return {
        name: link.label,
        href: link.url,
      };
    }
  });

  return (
    <nav className="flex lg:flex-row flex-row items-center justify-between top-0 z-20 lg:px-28 px-10 py-3 fixed w-screen transition-all duration-300 ease-in-out bg-[#f8f8f7] h-auto">
      {/* Logo */}
      <Link href="/" className="order-1">
        <Image
          src={DATA.nav.logo}
          alt="logo"
          className="w-15 invert"
          width={100}
          height={100}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="order-2 lg:flex gap-10 hidden">
        {DATA.nav.links.map((link, i) =>
          link.type === "dropdown" ? (
            <li key={i} className="relative group">
              <button className="font-medium text-xl flex items-center">
                {link.label}
                <i className="bx bx-chevron-down ml-2 transform transition-transform duration-300 ease-in-out group-hover:rotate-180"></i>
              </button>
              {/* Dropdown */}
              <div className="absolute left-0 bg-white border-gray-200 border-[1px] rounded-lg hidden opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300 ease-in-out w-[825px] shadow-lg">
                <ul className="drop p-2 grid grid-cols-2 gap-2">
                  {link.items?.map((item, j) => (
                    <li key={j}>
                      <a
                        href={item.url}
                        className="flex items-center gap-5 w-[400px] p-2 text-gray-700 hover:bg-gray-50"
                      >
                        <div
                          className={`${item.iconBg} w-16 h-16 rounded-md flex justify-center items-center`}
                        >
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-xl">
                            {item.title}
                          </h5>
                          <p className="font-semibold text-xs w-60">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ) : (
            <li key={i}>
              <a
                href={link.url}
                className="font-generalsans font-medium text-xl"
              >
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>

      {/* CTA Button (Desktop) */}
      <Link
        href={DATA.nav.cta.url}
        className={cn(
          buttonVariants({ variant: "default", size: "lg" }),
          "bg-[#153147] order-3 lg:block hidden hover:scale-110 transition-all hover:shadow-primary-600 hover:shadow-md"
        )}
      >
        {DATA.nav.cta.text}
      </Link>

      {/* Mobile Navigation */}
      <div className="lg:hidden order-2">
        <MobileNav links={navigationLinks} />
      </div>
    </nav>
  );
}
