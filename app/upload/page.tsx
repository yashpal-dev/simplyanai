"use client";

import {
  ChatInterface,
  EmptyState,
  InputArea,
  MobileHeader,
} from "@/components/ui/chat";
import { Sidebar } from "@/components/ui/chat";
import { sendQuery } from "@/services/chat";

import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import { ChatboxProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chatwithdoc: AI chat app",
  description:
    "Chatwithdoc is an AI-powered chat application that allows you to interact with your documents. Upload a file and ask questions to get instant, intelligent answers.",
};

export default function Page() {
  const [file, setFile] = useState<File | null>(null);
  const [chat, setChat] = useState<ChatboxProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [inputVisible, setInputVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const endOfMessagesRef = useRef<HTMLDivElement | null>(null);

  const handleInputVisibility = (bool: boolean) => setInputVisible(bool);

  // Auto scroll to bottom only when there are messages
  useEffect(() => {
    if (endOfMessagesRef.current && chat.length > 0) {
      endOfMessagesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isLoading]);

  const onSubmit = async () => {
    if (!file || query.trim() === "" || isLoading) return;

    // Add user message
    setChat((prev) => [
      ...prev,
      {
        user: "User",
        text: query,
        isAI: false,
      },
    ]);

    const userQuery = query;
    setQuery("");
    setInputVisible(false);
    setIsLoading(true);

    try {
      const res = await sendQuery(userQuery, file.name);

      // Add AI response
      setChat((prev) => [
        ...prev,
        {
          user: "AI",
          text: res.answer,
          isAI: true,
        },
      ]);
    } catch (error) {
      // Add error message
      setChat((prev) => [
        ...prev,
        {
          user: "AI",
          text: "Sorry, I encountered an error. Please try again.",
          isAI: true,
        },
      ]);
    } finally {
      setIsLoading(false);
      inputRef.current?.focus();
      setInputVisible(true);
    }
  };

  const handleFileRemove = () => {
    setFile(null);
    setInputVisible(false);
    setChat([]);
    setIsLoading(false);
  };

  return (
    <>
      <main className="min-h-screen bg-background">
        {/* Mobile Header */}
        <MobileHeader file={file} onFileRemove={handleFileRemove} />

        {/* Desktop Sidebar */}
        <aside className="hidden xl:block fixed left-0 top-0 h-full w-64 z-10">
          <Sidebar
            fileName={file?.name || ""}
            handleFileRemove={handleFileRemove}
            file={file}
          />
        </aside>

        {/* Main Content */}
        <section className="xl:ml-64">
          {chat.length <= 0 ? (
            <EmptyState
              file={file}
              setFile={setFile}
              handleInputVisibility={handleInputVisibility}
              handleFileRemove={handleFileRemove}
            />
          ) : (
            <ChatInterface
              chat={chat}
              endOfMessagesRef={endOfMessagesRef}
              isLoading={isLoading}
            />
          )}

          {/* Input Area */}
          {file && (
            <InputArea
              query={query}
              setQuery={setQuery}
              onSubmit={onSubmit}
              inputVisible={inputVisible}
              inputRef={inputRef}
              isLoading={isLoading}
            />
          )}
        </section>
      </main>
    </>
  );
}
