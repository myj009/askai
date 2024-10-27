"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/components/chat-message";
import { generate } from "../actions/generate";
import { readStreamableValue } from "ai/rsc";
import { Bot } from "lucide-react";
import Link from "next/link";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { content: string; isUser: boolean }[]
  >([]);
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [text, messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { content: input, isUser: true }]);
    setInput("");
    setIsLoading(true);
    let aiRes = "";

    try {
      const { output } = await generate(input);
      setMessages((prev) => [
        ...prev,
        {
          content: aiRes,
          isUser: false,
        },
      ]);
      for await (const delta of readStreamableValue(output)) {
        aiRes += delta;
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            content: aiRes,
            isUser: false,
          },
        ]);
        setText(aiRes);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          content: "Sorry, there was an error processing your request.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      <Link href="/" className="flex gap-3 items-center mb-4">
        <Bot className="h-7 w-7 mb-1" />
        <h1 className="text-2xl font-bold text-blue-600">AskAI</h1>
      </Link>
      <ScrollArea className="flex-grow mb-4 p-4 border rounded-lg">
        <div className="flex flex-col w-full gap-4" ref={scrollAreaRef}>
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.content}
              isUser={message.isUser}
            />
          ))}
        </div>
      </ScrollArea>
      <form onSubmit={handleSubmit} className="flex items-center">
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="flex-grow mr-2"
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </form>
    </div>
  );
}
