import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TiEdit } from 'react-icons/ti';
import { MdDelete } from 'react-icons/md';

const TodoItem = ({
  itemProp, onToggleItem, onDeleteItem, onEditItem, editingId, todos, setTodos,
}) => {
  const [editedTitle, setEditedTitle] = useState(itemProp.title);

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const update = todos.map((t) => (t.id === itemProp.id ? { ...t, title: editedTitle } : t));
    setTodos(update);
    localStorage.setItem('todosKey', JSON.stringify(update));
    onEditItem(null);
  };

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => onToggleItem(itemProp.id)}
      />
      {editingId === itemProp.id ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            onBlur={handleEditSubmit}
            className="input-edit"
          />
        </form>
      ) : (
        <span style={itemProp.completed ? { textDecoration: 'line-through' } : {}}>
          {itemProp.title}
        </span>
      )}

      <div className="box-icon">
        <button
          type="button"
          aria-label="Edit"
          className="btn"
          onClick={() => onEditItem(itemProp.id)}
        >
          <TiEdit className="edit icon" />
        </button>
        <button
          type="button"
          aria-label="Delete"
          className="btn"
          onClick={() => onDeleteItem(itemProp.id)}
        >
          <MdDelete className="delete icon" />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onToggleItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  editingId: PropTypes.number,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setTodos: PropTypes.func.isRequired,
};

TodoItem.defaultProps = {
  editingId: null,
};

export default TodoItem;
