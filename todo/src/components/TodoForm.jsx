// src/components/TodoForm.jsx
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setCategory("");
  };

  return (
    <div className="mt-8 pt-6 border-t border-emerald-900/10 dark:border-purple-700/30">
      <h2 className="text-xl font-bold mb-4 text-boticario-green dark:text-koru-purple">
        Criar tarefa
      </h2>

      <form
        onSubmit={handleSubmit}
        className="
          flex flex-col gap-3
          sm:grid sm:grid-cols-[1fr,auto,auto] sm:items-center
        "
      >
        <input
          type="text"
          placeholder="Título da tarefa"
          className="flex-grow p-3 rounded-lg
                     bg-white border border-emerald-900/10 text-slate-900
                     focus:outline-none focus:ring-2 focus:ring-boticario-green/30
                     dark:bg-koru-card dark:border-purple-700/30 dark:text-purple-50
                     dark:focus:ring-koru-purple/30"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <select
          className="p-3 rounded-lg
                     bg-white border border-emerald-900/10 text-slate-900
                     focus:outline-none focus:ring-2 focus:ring-boticario-green/30
                     dark:bg-koru-card dark:border-purple-700/30 dark:text-purple-50
                     dark:focus:ring-koru-purple/30"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Selecione a categoria</option>
          <option value="Estudos">Estudos</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Trabalho">Trabalho</option>
        </select>

        <button
          type="submit"
          className="px-6 py-3 rounded-lg font-semibold text-white transition-colors
                     bg-boticario-green hover:brightness-95
                     dark:bg-koru-purple dark:hover:brightness-110
                     focus:outline-none focus:ring-2 focus:ring-boticario-green/40 dark:focus:ring-koru-purple/40"
        >
          Criar tarefa
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
