import { useState } from 'react'

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isComplete: false,
      });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input"
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
