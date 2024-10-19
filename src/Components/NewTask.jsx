import { useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="New task..."
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      ></input>
      <button
        className="text-stone-700 hover:text-slate-950"
        onClick={() => {
          if (enteredTask === "") return;
          onAddTask(enteredTask);
          setEnteredTask("");
        }}
      >
        Add Task
      </button>
    </div>
  );
}
