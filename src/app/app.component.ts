import { Component } from '@angular/core';
import { TodoFilters } from './todo/todo-filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  filters: TodoFilters;

  /** Called when filters form declares has a change. */
  onFilterChanges(values: TodoFilters) {
    this.filters = values;
  }
}
