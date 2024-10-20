import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") return;

    onAddTask(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="md:flex items-center gap-4">
      <input
        type="text"
        placeholder="New task..."
        className="w-32 md:w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      ></input>
      <button
        className="block px-8 md:px-6 py-2 mt-2 md:mt-0 rounded-sm bg-stone-700 text-stone-50 hover:bg-stone-800"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
