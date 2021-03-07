import clsx from 'clsx';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodo } from '../features/selectedTodo/selectedTodoSlice';
import { selectTodos, Todo } from '../features/todos/todosSlice';

type TodoListProps = {};

const TodoList: React.FC<TodoListProps> = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  const handleClick = (id: string) => {
    dispatch(selectTodo(id));
  };
  return (
    <ul>
      {todos.map((todo) => (
        <li
          className={clsx(todo.isComplete && 'todo-done')}
          key={todo.id}
          onClick={() => handleClick(todo.id)}
        >
          {todo.desc}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
