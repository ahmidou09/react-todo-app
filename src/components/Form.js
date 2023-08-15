import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AiFillPlusCircle } from 'react-icons/ai';

const Form = ({ setTodos }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        title,
        completed: false,
      },
    ]);

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        id="task"
        className="input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        maxLength={60}
        placeholder="Add todo..."
      />
      <button type="submit" className="btn btn-submit">
        <AiFillPlusCircle className="icon" />
      </button>
    </form>
  );
};

Form.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default Form;
