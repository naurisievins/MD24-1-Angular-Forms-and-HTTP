import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { FormComponent } from './form/form.component';
import { AnimalListComponent } from './animal-list/animal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    FormComponent,
    AnimalListComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
