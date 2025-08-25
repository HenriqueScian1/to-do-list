import { useEffect, useState } from "react";
import ThemeToggle from "./components/ThemeToggle";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

export default function App() {
  
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(t => (t === "dark" ? "light" : "dark"));

  // ===== Tarefas =====
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [
        { id: crypto.randomUUID(), text: "Finalizar o projeto To-Do List", category: "Estudos", isCompleted: false },
        { id: crypto.randomUUID(), text: "Subir para o GitHub", category: "Trabalho", isCompleted: true },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category) =>
    setTodos(prev => [...prev, { id: crypto.randomUUID(), text, category, isCompleted: false }]);

  const removeTodo = id => setTodos(prev => prev.filter(t => t.id !== id));
  const completeTodo = id =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)));

  return (
    <div className="
      min-h-screen p-6 flex items-start justify-center transition-colors
      bg-boticario-bg text-slate-900
      dark:bg-koru-bg dark:text-purple-100
    ">
      <div
        className="
    w-full max-w-xl mx-auto mt-16 rounded-3xl shadow-xl
    bg-white border border-emerald-900/10
    dark:bg-koru-card dark:border-purple-700/30
  "
      >

        {/* Cabeçalho */}
        <header className="p-6 border-b border-emerald-900/10 dark:border-purple-700/30 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-boticario-green dark:text-koru-purple">
            Lista de Tarefas
          </h1>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </header>

        {/* Conteúdo */}
        <main className="p-5 sm:p-6">
          <div className="space-y-3 mb-8">
            {todos.length === 0 ? (
              <p className="text-center text-emerald-900/60 dark:text-purple-200/70">
                Nenhuma tarefa por enquanto.
              </p>
            ) : (
              todos.map(todo => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  removeTodo={removeTodo}
                  completeTodo={completeTodo}
                />
              ))
            )}
          </div>

          <TodoForm addTodo={addTodo} />
        </main>
      </div>
    </div>
  );
}
