import { useRef } from "react";
import Input from "./Input.jsx";
import Modal from "./Modal.jsx";

export default function NewProject({ onSaveNewProject, onCancel }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  const dialog = useRef();

  function handleSaveProject() {
    const enteredTitle = titleRef.current.getInput();
    const enteredDescription = descriptionRef.current.getInput();
    const enteredDate = dateRef.current.getInput();

    if (
      enteredTitle === "" ||
      enteredDescription === "" ||
      enteredDate === ""
    ) {
      dialog.current.open();
      return;
    }

    onSaveNewProject({
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
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
    </>
  );
}
