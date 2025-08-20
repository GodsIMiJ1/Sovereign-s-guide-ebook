"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Check, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface CodeBlockProps {
  code: string;
  language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [hasCopied, setHasCopied] = useState(false);
  const { toast } = useToast()

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code.trim()).then(() => {
      setHasCopied(true);
      toast({
        title: "Copied to clipboard!",
        description: "You can now paste the code in your editor.",
      })
      setTimeout(() => setHasCopied(false), 2000);
    });
  };

  return (
    <div className="my-4 not-prose relative group">
      <pre className="bg-card p-4 rounded-lg border border-border overflow-x-auto">
        <code className={`language-${language} text-sm`}>{code.trim()}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={copyToClipboard}
      >
        {hasCopied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
        <span className="sr-only">Copy code</span>
      </Button>
    </div>
  );
}
