import React, { useCallback, useEffect, useState } from 'react';
import { useTodoContext } from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, clearCompleted } = useTodoContext();
  const [todosList, setTodosList] = useState([]);

  useEffect(() => {
    setTodosList([]);
    setTodosList(todos);
  }, [todos]);

  var countTodos = 0;
  if (todosList) {
    countTodos = todosList.filter(td => td.isDone === false);
  }

  const handleClickActive = useCallback(() => {
    setTodosList(pre => pre.filter(td => td.isDone === false));
  }, []);

  const handleClickClearCompleted = e => {
    clearCompleted();
  };

  const handleClickAll = useCallback(() => {
    setTodosList(todos);
  }, [todos]);

  return (
    <div>
      <ul>
        {todosList
          ? todosList.map((td, idx) => (
              <TodoItem
                key={idx}
                index={idx}
                isDone={td.isDone}
                content={td.content}
              />
            ))
          : null}
      </ul>
      {todosList ? (
        todosList.length > 0 ? (
          <div>
            <span className='text-gray-500 text-xs mr-10'>
              {`${countTodos.length} items left`}
            </span>

            <button
              onClick={handleClickAll}
              className='text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-300 hover:text-white active:bg-pink-600 text-xs px-2 py-0 outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150'
              type='button'
            >
              all
            </button>

            <button
              onClick={handleClickActive}
              className='text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-300 hover:text-white active:bg-pink-600 text-xs px-2 py-0 outline-none focus:outline-none mr-2 mb-1 ease-linear transition-all duration-150'
              type='button'
            >
              active
            </button>
            <button
              onClick={handleClickClearCompleted}
              className='text-gray-500 bg-transparent border border-solid border-gray-500 hover:bg-gray-300 hover:text-white active:bg-pink-600 text-xs px-2 py-0 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
              type='button'
            >
              clear completed
            </button>
          </div>
        ) : null
      ) : null}
    </div>
  );
};

export default TodoList;
