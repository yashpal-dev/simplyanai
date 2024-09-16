"use client";
import { Chatbox } from "@/components/cards/chatbox";
import { Sidebar } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FileInput } from "@/components/utils/file-input";
import { sendQuery } from "@/services/chat";
import { CircleArrowUp, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [file, setFile] = useState<File | null>();
  const [chat, setChat] = useState<Chatbox[]>([]);
  const [query, setQuery] = useState<string>("");
  const [inputVisible, setInputVisible] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  // const handleFile = (fl: File) => setFile(fl);
  const handleInputVisibility = (bool: boolean) => setInputVisible(bool);

  // scroll to bottom in chat list
  useEffect(() => {
    chatContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  const onSubmit = async () => {
    // if file does not exist return
    if (!file) return;

    setChat((prev) => {
      return [
        ...prev,
        {
          user: "User",
          text: query,
          isAI: false,
        },
      ];
    });
    let qry = query;
    setQuery("");

    const res = await sendQuery(qry, file.name);
    setChat((prev) => {
      return [
        ...prev,
        {
          user: "AI",
          text: res.answer,
          isAI: true,
        },
      ];
    });

    inputRef.current?.focus();
    setInputVisible(true);
  };

  function handleFileRemove() {
    setFile(null);
    setInputVisible(false);
    setChat([]);
  }

  return (
    <main className="xl:grid xl:grid-cols-[20%_80%] min-h-screen">
      <aside className="hidden xl:block z-10">
        <Sidebar
          fileName={file?.name!}
          handleFileRemove={handleFileRemove}
          file={file!}
        />
      </aside>
      <section className="fixed top-0 left-0 right-0 z-20 xl:hidden">
        <div className="grid flex-1 grid-cols-2 justify-center items-center">
          <Button
            variant={"outline"}
            className="py-7 gap-5 cursor-auto rounded-none border-2 "
          >
            <span className="text-sm">File:</span>
            <p className="text-sm font-semibold">
              {/* {file.name?:fl.name:"No File Selected"} */}
              {file?.name ? file.name : "No File Selected"}
            </p>
          </Button>

          <Button
            onClick={handleFileRemove}
            disabled={!file}
            className="py-7 gap-5 text-sm font-bold hover:bg-transparent text-center hover:text-secondary-foreground border-2 rounded-none"
          >
            <Plus size={"1rem"} />
            New Chat
          </Button>
        </div>
      </section>
      <section className="relative left-0 right-0">
        {chat.length <= 0 ? (
          <div className="flex min-h-screen">
            <div className="px-2 m-auto w-full max-w-md">
              <FileInput
                file={file!}
                setFile={setFile}
                handleInputVisibility={handleInputVisibility}
                handleFileRemove={handleFileRemove}
              />
            </div>
          </div>
        ) : (
          <div
            ref={chatContainerRef}
            className="py-32 xl:py-10 px-2 grid grid-cols-1 justify-items-start items-start gap-10"
          >
            {chat.map((chat, index) => {
              return (
                <Chatbox
                  key={index}
                  user={chat.user}
                  text={chat.text}
                  isAI={chat.isAI}
                />
              );
            })}
          </div>
        )}
        {file && (
          <div className="pt-32 flex justify-center">
            <div className="px-2 w-full lg:w-3/4 fixed bottom-6">
              <Textarea
                ref={inputRef}
                placeholder="Ask with Simplyanai..."
                className="px-2 py-2 text-base tracking-wider leading-3 pr-20"
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                onKeyDown={(e) => e.key === "Enter" && onSubmit()}
                disabled={!inputVisible}
              />

              <Button
                className="absolute bottom-2 right-2"
                variant={"ghost"}
                disabled={!inputVisible || !query}
                onClick={onSubmit}
              >
                <CircleArrowUp size={"2.5rem"} />
              </Button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
