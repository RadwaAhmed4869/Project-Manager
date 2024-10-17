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
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  function handleSaveNewProject(newProject) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  }

  console.log(projectsState.projects);

  let content;
  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = <NewProject onSaveNewProject={handleSaveNewProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectsState.projects}
        onAddProject={handleAddProject}
      />
      {content}
    </main>
  );
}

export default App;
