import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Animal } from '../animal-list/animal-list.component';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  @Output() addAnimalEvent = new EventEmitter<Omit<Animal, '_id'>>();

  animalForm = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required],
  });

  types: string[] = ['Cat', 'Dog'];
  default: string = 'Cat';

  constructor(private fb: FormBuilder, private httpService: HttpService) {
    this.animalForm.controls['type'].setValue(this.default, {
      onlySelf: true,
    });
  }

  handleAddAnimal() {
    const animal: Omit<Animal, '_id'> = {
      name: this.animalForm.value.name || '',
      type: this.animalForm.value.type || '',
    };

    this.addAnimalEvent.emit(animal);

    this.animalForm.patchValue({
      name: '',
    });
  }
}
