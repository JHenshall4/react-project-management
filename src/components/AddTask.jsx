import { useState, useRef } from "react";
import Modal from "./Modal";

export default function AddTask({ addTask }) {
  const [taskName, setTaskName] = useState("");
  const modal = useRef();

  function handleChange(event) {
    setTaskName(event.target.value);
  }

  function handleClick() {
    if (taskName.trim() === "") {
      modal.current.open();
      return;
    }
    addTask({
      name: taskName,
      id: Math.random(),
    });
    setTaskName("");
  }

  return (
    <>
      <Modal ref={modal} buttonText={"Okay"}>
        <h4 className="text-l text-red-600">Error</h4>
        <p className="text-stone-700">You must enter a task value</p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange}
          value={taskName}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
