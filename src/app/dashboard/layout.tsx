import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex overflow-x-hidden">
        <DashboardSidebar initialPlaygroundData={[]}/>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
