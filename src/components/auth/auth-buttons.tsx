
"use client";

import { LoginButton } from "./login-button";
import { SignUpButton } from "./signup-button";

type AuthButtonsProps = {
    inSheet?: boolean;
}

export function AuthButtons({ inSheet = false }: AuthButtonsProps) {
    return (
        <>
            <LoginButton variant="ghost" className={inSheet ? 'w-full justify-start' : ''}>
                Log In
            </LoginButton>
            <SignUpButton className={inSheet ? 'w-full justify-start' : ''}>
                Sign Up
            </SignUpButton>
        </>
    );
}
