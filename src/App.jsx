import { useState } from "react";

import SideBar from "./Components/SideBar.jsx";
import NewProject from "./Components/NewProject.jsx";
import NoProject from "./Components/NoProject.jsx";
import Project from "./Components/Project.jsx";

const testProjects = [
  {
    id: 1,
    title: "project 1",
    description: "description 1",
    dueDate: "06/02/2025",
  },
  {
    id: 2,
    title: "project 2",
    description: "description 2",
    dueDate: "12/25/2025",
  },
  {
    id: 3,
    title: "project 3",
    description: "description 3",
    dueDate: "08/11/2025",
  },
];

const testTasks = [
  {
    id: 11,
    projectId: 1,
    text: "task 1 project 1",
  },
  {
    id: 111,
    projectId: 1,
    text: "task 2 project 1",
  },
  {
    id: 22,
    projectId: 2,
    text: "task 1 project 2",
  },
  {
    id: 222,
    projectId: 2,
    text: "task 2 project 2",
  },
  {
    id: 33,
    projectId: 3,
    text: "task 1 project 3",
  },
  {
    id: 333,
    projectId: 3,
    text: "task 2 project 3",
  },
];

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: testProjects,
    tasks: testTasks,
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

  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  function handleAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
    setMenuVisible(false);
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

  const [menuVisiable, setMenuVisible] = useState(false);

  return (
    <>
      <header className="flex h-12 w-screen bg-stone-900">
        <button
          onClick={() => {
            setMenuVisible((prevState) => !prevState);
          }}
        >
          <img
            className="mt-2 mx-6 w-8 h-8 hover:w-[34px] hover:h-[34px]"
            src="./src/assets/menu.png"
          ></img>
        </button>
        <button className="text-center px-4 py-1 rounded-sm my-1 text-stone-200 bg-stone-800">
          {projectsState.selectedProjectId &&
            projectsState.projects.find(
              (project) => project.id === projectsState.selectedProjectId
            ).title}
        </button>
      </header>
      <main className="h-screen flex gap-8">
        {menuVisiable && (
          <SideBar
            projects={projectsState.projects}
            onAddProject={handleAddProject}
            onSelectProject={handleSelectProject}
            selectedProjectId={projectsState.selectedProjectId}
          />
        )}
        {content}
      </main>
    </>
  );
}
export default App;
