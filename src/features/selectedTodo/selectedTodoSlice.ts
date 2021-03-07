import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

const initialState = {
  value: '',
};

export const selectedTodoSlice = createSlice({
  name: 'selectedTodo',
  initialState,
  reducers: {
    selectTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.value = id;
    },
  },
});

export const { selectTodo } = selectedTodoSlice.actions;

export const selectSelectedTodo = (state: RootState) =>
  state.selectedTodo.value;

export default selectedTodoSlice.reducer;
