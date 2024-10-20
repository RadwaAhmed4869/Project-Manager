export default function BarButton({ project, onSelectProject, ...props }) {
  let cssClasses = " text-stone-400 hover:text-stone-200 hover:bg-stone-800";

  return (
    <button
      className={"w-full text-left px-2 py-1 rounded-sm my-1" + cssClasses}
      onClick={() => onSelectProject(project.id)}
    >
      {project.title}
    </button>
  );
}
