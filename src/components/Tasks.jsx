import Input from "./Input";
import AddTask from "./AddTask";

export default function Tasks({ project, addTask, deleteTask }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4 ">Tasks</h2>
      <AddTask addTask={addTask} />
      {(!project.tasks || project.tasks.length === 0) && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {project.tasks && project.tasks.length > 0 && (
        <ul className="mt-8 rounded-md bg-stone-100">
          {project.tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between p-4 border-b-2 border-stone-200 hover:bg-stone-200"
            >
              <span>{task.name}</span>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-stone-700 hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
