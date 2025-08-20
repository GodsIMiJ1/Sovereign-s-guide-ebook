
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, ShieldCheck, BookOpen, ArrowRight, BotMessageSquare } from 'lucide-react';
import Image from 'next/image';
import { SignUpButton } from '@/components/auth/signup-button';
import { InteracInstructions } from '@/components/interac-instructions';

const benefits = [
  {
    icon: <BotMessageSquare className="h-10 w-10 text-primary" />,
    title: 'Master AI Micro-Apps',
    description: 'Learn to build, deploy, and scale small, focused AI applications from scratch.',
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: 'Premium Interactive Content',
    description: 'Engage with expandable sections, copy-and-paste code snippets, and embedded media.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Lifetime Access',
    description: 'One-time purchase grants you lifetime access to the guide and all future updates.',
  },
];

const paymentOptions = [
    {
        title: 'PayPal',
        description: 'Secure one-click purchase. Get instant access to the full guide and PDF download.',
        price: '$49 USD',
        cta: 'Buy Now with PayPal',
        icon: (
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2">
                <title>PayPal</title>
                <path d="M7.064 15.21c.143 1.023.633 1.762 1.54 1.762 1.258 0 1.802-.913 1.802-2.316 0-2.023-1.07-2.813-2.72-2.813-.42 0-.68.134-.84.332-.122.15-.22.365-.24.56-.032.22-.016.488.047.733zm.333-5.467c.13-.23.33-.42.565-.565.234-.144.5-.23.78-.23h.36c.55 0 .93.114 1.157.34.226.226.34.564.34.996 0 .42-.123.74-.37.95-.245.21-.6.31-1.05.31h-.32c-.55 0-.93-.114-1.157-.34-.226-.226-.34-.564-.34-.996zm2.422 4.22c.48-2.324 1.48-3.615 3.01-3.615 1.08 0 1.69.63 1.95 1.53.2.68.21 1.25.13 1.83-.08.58-.25 1.11-.5 1.57-.25.46-.58.83-1.01 1.11-.42.28-.9.42-1.42.42-1.57 0-2.58-1.22-3.16-3.85zm1.53-2.12c.31.02.58-.1.8-.32.22-.22.33-.5.33-.83 0-.34-.11-.59-.33-.76s-.5-.26-.85-.26h-.4c-.31.02-.58-.1-.8-.32-.22-.22-.33-.5-.33-.83 0-.34-.11-.59-.33-.76s-.5-.26-.85-.26h-.4c-.31.02-.58-.1-.8-.32-.22-.22-.33-.5-.33-.83 0-.34-.11-.59-.33-.76s-.5-.26-.85-.26H8.74c-1.33 0-2.31.59-2.94 1.76-.64 1.17-.96 2.65-.96 4.45 0 2.22.63 3.68 1.88 4.39 1.25.7 2.9.7 4.96 0 1.02-.35 1.74-.95 2.16-1.81.42-.86.5-1.92.24-3.18-.73-3.41-2.2-5.11-4.43-5.11-1.37 0-2.39.6-3.07 1.79-.68 1.2-1.02 2.75-1.02 4.64 0 2.87 1.27 4.31 3.82 4.31 1.17 0 2.1-.38 2.78-1.15.68-.77 1.02-1.84 1.02-3.22 0-.9-.16-1.64-.48-2.22-.32-.58-.8-1.02-1.44-1.32-.64-.3-1.4-.45-2.28-.45-1.33 0-2.31.59-2.94 1.76-.64 1.17-.96 2.65-.96 4.45 0 2.22.63 3.68 1.88 4.39 1.25.7 2.9.7 4.96 0 1.02-.35 1.74-.95 2.16-1.81.42-.86.5-1.92.24-3.18zM17.76 12c0-1.33-.35-2.31-1.04-2.94-.7-.63-1.76-.94-3.19-.94h-.99c-.31.02-.58-.1-.8-.32-.22-.22-.33-.5-.33-.83 0-.34-.11-.59-.33-.76s-.5-.26-.85-.26h-.4c-.31.02-.58-.1-.8-.32-.22-.22-.33-.5-.33-.83 0-.34-.11-.59-.33-.76s-.5-.26-.85-.26H6.24C2.7 3.3.94 5.2.94 8.64c0 2.19.83 3.92 2.49 5.2 1.66 1.27 3.83 1.91 6.49 1.91 3.86 0 6.33-1.14 7.4-3.43.08-.18.15-.36.21-.55.25-.81.38-1.7.38-2.67z" fill="currentColor"/>
            </svg>
        ),
        buttonVariant: 'default'
    },
    {
        title: 'Interac e-Transfer',
        description: 'For manual payments. Follow the instructions to complete your purchase. Access granted within 24 hours.',
        price: '$49 CAD',
        cta: 'View Instructions',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 mr-2">
                <path d="M12 19.5v-15m0 15-4-4m4 4 4-4M5.5 11h13"/>
                <path d="M18.5 6.472a1.803 1.803 0 0 0-1.353-.672A2.031 2.031 0 0 0 15.118 7.82c.228.84.947 1.178 1.72 1.178.628 0 1.16-.327 1.482-.822a1.491 1.491 0 0 0-.274-1.704Z"/>
                <path d="M5.5 6.472a1.803 1.803 0 0 1 1.353-.672A2.031 2.031 0 0 1 8.882 7.82c-.228.84-.947 1.178-1.72 1.178-.628 0-1.16-.327-1.482-.822a1.491 1.491 0 0 1 .274-1.704Z"/>
            </svg>
        ),
        buttonVariant: 'secondary'
    },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-center py-20 md:py-32 px-4 overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background opacity-50"></div>
         <div 
          className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[length:10px_10px] [mask-image:linear-gradient(to_bottom,white,transparent,transparent)]"
        ></div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary animate-fade-in-down">
            Sovereign&apos;s Guide to AI Micro-Apps
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 animate-fade-in-up [animation-delay:0.2s]">
            The definitive interactive guide to designing, building, and deploying powerful, small-scale AI applications. Unlock your potential and become a sovereign creator.
          </p>
          <div className="mt-8 flex justify-center gap-4 animate-fade-in-up [animation-delay:0.4s]">
            <Button asChild size="lg" className="bg-primary/90 hover:bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform transform hover:scale-105">
              <Link href="/ebook">
                Start Reading Free Preview <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="shadow-lg shadow-secondary/20 transition-transform transform hover:scale-105">
              <Link href="#pricing">
                Unlock Full Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Why This Guide is Different</h2>
            <p className="mt-2 text-lg text-muted-foreground">Go beyond theory with hands-on, interactive learning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center bg-card border-border/50 shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="mx-auto bg-card p-4 rounded-full w-fit mb-4 border border-primary/20">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ebook Preview Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert max-w-none text-foreground/90">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">A Glimpse Inside</h2>
                <p className="text-lg">
                    This isn&apos;t just a book; it&apos;s a toolkit. Each chapter is packed with practical examples,
                    ready-to-use code, and interactive elements that bring concepts to life.
                </p>
                <ul className="text-lg">
                    <li>Interactive diagrams and expandable explanations.</li>
                    <li>Copy-paste ready code blocks for rapid development.</li>
                    <li>Embedded video tutorials for complex topics.</li>
                    <li>End-of-chapter quizzes to test your knowledge.</li>
                </ul>
                <Button asChild size="lg" variant="link" className="text-primary text-lg p-0 h-auto">
                    <Link href="/ebook">Explore the first chapter now <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
            </div>
             <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-primary/10">
                <Image src="https://placehold.co/600x800/1A237E/FFD700" alt="Ebook Preview" layout="fill" objectFit="cover" className="transform hover:scale-105 transition-transform duration-500 ease-in-out" data-ai-hint="digital book abstract" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                    <BookOpen className="inline-block h-8 w-8 text-primary mb-2" />
                    <h3 className="text-2xl font-bold">Interactive Reader</h3>
                    <p className="text-primary/80">An immersive learning experience.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Get Full Sovereign Access</h2>
            <p className="mt-2 text-lg text-muted-foreground">One-time payment. Lifetime updates. No subscriptions.</p>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {paymentOptions.map((option) => (
              <Card key={option.title} className="flex flex-col bg-card border-border/50 shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    {option.icon}
                    <CardTitle className="text-2xl font-bold">{option.title}</CardTitle>
                  </div>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                        <p className="text-4xl font-bold text-primary mb-6">{option.price}</p>
                    </div>
                    {option.title === 'PayPal' ? (
                      <SignUpButton size="lg" variant="default" className="w-full mt-4 transition-transform transform hover:scale-105">
                          {option.cta}
                      </SignUpButton>
                    ) : (
                      <InteracInstructions />
                    )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
