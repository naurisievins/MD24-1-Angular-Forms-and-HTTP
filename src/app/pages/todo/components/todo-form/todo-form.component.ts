import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ToDoState, ToDo } from 'src/app/Store/todo/todo.action';
import * as ToDoActions from '../../../../Store/todo/todo.action';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  constructor(
    private fb: FormBuilder,
    private store: Store<{ todos: ToDoState }>
  ) {}

  handleAddToDo() {
    const todo: ToDo = {
      title: this.todoForm.value.title || '',
      content: this.todoForm.value.content || '',
    };

    this.store.dispatch(ToDoActions.BeginCreateToDoAction({ payload: todo }));

    this.todoForm.patchValue({
      title: '',
      content: '',
    });
  }

  todoForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
  });
}
