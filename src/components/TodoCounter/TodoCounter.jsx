import React from "react";

export function TodoCounter({ completedTodos, totalTodos, loading }) {
  return (
    <>
      {!loading && (
        <p>
          Tienes {completedTodos} tareas completadas de {totalTodos}
        </p>
      )}
    </>
  );
}
