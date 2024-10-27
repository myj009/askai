import {
  AudioWaveform,
  ImageDown,
  MessageCircleCode,
  Video,
} from "lucide-react";
import { FloatingNav } from "./ui/floating-navbar";

export default function Navbar({ alwaysVisible }: { alwaysVisible?: boolean }) {
  const navItems = [
    {
      name: "Chat",
      link: "/chat",
      icon: (
        <MessageCircleCode className="h-5 w-5 text-neutral-800 dark:text-white" />
      ),
    },
    {
      name: "Image",
      link: "/image",
      icon: <ImageDown className="h-5 w-5 text-neutral-800 dark:text-white" />,
    },
    {
      name: "Video",
      link: "/video",
      icon: <Video className="h-5 w-5 text-neutral-800 dark:text-white" />,
    },
    {
      name: "Audio",
      link: "/audio",
      icon: (
        <AudioWaveform className="h-5 w-5 text-neutral-800 dark:text-white" />
      ),
    },
  ];
  return <FloatingNav navItems={navItems} alwaysVisible={alwaysVisible} />;
}
