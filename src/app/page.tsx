import Companies from "@/components/companies";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import { Cursor } from "@/components/ui/cursor";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <Cursor cursorClass="border-blue-600 hidden md:inline-block" />
      <Hero />
      <Companies />
    </div>
  );
}
