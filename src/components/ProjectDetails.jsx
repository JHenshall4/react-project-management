import { useState } from "react";

import Input from "./Input";

export default function ProjectDetails({ project, addTask, removeTask }) {
  const [newTask, setNewTask] = useState(null);

  function handleChange(event) {
    setNewTask(event.target.value);
    console.log(project);
  }

  return (
    <section id="project-details" className="flex flex-col w-full px-2">
      <h1 className="mt-8 mb-2 text-5xl font-bold">{project.title}</h1>
      <span className="">{project.dueDate}</span>
      <p>{project.description}</p>
      <hr className="my-4" />
      <h2 className="text-3xl font-bold my-2 ">Tasks</h2>
      <div className="flex gap-10">
        <Input
          label="Create a new task"
          type="text"
          name="newTask"
          id="newTask"
          onChange={handleChange}
        />
        <button onClick={() => addTask(newTask)}>Save</button>
      </div>
      <div>
        {project.tasks.map((task) => {
          <p>{task}</p>;
        })}
      </div>
    </section>
  );
}
