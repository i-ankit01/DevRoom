import AddNewProject from "@/features/dashboard/components/AddNewProject";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import EmptyArea from "@/features/dashboard/components/EmptyArea";

export default function DashboardPage() {
  const playgrounds: any[] = [];

  return (
    <div className="min-h-screen mx-auto max-w-7xl flex flex-col px-4 py-4">
      <DashboardHeader/>
      <div>
        {playgrounds && playgrounds.length === 0 ? (
          <EmptyArea />
        ) : (
          <p>to implement this featuere</p>
        )}
      </div>
    </div>
  );
}
