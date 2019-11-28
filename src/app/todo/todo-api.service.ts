import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Todo } from './todo';

let id = 0;
const gen = (label: string, finished = false) => ({
  id: ++id,
  label,
  finished
});

const allTodos: Todo[] = [
  gen('Apprendre le Typescript', true),
  gen('Apprendre le SASS', true),
  gen('Faire notre première application Angular', true),
  gen('Ajouter plusieurs composants'),
  gen('Passer un paramètre d\'entré'),
  gen('Utiliser un événement de sortie'),
  gen('Voir rxjs')
];

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor() { }

  getAll() {
    return of(allTodos)
      .pipe(delay(1_000));
  }
}
