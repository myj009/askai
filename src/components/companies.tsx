import Forbes from "@/assets/forbes.svg";
import Cocacola from "@/assets/coca-cola.svg";
import Facebook from "@/assets/facebook.svg";
import Google from "@/assets/google.svg";
import Microsoft from "@/assets/microsoft.svg";
import Netflix from "@/assets/netflix.svg";
import Ola from "@/assets/ola.svg";
import Spotify from "@/assets/spotify.svg";
import Xbox from "@/assets/xbox.svg";
import Image from "next/image";
import Marquee from "./ui/marquee";
import { FadeText } from "./ui/fade-text";

export default function Companies() {
  const logos = [
    { src: Google, alt: "Google" },
    { src: Forbes, alt: "Forbes" },
    { src: Microsoft, alt: "Microsoft" },
    { src: Spotify, alt: "Spotify" },
    { src: Netflix, alt: "Netflix" },
    { src: Ola, alt: "Ola" },
    { src: Cocacola, alt: "Cocacola" },
    { src: Facebook, alt: "Facebook" },
    { src: Xbox, alt: "Xbox" },
  ];

  return (
    <div className="relative w-full flex my-32 flex-col gap-12 items-center justify-center">
      <FadeText
        text="Trusted by 100+ brands and agencies, generating 100,000+ AI and
        creatives"
        className="text-muted-foreground text-2xl px-12"
      />
      {/* Trusted by 100+ brands and agencies, generating 100,000+ AI and
        creatives
      </FadeText> */}
      <div className="flex w-screen items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-black">
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
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 md:w-1/4 bg-gradient-to-r from-white dark:from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 md:w-1/4 bg-gradient-to-l from-white dark:from-black"></div>
    </div>
  );
}
