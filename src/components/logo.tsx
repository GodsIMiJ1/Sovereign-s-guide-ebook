import { cn } from "@/lib/utils";
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        {...props}
    >
        <g fill="currentColor">
            {/* Base */}
            <path d="M25 55 C25 80, 75 80, 75 55 C 70 55, 65 52, 60 50 L 40 50 C 35 52, 30 55, 25 55 Z" fillOpacity="0.8" />
            <path d="M25,55 C30,45 70,45 75,55" stroke="currentColor" fill="none" strokeWidth="3" />

            {/* Circuit */}
            <path d="M50 50 V 60" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M50 60 L 40 70" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M50 60 L 60 70" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M40 55 H 30 V 65 H 40" stroke="currentColor" fill="none" strokeWidth="2" />
            <path d="M60 55 H 70 V 65 H 60" stroke="currentColor" fill="none" strokeWidth="2" />
            <circle cx="35" cy="70" r="3" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <circle cx="65" cy="70" r="3" stroke="currentColor" fill="none" strokeWidth="1.5" />
            <circle cx="50" cy="75" r="3" stroke="currentColor" fill="none" strokeWidth="1.5" />

            {/* Stem */}
            <path d="M47.5,35 V 50 H 52.5 V 35 Z" />
            <path d="M45 30 L 50 35 L 55 30 L 50 25 Z" />

            {/* Flame */}
            <path d="M50,30 C 40,0 30,15 40,30" fill="currentColor" />
            <path d="M50,30 C 60,0 70,15 60,30" fill="currentColor" />
            <path d="M50,30 C 50,10 45,15 50,30" fill="currentColor" />
             <path d="M50,30 C 48,15 45,20 48,30" fill="currentColor" />
            <path d="M50,30 C 52,15 55,20 52,30" fill="currentColor" />
        </g>
    </svg>
  );
}
