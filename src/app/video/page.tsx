import { LaunchingSoon } from "@/components/launching-soon";
import Navbar from "@/components/navbar";

export default function page() {
  return (
    <>
      <Navbar alwaysVisible />
      <div className="h-screen w-full flex items-center justify-center">
        <LaunchingSoon />
      </div>
    </>
  );
}
