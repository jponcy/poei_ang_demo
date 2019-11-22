import { TodoFilters } from './todo-filters';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  filters: TodoFilters;

  /** Called when filters form declares has a change. */
  onFilterChanges(values: TodoFilters) {
    console.log('onFilterChanges', values);
    this.filters = values;
  }
}
