import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { increment } from '../features/counter/counterSlice';
import { createTodo, Todo } from '../features/todos/todosSlice';

const TodoForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    const newTodo: Todo = {
      id: uuidv4(),
      desc: inputRef.current.value,
      isComplete: false,
    };
    dispatch(createTodo(newTodo));
    dispatch(increment());
    inputRef.current.value = '';
  };
  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" />
      <button type="submit">Create</button>
    </form>
  );
};

export default TodoForm;
