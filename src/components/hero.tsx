import { Spotlight } from "@/components/ui/spotlight";

export function Hero() {
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 from-neutral-900 dark:to-neutral-400 to-neutral-600 bg-opacity-50">
          Power Your Business
          <br />
          With AskAI.
        </h1>
        <p className="mt-4 font-normal text-base dark:text-neutral-300 text-neutral-800 max-w-[34rem] text-center mx-auto">
          Unleash your Creativity with AI: Chat, Create, and Transform
          Instantly. All-in-One AI Tools to Elevate Your Imagination Seamlessly.
        </p>
      </div>
    </div>
  );
}
