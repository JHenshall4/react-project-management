import { useState } from "react";
import Sidebar from "./components/Sidebar";
import CreateProject from "./components/CreateProject";

const DEFAULT_PROJECTS = [
  {
    title: "Project 1",
    description: "Hello, this is a test project",
    dueDate: "01/01/01",
  },
];

function App() {
  const [projectList, updateProjectList] = useState(DEFAULT_PROJECTS);
  const [screenShown, setScreenShown] = useState(1);

  function handleCreateProject() {
    updateProjectList([
      ...projectList,
      { title: "New Project", description: "New Desc", dueDate: "02/02/02" },
    ]);
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar projects={projectList} createProject={handleCreateProject} />
        {screenShown === 0 && (
          <h1 className="my-8 text-center text-5xl font-bold">
            No Project Selected
          </h1>
        )}
        {screenShown === 1 && <CreateProject />}
      </main>
    </>
  );
}

export default App;
// Create a project management app.

// Requirements:
// Side bar with a list of projects
// Be able to select a project which brings it into the center
//    If no project selected, it should give you a prompt to create a new project
// When creating a project, the middle should give you fields for:
// Title, description, due date. (Cancel + Save Options)
// When you select a project, the middle screen will allow you to add tasks within that project.
// Also need an option to "clear" tasks.
// Also need to be able to delete projects.
