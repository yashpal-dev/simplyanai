"use client";
import { useRef, useState } from "react";

import { Dropdown } from "@/components/utils/drop-down";
import { Button } from "@/components/ui/button";

import Editor from "@monaco-editor/react";
import { sendCode } from "@/services/buggy";
import { useToast } from "@/components/ui/use-toast";
import Head from "next/head";
import CopyToClipboard from "@/components/ui/copy-to-clipboard";

export default function BuggyContainer() {
  const [value, setValue] = useState("Happy Coding!");
  const [language, setLanguage] = useState("python");
  const [fetching, setFetching] = useState(false);

  const { toast } = useToast();

  const editorRef = useRef<any>(null);

  function handleEditorDidMount(editor: any) {
    editorRef.current = editor;
    editorRef.current.focus();
  }

  function handleSelect(language: string) {
    setLanguage(language);
  }

  async function handleSubmit() {
    setFetching(true);
    const res = await sendCode(value, language);

    // if any error happens
    if (!res.success) {
      toast({
        title: "Please try again",
        description: "An error occured",
      });
      setFetching(false);
      return;
    }

    setValue(res.fixedCode);

    setFetching(false);
    toast({
      title: "Code Formatted",
      description: "Enjoy",
    });
  }

  return (
    <>
      <Head>
        <title>Buggy: Code Bug Fixer</title>
      </Head>
      <main>
        <section className="w-full h-full min-h-screen bg-background px-5 py-2 space-y-1">
          <div className="py-3">
            <h1 className="text-4xl font-bold text-center">Buggy Code Fixer</h1>
          </div>
          {/* editor */}
          <div className="w-full h-[80vh] max-w-7xl mx-auto bg-black/90 px-3 py-2 overflow-hidden">
            <div className="w-full flex justify-between overflow-hidden">
              <Dropdown language={language} handleSelect={handleSelect} />
              <CopyToClipboard text={value} />
            </div>

            <Editor
              className="my-2 w-full h-full"
              theme="vs-dark"
              language={language}
              onMount={handleEditorDidMount}
              value={value}
              onChange={(value: any) => setValue(value)}
            />
            {/* output */}
          </div>
          <div className="flex justify-center">
            <Button
              className="w-full text-xl font-bold max-w-7xl"
              onClick={handleSubmit}
            >
              {fetching ? "Fixing..." : "Fix Code"}
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
