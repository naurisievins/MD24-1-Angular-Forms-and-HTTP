import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { AnimalsComponent } from './pages/animals/animals.component';

const routes: Routes = [
  { path: 'todo', component: TodoComponent },
  { path: '', component: AnimalsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
