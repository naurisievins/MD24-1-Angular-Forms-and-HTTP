import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { ToDoState, ToDo } from 'src/app/Store/todo/todo.action';
import * as ToDoActions from '../../../../Store/todo/todo.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<{ todos: ToDoState }>) {
    this.todo$ = store.pipe(select('todos'));
  }

  ngOnInit() {
    this.ToDoSubscription = this.todo$
      .pipe(
        map((x) => {
          this.ToDoList = x.ToDos;
          this.todoError = x.ToDoError;
        })
      )
      .subscribe();

    this.store.dispatch(ToDoActions.BeginGetToDoAction());
  }

  todo$: Observable<ToDoState>;
  ToDoSubscription!: Subscription;
  ToDoList: ToDo[] = [];
  todoError: Error | null = null;

  handleDeleteToDo(id: string) {
    this.store.dispatch(ToDoActions.BeginDeleteToDoAction({ payload: id }));
  }

  handleToDoDone(id: string) {
    this.store.dispatch(ToDoActions.BeginMarkToDoAsDone({ payload: id }));
  }

  ngOnDestroy() {
    if (this.ToDoSubscription) {
      this.ToDoSubscription.unsubscribe();
    }
  }
}
