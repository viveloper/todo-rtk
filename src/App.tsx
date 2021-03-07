import React from 'react';
import SelectedTodo from './components/SelectedTodo';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import UpdatedCount from './components/UpdatedCount';

function App() {
  return (
    <>
      <UpdatedCount />
      <TodoForm />
      <TodoList />
      <SelectedTodo />
    </>
  );
}

export default App;
