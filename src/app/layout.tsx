import { Cursor } from "@/components/ui/cursor";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AskAI",
  description: "Chat with an AI powered by OpenAI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`w-full dark:bg-black bg-white ${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Cursor cursorClass="border-blue-600 hidden md:inline-block" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
