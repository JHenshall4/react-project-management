import Tasks from "./Tasks";

export default function ProjectDetails({
  project,
  deleteProject,
  addTask,
  deleteTask,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log(project);

  return (
    <div className="w-[35rem] mt-16">
      <header
        id="project-details"
        className="pb-4 mb-4 border-b-2 border-stone-300"
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={deleteProject}
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks project={project} addTask={addTask} deleteTask={deleteTask} />
    </div>
  );
}
