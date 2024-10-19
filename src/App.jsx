import { useState } from "react";

import SideBar from "./Components/sideBar";
import NewProject from "./Components/NewProject";
import NoProject from "./Components/NoProject";
import Project from "./Components/Project";

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
    tasks: [],
  });

  function handleAddTask(taskText) {
    setProjectsState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        id: taskId,
        projectId: prevState.selectedProjectId,
        text: taskText,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask() {}

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

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSelectProject(currentProjectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: currentProjectId,
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
        selectedProjectId: undefined,
      };
    });
  }

  let content = (
    <Project
      project={projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
      )}
      onDeleteProject={handleDeleteProject}
      projectTasks={projectsState.tasks.filter(
        (task) => task.projectId === projectsState.selectedProjectId
      )}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === undefined) {
    content = <NoProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onSaveNewProject={handleSaveNewProject}
        onCancel={handleCancel}
      />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        projects={projectsState.projects}
        onAddProject={handleAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}
export default App;
