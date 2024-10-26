"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

type cursorProp = {
  cursorClass?: string;
};
export const Cursor = ({ cursorClass }: cursorProp) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailerType, setTrailertype] = useState("default");
  const [isInteracting, setIsInteracting] = useState(false);
  const [isClicked, SetIsClicked] = useState(false);

  const cursorRef = useRef(null);
  const animateTrailer = (e: any) => {
    const x =
      e.clientX - (cursorRef.current as unknown as HTMLElement).offsetWidth / 2;
    const y =
      e.clientY -
      (cursorRef.current as unknown as HTMLElement).offsetHeight / 2;

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${isInteracting ? 3 : 1})`,
    };

    (cursorRef.current as unknown as HTMLElement)?.animate(keyframes, {
      duration: 100,
      fill: "forwards",
    });
  };
  const getTrailerClass = (type: any) => {
    switch (type) {
      case "video":
        return "fa-solid fa-play";
      default:
        return "ri-arrow-right-up-line";
    }
  };
  useEffect(() => {
    const handleMouseMove = (e: any) => {
      const interactable = e.target.closest(".interactable");
      const interacting = interactable !== null;

      animateTrailer(e);

      setTrailertype(interacting ? interactable.dataset.type : "");
      setIsInteracting(interacting);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isInteracting]);

  useEffect(() => {
    window.addEventListener("click", (event: any) => {
      SetIsClicked(true);
      setTimeout(() => {
        SetIsClicked(false);
      }, 100);
    });
  }, []);
  return (
    <>
      <motion.div
        whileTap={{ scale: 0.9 }}
        id="trailer"
        style={{ top: `${position.y}px`, left: `${position.x}px` }}
        className={cn(
          "bg-transparent rounded-full fixed z-[1000] pointer-events-none border-[2px] border-slate-500 border-solid w-8 h-8 transition-all",
          cursorClass,
          isClicked && "w-8 h-8"
        )}
        data-type={trailerType}
        ref={cursorRef}
      ></motion.div>
    </>
  );
};
