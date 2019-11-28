import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Todo } from '../todo';
import { TodoApiService } from '../todo-api.service';
import { TodoFilters } from '../todo-filters';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  private filters: TodoFilters;

  private todos: Todo[] = null;

  filteredTodos: Todo[] = null;
  sub: Subscription;

  constructor(private api: TodoApiService) {
  }

  ngOnInit() {
    this.api
        .getAll()
        .subscribe(data => this.receiveTodoList(data));
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
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

  private receiveTodoList(data: Todo[]) {
    this.todos = data;
    this.applyFilter();
  }
}
