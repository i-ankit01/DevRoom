"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { LogOut, User } from "lucide-react";
import { useCurrentUser } from "../hooks/use-current-user";
import LogoutButton from "./LogoutButton";

const UserProfile = () => {
  const user = useCurrentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer focus-visible:ring-0 focus-visible:ring-offset-0">
          <AvatarImage src={user?.image!} alt={user?.name!} />
          <AvatarFallback className="bg-red-500">
            <User className="text-white" />
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="mr-4">
        <DropdownMenuItem className="cursor-pointer">
          <span>{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <LogoutButton>
          <DropdownMenuItem className="cursor-pointer">
            <LogOut className="h-4 w-4 mr-2" />
            LogOut
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
