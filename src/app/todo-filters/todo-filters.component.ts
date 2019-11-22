import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoFilters } from '../todo-filters';

const DEFAULT_FILTERS = { name: '', finished: null };

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {

  /**
   * The change output.
   * Used to notify to parent component one of our fields has been updated.
   */
  @Output()
  private filter = new EventEmitter<TodoFilters>();

  /** The data of form. */
  private data: TodoFilters = {... DEFAULT_FILTERS};

  /** @inheritdoc */
  constructor() { }

  /** @inheritdoc */
  ngOnInit() {
  }

  /** Called when user alters the value of name input. */
  onNameChange(name: string) {
    this.data = {... this.data, name};
    this.filter.emit(this.data);
  }

  /** Called when user toggles finished checkbox. */
  onFinishedChange(finished: boolean) {
    this.data = {... this.data, finished};
    this.filter.emit(this.data);
  }

  onReset() {
    this.data = {... DEFAULT_FILTERS};
    this.filter.emit(this.data);
  }

  onSubmit() {}
}
