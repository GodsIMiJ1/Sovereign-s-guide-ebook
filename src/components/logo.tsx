import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        {...props}
    >
        <g fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Main Triangle */}
            <path d="M50 10 L95 85 L5 85 Z" />

            {/* Eye Outline */}
            <path d="M20 55 C 35 40, 65 40, 80 55 C 65 70, 35 70, 20 55 Z" />

            {/* Pupil */}
            <path d="M50 45 C 55 50, 55 60, 50 65 C 45 60, 45 50, 50 45 Z" fill="currentColor" />
            
            {/* Iris Sun Rays */}
            <path d="M50 55 m-8 0 a8 8 0 1 0 16 0 a8 8 0 1 0 -16 0" strokeWidth="2"/>
            <path d="M50 47 V 42" strokeWidth="2.5" />
            <path d="M50 63 V 68" strokeWidth="2.5" />
            <path d="M40 55 H 35" strokeWidth="2.5" />
            <path d="M60 55 H 65" strokeWidth="2.5" />
            <path d="M43 48 l-4 -4" strokeWidth="2.5" />
            <path d="M57 62 l4 4" strokeWidth="2.5" />
            <path d="M57 48 l4 -4" strokeWidth="2.5" />
            <path d="M43 62 l-4 4" strokeWidth="2.5" />

            {/* Decorative Triangles */}
            <path d="M50 20 L45 30 L55 30 Z" />
            <path d="M20 80 L25 70 L15 70 Z" fill="currentColor"/>
            <path d="M80 80 L75 70 L85 70 Z" fill="currentColor" />
        </g>
    </svg>
  );
}
