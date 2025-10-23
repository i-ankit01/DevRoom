"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  FolderPlus,
  History,
  Home,
  LayoutDashboard,
  Plus,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandHtml5,
  IconFlame,
  IconBrandAngular,
  IconServer,
  IconBrandVue,
  IconCode, // Default fallback
  type IconProps,
} from "@tabler/icons-react";

interface ProjectDataProps {
  id: string;
  name: string;
  icon: string;
  starred: boolean;
}

// Map icon names (strings) to their corresponding LucideIcon components
const IconMap: Record<string, React.FC<IconProps>> = {
  REACT: IconBrandReact,
  NEXTJS: IconBrandNextjs,
  HTML: IconBrandHtml5,
  HONO: IconFlame,
  ANGULAR: IconBrandAngular,
  EXPRESS: IconServer,
  VUE: IconBrandVue,
  DEFAULT: IconCode, // Include the default icon
};

export default function DashboardSidebar({
  initialProjectData,
}: {
  initialProjectData: ProjectDataProps[];
}) {
  const pathname = usePathname();
  const [starredProjects, setStarredProjects] = useState(
    initialProjectData.filter((item) => item.starred)
  );
  const [recentProjects, setRecentProjects] = useState(initialProjectData);
  return (
    <Sidebar variant="inset" collapsible="icon" className="border-1 border-r">
      <SidebarHeader>
        <div className="flex items-center gap-2 px-4 py-3 justify-center">
          <Image src={"/logo.svg"} alt="logo" height={60} width={60} />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="Home"
              >
                <Link href="/">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            <Star className="h-4 w-4 mr-2" />
            Starred
          </SidebarGroupLabel>
          <SidebarGroupAction title="Add starred project">
            <Plus className="h-4 w-4" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredProjects.length === 0 && recentProjects.length === 0 ? (
                <div className="text-center text-muted-foreground py-4 w-full">
                  Create Your Project
                </div>
              ) : (
                starredProjects.map((project) => {
                  const IconComponent =
                    IconMap[project.icon] || IconMap.DEFAULT;
                  return (
                    <SidebarMenuItem key={project.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/project/${project.id}`}
                        tooltip={project.name}
                      >
                        <Link href={`/project/${project.id}`}>
                          {IconComponent && (
                            <IconComponent className="h-4 w-4" />
                          )}
                          <span>{project.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            <History className="h-4 w-4 mr-2" />
            Recent
          </SidebarGroupLabel>
          <SidebarGroupAction title="Create new project">
            <FolderPlus className="h-4 w-4" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredProjects.length === 0 && recentProjects.length === 0
                ? null
                : recentProjects.map((project) => {
                    const IconComponent =
                      IconMap[project.icon] || IconMap.DEFAULT;
                    return (
                      <SidebarMenuItem key={project.id}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === `/project/${project.id}`}
                          tooltip={project.name}
                        >
                          <Link href={`/project/${project.id}`}>
                            {IconComponent && (
                              <IconComponent className="h-4 w-4" />
                            )}
                            <span>{project.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="View all">
                  <Link href="/projects">
                    <span className="text-sm text-muted-foreground">
                      View all projects
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
