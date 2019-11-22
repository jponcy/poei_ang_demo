import { Component, OnInit } from '@angular/core';

interface Task {
  id: number;
  label: string;
  finished: boolean;
}

let id = 0;
const gen = (label: string, finished = false) => ({
  id: ++id,
  label,
  finished
});
const allTodos: Task[] = [
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

  todos: Task[] = null;

  ngOnInit() {
    setTimeout(() => {
      this.todos = [];
      setTimeout(() => this.todos = allTodos, 2_000);
    }, 1_000);
  }
}
