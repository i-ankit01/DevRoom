import { deleteProjectByid, editProjectById, getAllProjectForUser } from "@/features/dashboard/actions";
import AddNewProject from "@/features/dashboard/components/AddNewProject";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import EmptyArea from "@/features/dashboard/components/EmptyArea";
import ProjectTable from "@/features/dashboard/components/ProjectTable";

export default async function DashboardPage() {
  const allProjects = await getAllProjectForUser();

  return (
    <div className="min-h-screen mx-auto max-w-7xl flex flex-col px-4 py-4">
      <DashboardHeader />
      <div>
        {allProjects && allProjects.length === 0 ? (
          <EmptyArea />
        ) : (
          <ProjectTable
            projects={allProjects}
            onDeleteProject={deleteProjectByid}
            onUpdateProject={editProjectById}
          />
        )}
      </div>
    </div>
  );
}
