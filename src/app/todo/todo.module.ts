import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoFiltersComponent } from './todo-filters/todo-filters.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoFiltersComponent,
    TodoListComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoModule { }
