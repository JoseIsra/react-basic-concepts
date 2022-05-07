import React from "react";
import { useStorageListener } from "./useStorageListener";

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize);
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button className="bg-slate-600 p-2" onClick={toggleShow}>
          Actualizar información
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
