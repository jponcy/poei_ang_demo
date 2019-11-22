import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-filters',
  templateUrl: './todo-filters.component.html',
  styleUrls: ['./todo-filters.component.scss']
})
export class TodoFiltersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  changeName(name: string) {
    console.log('New name', name);
  }
}
