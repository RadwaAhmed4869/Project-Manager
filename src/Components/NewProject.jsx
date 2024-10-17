import { useRef } from "react";
import Input from "./Input";

export default function NewProject({ onSaveNewProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSaveProject() {
    const projectInfo = {
      id: Math.random(),
      title: titleRef.current.getInput(),
      description: descriptionRef.current.getInput(),
      dueDate: dateRef.current.getInput(),
    };

    onSaveNewProject(projectInfo);
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSaveProject}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={titleRef} label="title" />
        <Input ref={descriptionRef} label="description" isTextArea />
        <Input ref={dateRef} label="due date" type="date" />
      </div>
    </div>
  );
}
