import Button from "./Button";
export default function Sidebar({
  projects,
  createProjectScreen,
  selectProject,
  selectedProjectId,
}) {
  return (
    <aside
      id="sidebar"
      className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"
    >
      <h2 className="mb-4 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <ul className="my-4">
        {projects &&
          projects.length > 0 &&
          projects.map((project) => {
            let cssClasses =
              "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-stone-200 hover:bg-stone-800";

            if (project.id === selectedProjectId) {
              cssClasses += " bg-stone-800 text-stone-200";
            } else {
              cssClasses += " text-stone-400";
            }

            return (
              <li key={project.id}>
                <button
                  onClick={() => selectProject(project.id)}
                  className={cssClasses}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
      </ul>
      <Button onClick={createProjectScreen}>+ Add Project</Button>
    </aside>
  );
}
