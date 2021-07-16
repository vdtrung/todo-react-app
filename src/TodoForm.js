import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';
const TodoForm = () => {
  const [todo, setTodo] = useState();
  const { addTodo } = useTodoContext();

  const handleOnChange = e => {
    setTodo(e.target.value);
  };

  const handleKeyUp = e => {
    if (e.keyCode === 13) {
      addTodo({ isDone: false, content: todo });
      setTodo('');
    }
  };

  return (
    <div>
      <input
        type='text'
        className='w-full mb-3 px-4 text-2xl font-light italic py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white text-m shadow outline-none focus:outline-none'
        value={todo ? todo : ''}
        onChange={handleOnChange}
        onKeyUp={handleKeyUp}
        placeholder='What needs to be done?'
      ></input>
    </div>
  );
};

export default TodoForm;
