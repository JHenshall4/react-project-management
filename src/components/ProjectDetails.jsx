export default function ProjectDetails({ project }) {
  return (
    <section id="project-details" className="flex flex-col w-full px-2">
      <h1 className="mt-8 mb-2 text-5xl font-bold">{project.title}</h1>
      <span className="">{project.dueDate}</span>
      <p>{project.description}</p>
      <hr className="my-4" />
      <h2 className="text-3xl font-bold my-2 ">Tasks</h2>
    </section>
  );
}
