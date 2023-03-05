import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo } from 'src/app/Store/todo/todo.actions';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  tasks$: Observable<string[]>;

  todoForm = this.fb.group({
    todo: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private store: Store<{ tasks: string[] }>
  ) {
    this.tasks$ = store.select('tasks');
  }

  handleAddTodo() {
    const todo = this.todoForm.value.todo || '';

    this.store.dispatch(addTodo({ newTask: todo }));

    this.todoForm.patchValue({
      todo: '',
    });
  }
}
