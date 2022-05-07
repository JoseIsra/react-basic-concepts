import React from "react";

export const TodoSearch = ({ loading }) => {
  return (
    <div>
      <input
        placeholder="Buscar"
        className="placeholder:italic text-sm p-1 text-slate-500 placeholder:text-slate-400 rounded-md focus:outline-none"
        disabled={loading}
      />
      <button className="bg-[#009bf4] text-sm px-3 py-2 border-none rounded text-white font-medium hover:scale-110 transition-all ml-2">
        Buscar
      </button>
    </div>
  );
};
