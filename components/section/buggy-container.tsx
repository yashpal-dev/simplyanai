"use client";

import { useRef, useState } from "react";
import { Bug, Code, Copy, Loader2 } from "lucide-react";

import { Dropdown } from "@/components/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import Editor from "@monaco-editor/react";
import { sendCode } from "@/services/buggy";
import { useToast } from "@/components/ui/use-toast";
import Head from "next/head";
import { CopyToClipboard } from "@/components/ui/copy-to-clipboard";

export function BuggyContainer() {
  const [value, setValue] = useState(
    "// Happy Coding!\n// Paste your code here and click 'Fix Code' to get started"
  );
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
    if (
      !value.trim() ||
      value.trim() ===
        "// Happy Coding!\n// Paste your code here and click 'Fix Code' to get started"
    ) {
      toast({
        title: "No code provided",
        description: "Please enter some code to fix",
        variant: "destructive",
      });
      return;
    }

    setFetching(true);
    const res = await sendCode(value, language);

    if (!res.success) {
      toast({
        title: "Error occurred",
        description: "Please try again",
        variant: "destructive",
      });
      setFetching(false);
      return;
    }

    setValue(res.fixedCode);
    setFetching(false);
    toast({
      title: "Code Fixed Successfully",
      description: "Your code has been optimized and fixed",
    });
  }

  return (
    <>
      <Head>
        <title>Buggy: Code Bug Fixer</title>
      </Head>
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/50 backdrop-blur-sm border border-border/50 mb-6">
              <Bug className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">
                Buggy
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight tracking-tight text-foreground mb-4">
              AI Code{" "}
              <span className="font-mono font-bold text-primary">Fixer</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light text-muted-foreground">
              Upload your code and get instant solutions to bugs, errors, and
              optimization suggestions.
            </p>
          </div>

          {/* Main Editor Card */}
          <Card className="w-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Code className="w-5 h-5 text-primary" />
                  <CardTitle className="text-lg sm:text-xl font-semibold text-foreground">
                    Code Editor
                  </CardTitle>
                </div>

                <div className="flex items-center gap-3">
                  <Dropdown language={language} handleSelect={handleSelect} />
                  <CopyToClipboard text={value} />
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="h-[50vh] sm:h-[60vh] lg:h-[65vh] border-t border-border/50">
                <Editor
                  className="w-full h-full"
                  theme="vs-dark"
                  language={language}
                  onMount={handleEditorDidMount}
                  value={value}
                  onChange={(value: any) => setValue(value || "")}
                  options={{
                    minimap: { enabled: false },
                    fontSize: 14,
                    lineNumbers: "on",
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    wordWrap: "on",
                    padding: { top: 16, bottom: 16 },
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Action Button */}
          <div className="mt-6 sm:mt-8">
            <Button
              onClick={handleSubmit}
              disabled={fetching}
              className="w-full h-12 sm:h-14 text-base sm:text-lg font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
            >
              {fetching ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Fixing Code...
                </>
              ) : (
                <>
                  <Bug className="w-5 h-5 mr-2" />
                  Fix Code
                </>
              )}
            </Button>
          </div>

          {/* Info Section */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="text-center p-4 rounded-lg bg-secondary/30 border border-border/50">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Bug className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                Error Detection
              </h3>
              <p className="text-xs text-muted-foreground">
                Automatically identify bugs and issues
              </p>
            </div>

            <div className="text-center p-4 rounded-lg bg-secondary/30 border border-border/50">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                Auto Fix
              </h3>
              <p className="text-xs text-muted-foreground">
                Get instant solutions and fixes
              </p>
            </div>

            <div className="text-center p-4 rounded-lg bg-secondary/30 border border-border/50">
              <div className="w-8 h-8 mx-auto mb-2 rounded-full bg-primary/10 flex items-center justify-center">
                <Copy className="w-4 h-4 text-primary" />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1">
                Easy Copy
              </h3>
              <p className="text-xs text-muted-foreground">
                Copy fixed code with one click
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
