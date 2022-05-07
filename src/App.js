import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoHeader } from "./components/TodoHeader/TodoHeader";
import { Todo } from "./components/Todo/Todo";
import { useTodos } from "./components/TodoContext";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoLoading } from "./components/TodoLoading/TodoLoading";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { ChangeAlert } from "./components/ChangeAlert";

function App() {
  const {
    loading,
    todos,
    deleteTodo,
    completeTodo,
    completedTodos,
    totalTodos,
    saveTodos,
    sincronizeTodos,
  } = useTodos();

  return (
    <div className="bg-slate-300 h-screen w-screen flex flex-row flex-wrap items-center justify-center">
      <TodoForm todos={todos} saveTodos={saveTodos} />
      <aside className="flex flex-col items-center justify-items-center">
        <TodoHeader loading={loading}>
          <TodoCounter
            completedTodos={completedTodos}
            totalTodos={totalTodos}
          />
          <TodoSearch />
        </TodoHeader>
        <TodoList
          loading={loading}
          todos={todos}
          onLoading={() => <TodoLoading />}
          onRender={(t) => (
            <Todo
              key={t.id}
              id={t.id}
              text={t.text}
              completed={t.completed}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )}
        >
          {(t) => (
            <Todo
              key={t.id}
              id={t.id}
              text={t.text}
              completed={t.completed}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
            />
          )}
        </TodoList>
        <ChangeAlert sincronize={sincronizeTodos} />
      </aside>
    </div>
  );
}

export default App;
