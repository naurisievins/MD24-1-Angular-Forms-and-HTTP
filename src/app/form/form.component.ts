import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  animalForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
  });

  types: string[] = ['Cat', 'Dog'];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    console.log('form submited');
    console.log(this.animalForm.value);
  }
}
