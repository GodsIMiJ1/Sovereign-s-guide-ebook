
"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Copy } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useState } from "react"

export function InteracInstructions() {
  const { toast } = useToast()
  const email = "payment@sovereign.dev"
  const [hasCopied, setHasCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setHasCopied(true)
    toast({
      title: "Email copied!",
      description: "The payment email address has been copied to your clipboard.",
    })
    setTimeout(() => setHasCopied(false), 2000);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="secondary" className="w-full mt-4 transition-transform transform hover:scale-105">
            View Instructions
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Interac e-Transfer Instructions</DialogTitle>
          <DialogDescription>
            Follow these steps to complete your purchase manually.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4 text-sm">
          <p>
            To purchase with Interac e-Transfer, please send <strong className="text-primary">$49 CAD</strong> to the following email address:
          </p>
          <div className="flex items-center space-x-2 rounded-md bg-muted p-3">
            <span className="font-mono text-muted-foreground flex-grow">{email}</span>
            <Button variant="ghost" size="icon" onClick={copyEmail} className="h-8 w-8">
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="font-semibold text-foreground">
            IMPORTANT: You must sign up for an account first. Then, in the message/memo of your e-Transfer, please include the email address you used to sign up.
          </p>
          <p className="text-muted-foreground">
            Once we receive your payment, we will manually grant you full access within 24 hours. You will receive an email confirmation.
          </p>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button">Understood</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
