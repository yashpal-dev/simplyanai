import { ChatboxProps } from "@/types";
import { Chatbox } from "@/components/ui/chat";
import { Bot } from "lucide-react";

function TypingIndicator() {
  return (
    <div className="flex w-full mb-6 justify-start">
      <div className="group max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] flex gap-3 p-4 rounded-2xl bg-muted/30">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary/20">
            <Bot className="w-4 h-4 text-primary" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-2">
            <span className="text-sm font-semibold text-foreground">AI</span>
          </div>

          {/* Typing Animation */}
          <div className="flex items-center gap-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            </div>
            <span className="text-sm text-muted-foreground">Thinking...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChatInterface({
  chat,
  endOfMessagesRef,
  isLoading,
}: {
  chat: ChatboxProps[];
  endOfMessagesRef: React.RefObject<HTMLDivElement>;
  isLoading: boolean;
}) {
  return (
    <div className="py-16 xl:py-6 px-4 md:px-6 lg:px-8 pb-40">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 mb-28">
          {chat.map((chatItem, index) => (
            <Chatbox
              key={index}
              user={chatItem.user}
              text={chatItem.text}
              isAI={chatItem.isAI}
            />
          ))}
          {isLoading && <TypingIndicator />}
          <div ref={endOfMessagesRef} />
        </div>
      </div>
    </div>
  );
}
