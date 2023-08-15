import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = ({
  todosProps, onToggleItem, onDeleteItem, onEditItem, editingId, todos, setTodos,
}) => (
  <ul className="todos-list">
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        onToggleItem={onToggleItem}
        onDeleteItem={onDeleteItem}
        onEditItem={onEditItem}
        editingId={editingId}
        todos={todos}
        setTodos={setTodos}
      />
    ))}
  </ul>
);

TodosList.propTypes = {
  todosProps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
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

TodosList.defaultProps = {
  editingId: null,
};

export default TodosList;
