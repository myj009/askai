import React from "react";
import Marquee from "./ui/marquee";
import Image from "next/image";
import Google from "@/assets/google.svg";
import Microsoft from "@/assets/microsoft.svg";
import Netflix from "@/assets/netflix.svg";
import Airbnb from "@/assets/airbnb.svg";
import Ola from "@/assets/ola.svg";
import Spotify from "@/assets/spotify.svg";
import Cocacola from "@/assets/coca-cola.svg";
import Facebook from "@/assets/facebook.svg";
import Xbox from "@/assets/xbox.svg";

export default function Companies() {
  const logos = [
    { src: Google, alt: "Google" },
    { src: Airbnb, alt: "Airbnb" },
    { src: Microsoft, alt: "Microsoft" },
    { src: Spotify, alt: "Spotify" },
    { src: Netflix, alt: "Netflix" },
    { src: Ola, alt: "Ola" },
    { src: Cocacola, alt: "Cocacola" },
    { src: Facebook, alt: "Facebook" },
    { src: Xbox, alt: "Xbox" },
  ];

  return (
    <div className="relative flex h-[200px] my-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            className="h-32 w-48 md:w-60 self-center items-center"
          />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
}
