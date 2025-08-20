export const ebookChapters = [
  {
    id: 'chapter-1',
    title: 'Chapter 1: The Sovereign Mindset',
    content: [
      {
        type: 'paragraph',
        text: "Welcome to the Sovereign's Guide. Before we write a single line of code, we must first cultivate the correct mindset. A sovereign developer is not merely a coder; they are an architect, an entrepreneur, and a creator who owns their work and their future. This chapter lays the foundation for that transformation.",
      },
      {
        type: 'heading',
        text: 'What is an AI Micro-App?',
      },
      {
        type: 'paragraph',
        text: 'An AI Micro-App is a small, focused application designed to perform one specific AI-powered task exceptionally well. Think of a simple image background remover, a text summarizer, or a sentiment analysis tool. They are characterized by their minimal footprint, clear value proposition, and potential for independent monetization.',
      },
      {
        type: 'expandable',
        title: 'Key Characteristics of a Micro-App',
        details:
          '1. Single Responsibility: It does one thing and does it well. 2. Independent Deployment: It can be deployed and scaled on its own. 3. Minimalist UI/UX: The user interface is straightforward and serves only the core function. 4. API-First potential: It can often be exposed as a simple API for other services to consume.',
      },
      {
        type: 'image',
        src: 'https://placehold.co/800x450/1A237E/FFD700',
        alt: 'Abstract diagram of a micro-app architecture',
        aiHint: 'abstract architecture diagram',
      },
      {
        type: 'heading',
        text: 'Your First Setup',
      },
      {
        type: 'paragraph',
        text: "Let's set up your development environment. We'll be using Next.js for the frontend, hosted on Firebase. This provides a powerful, scalable, and cost-effective stack to get started.",
      },
      {
        type: 'code',
        language: 'bash',
        code: `
# Install the Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Create a new Next.js app
npx create-next-app@latest sovereign-micro-app --typescript --tailwind --eslint

# Change into the new directory
cd sovereign-micro-app
        `,
      },
      {
        type: 'paragraph',
        text: 'With these simple commands, you have the skeleton of your first micro-app. In the next chapter, we will bring it to life.',
      },
    ],
  },
  {
    id: 'chapter-2',
    title: 'Chapter 2: Building Your First Micro-App',
    content: [
      {
        type: 'paragraph',
        text: 'This is where the magic happens. We will build a simple text summarization app using a pre-trained model from Hugging Face.',
      },
       {
        type: 'heading',
        text: 'The Text Summarizer',
      },
       {
        type: 'paragraph',
        text: 'Our goal is to create a simple interface where a user can paste a long piece of text and receive a concise summary.',
      },
    ],
  },
  {
    id: 'chapter-3',
    title: 'Chapter 3: Monetization & Deployment',
    content: [
      {
        type: 'paragraph',
        text: 'A sovereign developer needs to get paid. This chapter covers integrating payment gateways like Stripe and PayPal, and deploying your app to the world.',
      },
    ],
  },
  {
    id: 'chapter-4',
    title: 'Chapter 4: Scaling and Beyond',
    content: [
      {
        type: 'paragraph',
        text: 'Learn how to scale your application, monitor its performance, and gather user feedback for future iterations. The journey does not end at deployment.',
      },
    ],
  },
];
