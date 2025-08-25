// src/components/Todo.jsx
import React from "react";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className={`
        grid grid-cols-[1fr,auto,auto] gap-2 items-center
        p-4 rounded-xl border transition
        ${todo.isCompleted
          ? "bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-[#2b1833] dark:border-purple-700/40 dark:text-purple-200/70"
          : "bg-white border-emerald-200 text-slate-900 dark:bg-koru-card dark:border-purple-700/40 dark:text-purple-50"}
      `}
    >
      {/* Texto da tarefa */}
      <div>
        <p className={`font-semibold ${todo.isCompleted ? "line-through opacity-70" : ""}`}>
          {todo.text}
        </p>
        <p className="text-sm opacity-70">{todo.category}</p>
      </div>

      {/* Botão concluir/desfazer */}
      <button
        onClick={() => completeTodo(todo.id)}
        className="px-3 py-1 text-sm font-semibold text-white rounded-md transition-colors
                   bg-boticario-green hover:brightness-95
                   dark:bg-koru-purple dark:hover:brightness-110"
      >
        {todo.isCompleted ? "Desfazer" : "Concluir"}
      </button>

      {/* Botão remover */}
      <button
        onClick={() => removeTodo(todo.id)}
        className="px-3 py-1 text-sm font-semibold text-white rounded-md transition-colors
                   bg-red-500 hover:bg-red-600"
      >
        X
      </button>
    </div>
  );
};

export default Todo;
