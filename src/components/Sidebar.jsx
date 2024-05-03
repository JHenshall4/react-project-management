export default function Sidebar({ projects, addProject, viewProject }) {
  return (
    <aside
      id="sidebar"
      className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl"
    >
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <ul className="mt-8">
        {projects.map((project, index) => {
          return (
            <li key={index} onClick={() => viewProject(index)}>
              {project.title}
            </li>
          );
        })}
      </ul>
      <button
        className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"
        onClick={() => addProject(1)}
      >
        + Add Project
      </button>
    </aside>
  );
}
