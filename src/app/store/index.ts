import { configureStore } from '@reduxjs/toolkit';
import { todoModel } from '../../entities/todo';

export const store = configureStore({
  reducer: {
    todo: todoModel.reducer,
  },
});
