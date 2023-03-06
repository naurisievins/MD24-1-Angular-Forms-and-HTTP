import { createAction, props } from '@ngrx/store';

export type ToDo = {
  _id?: string;
  title: string;
  content: string;
  done?: boolean;
  date?: string;
};

export type ToDoState = {
  ToDos: ToDo[];
  ToDoError: Error | null;
};

export const initializeState = (): ToDoState => {
  return { ToDos: Array<ToDo>(), ToDoError: null };
};

export const addTodo = createAction(
  '[todo Component] Add ToDo',
  props<{ newTask: string }>()
);

export const deleteTodo = createAction(
  '[todo Component] Delete Todo',
  props<{ id: string }>()
);

export const GetToDoAction = createAction('[ToDo] - Get ToDo');

export const CreateToDoAction = createAction(
  '[ToDo] - Create ToDo',
  props<ToDo>()
);

export const BeginGetToDoAction = createAction('[ToDo] - Begin Get ToDo');

export const SuccessGetToDoAction = createAction(
  '[ToDo] - Success Get ToDo',
  props<{ payload: ToDo[] }>()
);

export const BeginCreateToDoAction = createAction(
  '[ToDo] - Begin Create ToDo',
  props<{ payload: ToDo }>()
);

export const SuccessCreateToDoAction = createAction(
  '[ToDo] - Success Create ToDo',
  props<{ payload: ToDo }>()
);

export const BeginDeleteToDoAction = createAction(
  '[ToDo] - Begin Delete ToDo',
  props<{ payload: String }>()
);

export const SuccessDeleteToDoAction = createAction(
  '[ToDo] - Success Delete ToDo',
  props<{ payload: String }>()
);

export const ErrorToDoAction = createAction('[ToDo] - Error', props<Error>());
