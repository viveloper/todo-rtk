import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/counter/counterSlice';
import {
  selectSelectedTodo,
  selectTodo,
} from '../features/selectedTodo/selectedTodoSlice';
import {
  deleteTodo,
  editTodo,
  selectTodos,
  toggleTodo,
} from '../features/todos/todosSlice';

const SelectedTodo: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const id = useSelector(selectSelectedTodo);
  const todos = useSelector(selectTodos);

  const dispatch = useDispatch();

  const targetTodo = todos.find((todo) => todo.id === id);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current && targetTodo) {
      inputRef.current.value = targetTodo.desc;
    }
  }, [isEditing, targetTodo]);

  const handleToggleClick = () => {
    dispatch(toggleTodo(id));
    dispatch(increment());
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodo(id));
    dispatch(selectTodo(''));
    dispatch(increment());
  };

  const handleEditClick = () => {
    setIsEditing((prevState) => !prevState);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputRef.current) return;
    if (!targetTodo) return;

    const newTodo = {
      ...targetTodo,
      desc: inputRef.current.value,
    };

    dispatch(editTodo(newTodo));
    setIsEditing((prevState) => !prevState);
  };

  const handleReset = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditing((prevState) => !prevState);
  };

  if (!targetTodo) return null;

  if (isEditing) {
    return (
      <div>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          <input ref={inputRef} type="text" />
          <button type="submit">Apply</button>
          <button type="reset">Cancel</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className={clsx(targetTodo.isComplete && 'todo-done')}>
        {targetTodo.desc}
      </div>
      <div>
        <button onClick={handleEditClick}>Edit</button>
        <button onClick={handleToggleClick}>Toggle</button>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
};

export default SelectedTodo;
