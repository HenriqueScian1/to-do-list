import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm';

import "./App.css"

  function App() {
    const [todos, setTodos] = useState([
      {
        id: 1,
        text: 'Fazer funcionalidade no sistema',
        category: 'Trabalho',
        isCompleted: false,
      },
      {
        id: 2,
        text: 'Estudar React',
        category: 'Estudos',
        isCompleted: false,
      },
      {
        id: 3,
        text: 'Ir ao supermercado',
        category: 'Pessoal',
        isCompleted: false,
      },
    ]);

    const addTodo = (text, category) =>{ 
    const newTodos = [...todos, {
      id: Math.random() *10000,
      text, 
      category,
      isCompleted: false
    }]

    setTodos(newTodos);
  };

    return <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>;

}

export default App
