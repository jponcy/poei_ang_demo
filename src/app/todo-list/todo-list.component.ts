import { Todo } from './../todo';
import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = null;

  ngOnInit() {
    setTimeout(() => {
      this.todos = [];
      setTimeout(() => this.todos = allTodos, 2_000);
    }, 1_000);
  }
}
