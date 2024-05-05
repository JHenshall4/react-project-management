import { useState } from "react";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import ProjectDetails from "./components/ProjectDetails";
import DefaultScreen from "./components/DefaultScreen";

function App() {
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

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
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

  function handleAddTask(newTask) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === prevState.selectedProjectId) {
            const tasks = project.tasks || [];
            return {
              ...project,
              tasks: [...tasks, newTask],
            };
          } else {
            return project;
          }
        }),
      };
    });
  }

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === prevState.selectedProjectId) {
            const tasks = project.tasks || [];
            return {
              ...project,
              tasks: tasks.filter((task) => task.id !== taskId),
            };
          } else {
            return project;
          }
        }),
      };
    });
  }

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = (
    <ProjectDetails
      project={selectedProject}
      deleteProject={handleDeleteProject}
      addTask={handleAddTask}
      deleteTask={handleDeleteTask}
    />
  );

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
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
