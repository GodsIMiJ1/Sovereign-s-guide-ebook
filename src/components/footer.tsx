import Link from 'next/link';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="bg-card">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Logo className="h-8 w-8 text-primary" />
            <span className="font-bold text-lg">Sovereign's Guide</span>
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-primary">About</Link>
            <Link href="/contact" className="hover:text-primary">Contact</Link>
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ghost King Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
