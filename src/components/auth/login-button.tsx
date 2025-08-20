
"use client"

import type { ButtonProps } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from 'react'

export function LoginButton({ children, ...props }: ButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button {...props}>{children}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Log In</DialogTitle>
          <DialogDescription>
            Enter your credentials to access your dashboard and the full ebook.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email-login" className="text-right">
              Email
            </Label>
            <Input id="email-login" type="email" placeholder="you@example.com" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="password-login" className="text-right">
              Password
            </Label>
            <Input id="password-login" type="password" className="col-span-3" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <Button type="submit" className="w-full">Log In</Button>
          <Button type="button" variant="secondary" className="w-full">Sign in with Magic Link</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
