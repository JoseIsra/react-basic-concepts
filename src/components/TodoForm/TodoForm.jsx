import React, { useState } from "react";
import { randomNumber } from "../../utils";

export const TodoForm = ({ todos, saveTodos }) => {
  const [newInput, setNewInput] = useState("");
  const handleInput = (e) => {
    setNewInput(e.target.value);
  };
  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: randomNumber(),
      text: newInput,
      completed: false,
    };
    const newones = [...todos, newTodo];
    saveTodos(newones);
  };

  return (
    <form onSubmit={addTodo}>
      <input
        placeholder="New Todo"
        className="placeholder:italic text-sm p-1 text-slate-500 placeholder:text-slate-400 rounded-md focus:outline-none"
        value={newInput}
        onChange={handleInput}
      />
      <button
        className="bg-[#009bf4] text-sm px-3 py-2 border-none rounded text-white font-medium hover:scale-110 transition-all ml-2"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};
