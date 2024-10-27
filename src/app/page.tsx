import Companies from "@/components/companies";
import Features from "@/components/features";
import Footer from "@/components/footer";
import { Hero } from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
