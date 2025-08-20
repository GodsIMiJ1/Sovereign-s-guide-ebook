import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Download, BookOpen, User } from 'lucide-react'
import Link from "next/link"

export default function DashboardPage() {
  const purchaseStatus = {
    hasAccess: true,
    plan: "Full Sovereign Access",
  };

  const progress = 33;

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
      <div className="flex items-center gap-4 mb-8">
        <User className="w-12 h-12 text-primary"/>
        <div>
            <h1 className="text-3xl md:text-4xl font-bold">Your Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Sovereign Developer.</p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-card/80 border-primary/30 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="text-green-500" />
              Purchase Status
            </CardTitle>
            <CardDescription>Your access level to the guide.</CardDescription>
          </CardHeader>
          <CardContent>
            {purchaseStatus.hasAccess ? (
              <div>
                <p className="text-2xl font-bold text-primary">{purchaseStatus.plan}</p>
                <p className="text-muted-foreground">You have full access to all chapters and materials.</p>
              </div>
            ) : (
              <div>
                <p className="text-2xl font-bold text-amber-500">Preview Access</p>
                <p className="text-muted-foreground">You can read the first chapter for free.</p>
              </div>
            )}
          </CardContent>
          <CardFooter>
            {purchaseStatus.hasAccess ? (
                 <Button variant="outline" disabled>Access Granted</Button>
            ) : (
                <Button asChild><Link href="/#pricing">Upgrade to Full Access</Link></Button>
            )}
          </CardFooter>
        </Card>

        <Card className="bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="text-secondary" />
              Ebook Progress
            </CardTitle>
            <CardDescription>How far you've come in your journey.</CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progress} className="w-full" />
            <p className="text-center mt-2 text-muted-foreground">{progress}% complete</p>
          </CardContent>
          <CardFooter>
            <Button asChild><Link href="/ebook">Continue Reading</Link></Button>
          </CardFooter>
        </Card>

        <Card className="bg-card/80">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Download className="text-secondary" />
              Downloads
            </CardTitle>
            <CardDescription>Get your offline copy of the guide.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Download the complete Sovereign&apos;s Guide in PDF format. Perfect for offline reading and reference.</p>
          </CardContent>
          <CardFooter>
            <Button disabled={!purchaseStatus.hasAccess} className="w-full">
                {purchaseStatus.hasAccess ? "Download PDF" : "Purchase to Download"}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
