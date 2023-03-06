// import { createReducer, on } from '@ngrx/store';
// import { addTodo, deleteTodo } from './todo.action';

// type TodoList = {
//   title: string;
//   content: string;
//   done: boolean;
//   date: string;
// };

// export const todoList: any[] = [];

// export const todoReducer = createReducer(
//   todoList,
//   on(addTodo, (state, { newTask }) => [...state, newTask]),
//   on(deleteTodo, (state, { id }) => state)
// );

import { Action, createReducer, on } from '@ngrx/store';
import * as ToDoActions from './todo.action';
import { ToDo, ToDoState, initializeState } from './todo.action';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(ToDoActions.GetToDoAction, (state) => state),
  on(ToDoActions.CreateToDoAction, (state: ToDoState, todo: ToDo) => {
    return { ...state, ToDos: [...state.ToDos, todo], ToDoError: null };
  }),
  on(ToDoActions.SuccessGetToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: payload };
  }),
  on(ToDoActions.SuccessCreateToDoAction, (state: ToDoState, { payload }) => {
    return { ...state, ToDos: [...state.ToDos, payload], ToDoError: null };
  }),
  on(ToDoActions.ErrorToDoAction, (state: ToDoState, error: Error) => {
    console.log(error);
    return { ...state, ToDoError: error };
  }),
  on(ToDoActions.SuccessDeleteToDoAction, (state: ToDoState, { payload }) => {
    const index = state.ToDos.findIndex((todo) => todo._id === payload);
    if (index === -1) {
      return state;
    }
    const ToDos = [...state.ToDos];
    ToDos.splice(index, 1);
    return { ...state, ToDos, ToDoError: null };
  })
);

export function ToDoReducer(state: ToDoState | undefined, action: Action) {
  return reducer(state, action);
}
