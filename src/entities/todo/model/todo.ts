// todoSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Todo {
  id: number;
  text: string;
  deleted: boolean;
}

interface TodoState {
  activeTab: 'all' | 'deleted';
  inputValue: string;
  todos: Todo[];
}

const initialState: TodoState = {
  activeTab: 'all',
  inputValue: '',
  todos: [],
};

const todoModel = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setActiveTab(state, action: PayloadAction<'all' | 'deleted'>) {
      state.activeTab = action.payload;
    },
    setInputValue(state, action: PayloadAction<string>) {
      state.inputValue = action.payload;
    },
    addTodo(state) {
      if (state.inputValue.trim() !== '') {
        const newTodo: Todo = {
          id: Date.now(),
          text: state.inputValue,
          deleted: false,
        };
        state.todos.push(newTodo);
        state.inputValue = '';
      }
    },
    markAsDeleted(state, action: PayloadAction<number>) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.deleted = true;
      }
    },
    markAsUndeleted(state, action: PayloadAction<number>) {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) {
        todo.deleted = false;
      }
    },
  },
});

export const {
  setActiveTab,
  setInputValue,
  addTodo,
  markAsDeleted,
  markAsUndeleted,
} = todoModel.actions;

export const reducer = todoModel.reducer;
