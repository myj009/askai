import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import {
  AudioWaveform,
  Home,
  Image,
  ImageDown,
  MessageCircle,
  MessageCircleCode,
  PhoneOutgoing,
  User,
  Video,
} from "lucide-react";

export default function Navbar() {
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
  return <FloatingNav navItems={navItems} />;
}
