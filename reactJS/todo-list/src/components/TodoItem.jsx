import { FaTrash, FaCheck } from 'react-icons/fa';

function TodoItem({ todo, completeTodo, removeTodo }) {
  return (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className="icons">
        <FaTrash onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <FaCheck onClick={() => completeTodo(todo.id)} className="complete-icon" />
      </div>
    </div>
  );
}

	export default TodoItem;
