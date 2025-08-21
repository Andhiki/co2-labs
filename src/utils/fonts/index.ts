import { Orbitron } from "next/font/google";
import localFont from "next/font/local";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const body = localFont({
  src: "./general-sans.woff2",
  variable: "--font-body",
  style: "normal",
});

export { body, orbitron };
