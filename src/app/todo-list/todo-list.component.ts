import { Component, Input, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Todo } from './../todo';
import { TodoFilters } from './../todo-filters';

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

  private filters: TodoFilters;

  private todos: Todo[] = null;

  filteredTodos: Todo[] = null;

  ngOnInit() {
    of(allTodos)
      .pipe(
        delay(1_000),
        tap(data => this.todos = data))
      .subscribe(() => this.applyFilter());
  }

  @Input('filters')
  set setFilters(filters: TodoFilters) {
    if (filters) {
      filters.name = (filters.name || '').trim().toLowerCase();
      this.filters = filters;
      this.applyFilter();
    }
  }

  get total() {
    return (this.todos || []).length;
  }

  onTodoClick(todoIndex: number) {
    const todo = this.filteredTodos[todoIndex];

    todo.finished = !todo.finished;

    this.applyFilter();
  }

  onDelete(event, index: number) {
    event.stopPropagation();

    this.filteredTodos.splice(index, 1);
  }

  onPurge() {
    // for (let i = this.todos.length - 1; i >= 0; i --) {
    //   if (this.todos[i].finished) {
    //     this.todos.splice(i, 1);
    //   }
    // }
    // Ou.
    this.todos = this.todos.filter(t => !t.finished);

    this.applyFilter();
  }

  private applyFilter() {
    if (!this.todos) { return; }

    if (this.filters) {
      this.filteredTodos = this.todos
        .filter(t => {
          // No print tasks with uncorresponding label.
          if (this.filters.name && !t.label.toLowerCase().includes(this.filters.name)) {
            return false;
          }

          // No print finished tasks of not asked.
          if (this.filters.finished === false && t.finished) {
            return false;
          }

          return true;
        });
    } else {
      this.filteredTodos = this.todos;
    }
  }
}
