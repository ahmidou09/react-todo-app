import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodosList from './components/TodosList';

function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todosKey') || '[]'));
  const [editingId, setEditingId] = useState(null);

  const handleToggleItem = (id) => {
    setTodos((todos) => todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const handleDeleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditItem = (id) => {
    setEditingId(id);
  };

  useEffect(() => {
    localStorage.setItem('todosKey', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <header>
        <h1>Todos</h1>
        <p>Items will persist in browser local storage</p>
      </header>
      <div className="wrapper">
        <Form setTodos={setTodos} />
        <TodosList
          todosProps={todos}
          onToggleItem={handleToggleItem}
          onDeleteItem={handleDeleteItem}
          onEditItem={handleEditItem}
          editingId={editingId}
          todos={todos}
          setTodos={setTodos}
        />
      </div>
    </div>
  );
}

export default App;
