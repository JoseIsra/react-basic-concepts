import React from "react";

export const TodoList = ({ loading, onLoading, onRender, todos, children }) => {
  return (
    <div>
      {loading && onLoading()}
      <ul>{!loading && todos.map(children || onRender)}</ul>
    </div>
  );
};
