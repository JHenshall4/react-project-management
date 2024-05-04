import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import DefaultScreen from "./components/DefaultScreen";

function App() {
  const [projectList, updateProjectList] = useState({});
  const [activeProject, setActiveProject] = useState({});
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleCreateProjectScreen() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = <ProjectDetails project={selectedProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        addProject={handleAddProject}
        cancelAddProject={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <DefaultScreen createProjectScreen={handleCreateProjectScreen} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        createProjectScreen={handleCreateProjectScreen}
        projects={projectsState.projects}
        selectProject={handleSelectProject}
      />
      {content}

      {/* <ProjectDetails
        project={activeProject}
        addTask={handleCreateTask}
        removeTask={handleRemoveTask}
      /> */}
    </main>
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
