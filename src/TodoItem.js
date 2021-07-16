import React from 'react';
import { useTodoContext } from './TodoContext';

const TodoItem = props => {
  const { index, content, isDone } = props;
  const { removeTodo, updateTodo } = useTodoContext();

  const handleOnChangeCheckbox = () => {
    updateTodo(index, !isDone);
  };

  function handleOnClickRemove(content) {
    removeTodo(content);
  }

  return (
    <div className='flex flex-start items-center w-full'>
      <input
        type='checkbox'
        className='form-checkbox h-7 w-7 text-green-600'
        checked={isDone}
        onChange={handleOnChangeCheckbox}
      />
      <p
        className={`${
          isDone ? 'line-through ' : ''
        } flex-1 ml-2 text-gray-600 break-words font-thin text-2xl`}
      >
        {content}
      </p>
      <button
        onClick={() => handleOnClickRemove(content)}
        className='text-gray-500 w-7 h-7 text-opacity-25 bg-transparent  hover:bg-gray-300 hover:text-white text-sm py-0 px-0 outline-none focus:outline-none mr-20 mb-1 ease-linear transition-all duration-150'
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
