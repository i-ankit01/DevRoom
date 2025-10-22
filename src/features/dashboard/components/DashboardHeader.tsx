"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Github, Plus } from "lucide-react";

export default function DashboardHeader() {
  const [newProjectOpen, setNewProjectOpen] = useState(false);
  const [importRepoOpen, setImportRepoOpen] = useState(false);
  return (
    <div>
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Manage Your Projects</h1>
            </div>
            <div className="flex gap-3">
              <Dialog open={importRepoOpen} onOpenChange={setImportRepoOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Github className="h-4 w-4" />
                    Import Repo
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Import Repository</DialogTitle>
                    <DialogDescription>
                      Import an existing repository from GitHub or provide a Git
                      URL
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="repo-url">Repository URL</Label>
                      <Input
                        id="repo-url"
                        placeholder="https://github.com/username/repo.git"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="project-name">Project Name</Label>
                      <Input
                        id="project-name"
                        placeholder="my-awesome-project"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setImportRepoOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setImportRepoOpen(false)}>
                      Import Project
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={newProjectOpen} onOpenChange={setNewProjectOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    New Project
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Create New Project</DialogTitle>
                    <DialogDescription>
                      Start a new project from scratch or use a template
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Project Name</Label>
                      <Input id="name" placeholder="my-new-project" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Input
                        id="description"
                        placeholder="A brief description of your project"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      variant="outline"
                      onClick={() => setNewProjectOpen(false)}
                    >
                      Cancel
                    </Button>
                    <Button onClick={() => setNewProjectOpen(false)}>
                      Create Project
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
