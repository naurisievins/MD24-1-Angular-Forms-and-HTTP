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
  }),

  on(ToDoActions.MarkToDoAsDone, (state: ToDoState, { payload }) => {
    const index = state.ToDos.findIndex((todo) => todo._id === payload);
    if (index === -1) {
      return state;
    }
    console.log(123);
    const todoToUpdate = state.ToDos[index];
    const updatedTodo = { ...todoToUpdate, done: !todoToUpdate.done };
    const updatedToDos = [...state.ToDos];
    updatedToDos[index] = updatedTodo;
    return { ...state, ToDos: updatedToDos, ToDoError: null };
  })
);

export function ToDoReducer(state: ToDoState | undefined, action: Action) {
  return reducer(state, action);
}
