import { useState } from "react";

import SideBar from "./Components/sideBar";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProject";

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
  const [projects, setProjects] = useState([]);
  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);

  function handleAddProject() {
    setIsAddingProject(true);
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar projects={projects} onAddProject={handleAddProject} />

      {!isProjectSelected && !isAddingProject && (
        <NoProject onAddProject={handleAddProject} />
      )}

      {isAddingProject && <NewProject />}
    </main>
  );
}

export default App;
