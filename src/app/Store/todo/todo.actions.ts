import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[todo Component] addTodo',
  props<{ newTask: string }>()
);

export const deleteTodo = createAction(
  '[todo Component] deleteTodo',
  props<{ id: string }>()
);
