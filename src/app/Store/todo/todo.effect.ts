import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ToDoActions from './todo.action';
import { ToDo } from './todo.action';

@Injectable()
export class ToDoEffects {
  constructor(private http: HttpClient, private action$: Actions) {}

  GetToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginGetToDoAction),
      mergeMap(() =>
        this.http.get<ToDo[]>('http://localhost:3004/get-todos').pipe(
          map((data: ToDo[]) => {
            return ToDoActions.SuccessGetToDoAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(ToDoActions.ErrorToDoAction(error));
          })
        )
      )
    )
  );

  CreateToDos$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginCreateToDoAction),
      mergeMap((action) =>
        this.http
          .post<ToDo>(
            'http://localhost:3004/post-todo',
            JSON.stringify(action.payload),
            {
              headers: { 'Content-Type': 'application/json' },
            }
          )
          .pipe(
            map((data: ToDo) => {
              return ToDoActions.SuccessCreateToDoAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(ToDoActions.ErrorToDoAction(error));
            })
          )
      )
    )
  );

  deleteToDo$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(ToDoActions.BeginDeleteToDoAction),
      mergeMap((action) =>
        this.http
          .delete(`http://localhost:3004/delete-todo/${action.payload}`)
          .pipe(
            map(() => {
              return ToDoActions.SuccessDeleteToDoAction({
                payload: action.payload,
              });
            }),
            catchError((error: Error) => {
              return of(ToDoActions.ErrorToDoAction(error));
            })
          )
      )
    )
  );
}
