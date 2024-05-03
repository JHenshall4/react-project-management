import { useState } from "react";
import Input from "./Input";

export default function CreateProject({ saveAction, cancelAction }) {
  const [projectInfo, setProjectInfo] = useState({});

  function handleChange(event) {
    setProjectInfo({
      ...projectInfo,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <section id="create-project" className="flex flex-col w-full px-4">
      <div className="flex justify-end gap-20">
        <button onClick={() => cancelAction(0)}>Cancel</button>
        <button
          className="bg-stone-800 text-white rounded-md px-4 py-2"
          onClick={() => saveAction(projectInfo)}
        >
          Save
        </button>
      </div>
      <Input
        type="text"
        id="title"
        name="title"
        label="Title"
        onChange={handleChange}
      />
      <Input
        type="text"
        id="description"
        name="description"
        label="Description"
        onChange={handleChange}
      />
      <Input
        type="date"
        id="dueDate"
        name="dueDate"
        label="Due Date"
        onChange={handleChange}
      />
    </section>
  );
}
