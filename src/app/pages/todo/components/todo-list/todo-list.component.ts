import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  tasks$: Observable<string[]>;

  constructor(private store: Store<{ tasks: string[] }>) {
    this.tasks$ = store.select('tasks');
  }
}
