import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoFiltersComponent } from './todo-filters/todo-filters.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TodoFiltersComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TodoFiltersComponent,
    TodoListComponent
  ]
})
export class TodoModule { }
