import Input from "./Input";

export default function CreateProject() {
  return (
    <section id="create-project">
      <button>Cancel</button>
      <button>Save</button>
      <Input type="text" label="Title" />
      <Input type="text" label="Description" />
      <Input type="date" label="Due Date" />
    </section>
  );
}
