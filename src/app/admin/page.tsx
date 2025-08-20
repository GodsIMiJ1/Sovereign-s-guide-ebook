"use client";

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Shield } from "lucide-react"

const initialUsers = [
  { id: 1, email: "user1@example.com", status: "Paid", method: "PayPal" },
  { id: 2, email: "user2@example.com", status: "Pending", method: "e-Transfer" },
  { id: 3, email: "user3@example.com", status: "Paid", method: "PayPal" },
  { id: 4, email: "user4@example.com", status: "Preview", method: "N/A" },
  { id: 5, email: "user5@example.com", status: "Pending", method: "e-Transfer" },
];

export default function AdminPage() {
  const [users, setUsers] = useState(initialUsers);

  const handleConfirmPayment = (id: number) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, status: "Paid" } : user
    ));
  };

  return (
    <div className="container mx-auto py-8 md:py-12 px-4">
        <div className="flex items-center gap-4 mb-8">
            <Shield className="w-12 h-12 text-primary"/>
            <div>
                <h1 className="text-3xl md:text-4xl font-bold">Admin Panel</h1>
                <p className="text-muted-foreground">Manage user purchases and access.</p>
            </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Purchases</CardTitle>
          <CardDescription>
            View and confirm user payments.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User Email</TableHead>
                <TableHead>Payment Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.email}</TableCell>
                  <TableCell>{user.method}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === 'Paid' ? 'default' : user.status === 'Pending' ? 'secondary' : 'outline'}
                     className={user.status === 'Paid' ? 'bg-green-600/80 text-white' : ''}>
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    {user.status === "Pending" && (
                      <Button size="sm" onClick={() => handleConfirmPayment(user.id)}>
                        Confirm Payment
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
