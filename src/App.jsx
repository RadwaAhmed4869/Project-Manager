import { useState } from "react";
import SideBar from "./Components/sideBar";
import NewProject from "./Components/NewProject";

const testProjects = [
  {
    title: "project 1",
    description: "description 1",
    dueDate: "due date 1",
  },
  {
    title: "project 2",
    description: "description 2",
    dueDate: "due date 2",
  },
  {
    title: "project 3",
    description: "description 3",
    dueDate: "due date 3",
  },
];

function App() {
  const [projects, setProjects] = useState(testProjects);

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projects} />

      {projects.length === 0 && (
        <div className="mt-24 text-center w-2/3">
          <img
            src="logo.png"
            className="w-16 h-16 object-contain mx-auto"
          ></img>
          <h2 className="text-xl font-bold text-stone-500 my-4">
            No project Selected
          </h2>
          <p className="text-stone-400 mb-4">
            Select a project or get started with a new one
          </p>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Create new project
          </button>
        </div>
      )}

      <NewProject />
    </main>
  );
}

export default App;
