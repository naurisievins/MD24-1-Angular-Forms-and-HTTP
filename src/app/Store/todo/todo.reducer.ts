import { createReducer, on } from '@ngrx/store';
import { addTodo, deleteTodo } from './todo.actions';

export const initialState: any[] = ['init tasks'];

export const todoReducer = createReducer(
  initialState,
  on(addTodo, (state, { newTask }) => [...state, newTask]),
  on(deleteTodo, (state, { id }) => state)
);
