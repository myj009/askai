"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        theme == "light" ? setTheme("dark") : setTheme("light");
      }}
    >
      {theme == "light" ? (
        <Sun className="h-5 w-5 transition-transform duration-300 ease-in-out transform rotate-180" />
      ) : (
        <Moon className="h-5 w-5 transition-transform duration-300 ease-in-out transform rotate-0" />
      )}
    </Button>
  );
}
