import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  name = new FormControl('');
  type = new FormControl('');

  types: string[] = ['Cat', 'Dog'];

  onSubmit($event: Event) {
    $event.preventDefault();
    console.log(this.name.value);
    console.log(this.type.value);
    return false;
  }
}
