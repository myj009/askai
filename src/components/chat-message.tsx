import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { Bot, User } from "lucide-react";
import Markdown from "react-markdown";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export function ChatMessage({ message, isUser }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex items-start",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8 mr-2 mt-2">
          <Bot />
        </Avatar>
      )}
      <div
        className={cn(
          "rounded-lg px-4 py-2 max-w-[80%]",
          isUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        )}
      >
        {message != "" ? <Markdown>{message}</Markdown> : "Thinking..."}
      </div>
      {isUser && (
        <Avatar className="h-8 w-8 ml-2 mt-2">
          <User />
        </Avatar>
      )}
    </div>
  );
}
