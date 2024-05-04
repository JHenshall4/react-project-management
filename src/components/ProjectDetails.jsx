import Input from "./Input";

export default function ProjectDetails({ project, addTask, removeTask }) {
  const formattedDate = new Date(project.date).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

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
          <button className="text-stone-600 hoveR:text-stone-950">
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
        <hr className="my-4" />
        <h2 className="text-3xl font-bold my-2 ">Tasks</h2>
        <div className="flex gap-10">
          <Input
            label="Create a new task"
            type="text"
            name="newTask"
            id="newTask"
          />
          <button>Save</button>
        </div>
        <div>
          {/* {project.tasks.map((task) => {
            <p>{task}</p>;
          })} */}
        </div>
      </header>
    </div>
  );
}
