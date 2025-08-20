"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ebookChapters } from '@/lib/ebook';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CodeBlock } from '@/components/code-block';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Lock, FileText } from 'lucide-react';

export default function EbookPage() {
    const [activeChapter, setActiveChapter] = useState('chapter-1');

    return (
        <div className="container mx-auto py-8 md:py-12 px-4">
            <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 lg:w-1/5 md:sticky top-24 self-start">
                    <h2 className="text-xl font-bold mb-4 text-primary">Chapters</h2>
                    <nav>
                        <ul>
                            {ebookChapters.map((chapter) => (
                                <li key={chapter.id}>
                                    <a
                                        href={`#${chapter.id}`}
                                        className={`block p-2 rounded-md transition-colors ${
                                            activeChapter === chapter.id
                                                ? 'bg-primary/20 text-primary font-semibold'
                                                : 'hover:bg-card hover:text-secondary'
                                        }`}
                                        onClick={(e) => {
                                          e.preventDefault();
                                          setActiveChapter(chapter.id)
                                          document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {chapter.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                     <div className="mt-8 p-4 rounded-lg bg-card border border-border">
                        <h3 className="font-bold flex items-center"><FileText className="mr-2 h-5 w-5"/>PDF Version</h3>
                        <p className="text-sm text-muted-foreground mt-2">Get the full guide as a downloadable PDF for offline reading.</p>
                        <Button className="w-full mt-4" asChild>
                            <Link href="/dashboard">Check Access</Link>
                        </Button>
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-full md:w-3/4 lg:w-4/5">
                    <div className="prose prose-invert max-w-none prose-h1:text-primary prose-h1:text-4xl prose-h2:text-2xl prose-h2:text-secondary prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-secondary">
                        {ebookChapters.map((chapter, chapterIndex) => (
                            <section id={chapter.id} key={chapter.id} className="mb-16 scroll-mt-24">
                                {chapterIndex > 0 && (
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center z-10 rounded-lg not-prose">
                                        <Lock className="h-16 w-16 text-primary mb-4"/>
                                        <h2 className="text-3xl font-bold text-white">Content Locked</h2>
                                        <p className="text-xl text-white/80 mt-2">Purchase the full guide to unlock this chapter.</p>
                                        <Button size="lg" className="mt-6" asChild>
                                            <Link href="/#pricing">Unlock Full Guide</Link>
                                        </Button>
                                    </div>
                                )}
                                <div className={chapterIndex > 0 ? "relative filter blur-md" : "relative"}>
                                    <h1>{chapter.title}</h1>
                                    {chapter.content.map((item, index) => {
                                        switch (item.type) {
                                            case 'paragraph':
                                                return <p key={index}>{item.text}</p>;
                                            case 'heading':
                                                return <h2 key={index}>{item.text}</h2>;
                                            case 'code':
                                                return <CodeBlock key={index} code={item.code} language={item.language} />;
                                            case 'image':
                                                return <div className="my-8 not-prose rounded-lg overflow-hidden border border-border shadow-lg">
                                                    <Image src={item.src} alt={item.alt} width={800} height={450} className="w-full" data-ai-hint={item.aiHint}/>
                                                    </div>;
                                            case 'expandable':
                                                return (
                                                    <Accordion key={index} type="single" collapsible className="my-4 not-prose">
                                                        <AccordionItem value="item-1" className="bg-card/50 rounded-lg px-4 border-border">
                                                            <AccordionTrigger className="text-lg hover:no-underline">{item.title}</AccordionTrigger>
                                                            <AccordionContent className="prose prose-invert max-w-none text-muted-foreground">
                                                                {item.details}
                                                            </AccordionContent>
                                                        </AccordionItem>
                                                    </Accordion>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
