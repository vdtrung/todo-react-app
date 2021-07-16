import React from 'react';
import { TodoProvider } from './TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const App = () => {
  return (
    <TodoProvider>
      <div className='max-w-md m-auto font-sans'>
        <header className='text-5xl text-center font-thin text-blue-400 mb-2'>
          Todos
        </header>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default App;
