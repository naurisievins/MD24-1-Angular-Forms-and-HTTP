import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

export type Animal = {
  _id: string;
  name: string;
  type: string;
};

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.scss'],
})
export class AnimalListComponent {
  @Input() animals: Animal[] = [];
  @Output() deleteAnimalEvent = new EventEmitter<string>();

  handleDeleteAnimal(id: string) {
    this.deleteAnimalEvent.emit(id);
  }
}
