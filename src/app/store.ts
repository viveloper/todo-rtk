import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import todosReducer from '../features/todos/todosSlice';
import selectedTodoReducer from '../features/selectedTodo/selectedTodoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    selectedTodo: selectedTodoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
