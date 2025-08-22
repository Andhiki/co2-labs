import { DATA } from "@/data";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/utils/cn";
import Image from "next/image";
import * as React from "react";

// Import shadcn sheet components
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
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

      {/* Mobile Menu Button */}
      <div className="lg:hidden order-2 flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <button
              aria-label="Open menu"
              className="p-2 rounded-md border border-gray-200 bg-white shadow-sm"
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="p-4 border-b">
              <SheetTitle>
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  tabIndex={-1}
                >
                  <Image
                    src={DATA.nav.logo}
                    alt="logo"
                    className="w-10 invert"
                    width={40}
                    height={40}
                  />
                  <span className="font-bold text-lg">Coding Collective</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 p-4">
              {DATA.nav.links.map((link, i) =>
                link.type === "dropdown" ? (
                  <div key={i} className="mb-2">
                    <div className="font-generalsans font-medium text-base flex items-center mb-1">
                      {link.label}
                    </div>
                    <ul className="ml-2 flex flex-col gap-1">
                      {link.items?.map((item, j) => (
                        <li key={j}>
                          <SheetClose asChild>
                            <a
                              href={item.url}
                              className="flex items-center gap-3 p-2 rounded hover:bg-gray-100 transition"
                            >
                              <div
                                className={`${item.iconBg} w-10 h-10 rounded flex justify-center items-center`}
                              >
                                {/* Icon placeholder */}
                                <span className="text-lg">🌐</span>
                              </div>
                              <div>
                                <h5 className="font-semibold">{item.title}</h5>
                                <p className="font-generalsans font-medium text-xs">
                                  {item.desc}
                                </p>
                              </div>
                            </a>
                          </SheetClose>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <SheetClose asChild key={i}>
                    <a
                      href={link.url}
                      className="font-generalsans font-medium text-base p-2 rounded hover:bg-gray-100 transition block"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                )
              )}
              <SheetClose asChild>
                <Link
                  href={DATA.nav.cta.url}
                  className={cn(
                    buttonVariants({ variant: "default", size: "lg" }),
                    "bg-[#153147] mt-4 w-full justify-center"
                  )}
                >
                  {DATA.nav.cta.text}
                </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
