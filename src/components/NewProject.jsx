import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function CreateProject({ addProject, cancelAddProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonText="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">
          Invalid Input{" "}
        </h2>
        <p className="text-stone-600 mb-4">
          Oops... Looks like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>
      <section id="create-project" className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={cancelAddProject}
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </menu>
        <div>
          <Input
            type="text"
            id="title"
            name="title"
            label="Title"
            ref={title}
          />
          <Input
            type="text"
            id="description"
            name="description"
            label="Description"
            textarea
            ref={description}
          />
          <Input
            type="date"
            id="dueDate"
            name="dueDate"
            label="Due Date"
            ref={dueDate}
          />
        </div>
      </section>
    </>
  );
}
