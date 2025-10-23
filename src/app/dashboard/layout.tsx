import { SidebarProvider } from "@/components/ui/sidebar";
import { getAllProjectForUser } from "@/features/dashboard/actions";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const projectData = await getAllProjectForUser()
  
  const formattedProjectData = projectData?.map((project)=>({
    id : project.id,
    name : project.title,
    icon : project.template,
    starred : project.starredProjects[0]?.isMarked
  })) || []

  return (
    <SidebarProvider>
      <div className="w-full min-h-screen flex overflow-x-hidden">
        <DashboardSidebar initialProjectData={formattedProjectData}/>
        <main className="flex-1">{children}</main>
      </div>
    </SidebarProvider>
  );
}
