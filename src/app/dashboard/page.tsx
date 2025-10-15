'use client'
import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function Dashboard(){
      const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin");
  }
    return (
        <div>
            You are logged in 
            <Button onClick={()=>signOut()}> Logout </Button>
        </div>
    )
}