import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

export interface Todo {
  id: string;
  desc: string;
  isComplete: boolean;
}

const initialState: Todo[] = [
  {
    id: 'sdkfjlksf',
    desc: 'Redux Toolkit',
    isComplete: false,
  },
];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const { id, desc } = action.payload;
      const targetTodo = state.find((todo) => todo.id === id);
      if (targetTodo) targetTodo.desc = desc;
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const targetTodo = state.find((todo) => todo.id === id);
      if (targetTodo) targetTodo.isComplete = !targetTodo.isComplete;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const targetIdx = state.findIndex((todo) => todo.id === id);
      state.splice(targetIdx, 1);
    },
  },
});

export const {
  createTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
} = todosSlice.actions;

// export const incrementAsync = (amount: number): AppThunk => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

export const selectTodos = (state: RootState) => state.todos;

export default todosSlice.reducer;
