import React, { useState } from "react";
import { MdTaskAlt } from "react-icons/md";
import { WiMoonAltFull } from "react-icons/wi";
// MdTaskAlt

export const Todo = ({ id, text, completed, completeTodo, deleteTodo }) => {
  const [active, setactive] = useState(completed);

  const toggleComplete = (e) => {
    setactive(e.target.checked);
    completeTodo(id, e.target.checked);
  };

  const handleDeleteTodo = (todoId) => {
    deleteTodo(todoId);
  };

  return (
    <label
      htmlFor={id}
      className="flex row items-center justify-around border-2 rounded-md p-3 w-full my-3 hover:scale-110 
    transition-all cursor-pointer"
    >
      <input
        type="checkbox"
        id={id}
        style={{ display: "none" }}
        value={completed}
        onChange={toggleComplete}
      />
      {active ? <MdTaskAlt /> : <WiMoonAltFull />}
      <p>{text}</p>
      <button
        className="bg-red-500 px-2 hover:scale-110 font-medium text-white rounded-md transition-all"
        onClick={() => handleDeleteTodo(id)}
      >
        Eliminar
      </button>
    </label>
  );
};
