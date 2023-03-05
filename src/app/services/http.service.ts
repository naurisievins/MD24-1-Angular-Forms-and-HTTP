import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../pages/animals/components/animal-list/animal-list.component';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getAnimals() {
    return this.http.get<Animal[]>('http://localhost:3004/get-animals');
  }

  getCats() {
    return this.http.get<Animal[]>('http://localhost:3004/get-cats');
  }

  postAnimal(body: Omit<Animal, '_id'>) {
    return this.http.post<Animal>('http://localhost:3004/post-animal', body);
  }

  deleteAnimal(id: string) {
    return this.http.delete(`http://localhost:3004/animals/${id}`);
  }
}
