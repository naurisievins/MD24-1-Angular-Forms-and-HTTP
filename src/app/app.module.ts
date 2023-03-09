import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwitchComponent } from './pages/animals/components/switch/switch.component';
import { FormComponent } from './pages/animals/components/form/form.component';
import { AnimalListComponent } from './pages/animals/components/animal-list/animal-list.component';
import { AppRoutingModule } from './app-routing.module';
import { TodoComponent } from './pages/todo/todo.component';
import { AnimalsComponent } from './pages/animals/animals.component';
import { TodoListComponent } from './pages/todo/components/todo-list/todo-list.component';
import { TodoFormComponent } from './pages/todo/components/todo-form/todo-form.component';

import { StoreModule } from '@ngrx/store';
import { ToDoReducer } from './Store/todo/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './Store/todo/todo.effect';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    FormComponent,
    AnimalListComponent,
    TodoComponent,
    AnimalsComponent,
    TodoListComponent,
    TodoFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({ todos: ToDoReducer }),
    EffectsModule.forRoot([ToDoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
