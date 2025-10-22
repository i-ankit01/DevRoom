"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AddNewProject() {
  return (
    <Card
      className="group flex flex-col items-center justify-center hover:shadow-md transition-all duration-200 border-dashed border-2 hover:border-primary text-center p-6 cursor-pointer h-48"
    >
      <Button
        size="icon"
        variant="outline"
        className="mb-4 rounded-full h-12 w-12 border-primary/30 group-hover:bg-primary group-hover:text-white transition-colors"
      >
        <Plus className="h-6 w-6" />
      </Button>

      <CardHeader className="p-0 space-y-1">
        <CardTitle className="text-lg font-semibold group-hover:text-primary">
          Add New
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Create a new project to get started
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
