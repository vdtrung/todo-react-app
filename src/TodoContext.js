import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
const TodoContext = createContext();

export function useTodoContext() {
  return useContext(TodoContext);
}

// destruct array
// array: [...oldArray, newValue]
//set(value)

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(
    JSON.parse(sessionStorage.getItem('todosInLocal')) || []
  );

  useEffect(() => {
    sessionStorage.setItem('todosInLocal', JSON.stringify(todos));
  }, [todos]);

  const addTodo = useCallback(newTodo => {
    setTodos(pre => [...pre, newTodo]);
  }, []);

  const removeTodo = useCallback(content => {
    setTodos(pre => pre.filter(td => content !== td.content));
  }, []);

  const updateTodo = useCallback(
    (idx, isDone) => {
      const newTodos = [...todos];
      newTodos[idx].isDone = isDone;
      setTodos(newTodos);
    },
    [todos]
  );

  const clearCompleted = useCallback(() => {
    setTodos(pre => pre.filter(td => td.isDone === false));
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        removeTodo,
        updateTodo,
        clearCompleted,
        setTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
