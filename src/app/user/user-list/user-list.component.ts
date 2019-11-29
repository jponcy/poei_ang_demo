import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { UserListDTO } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<UserListDTO[]>;

  constructor(private readonly service: UserService) { }

  ngOnInit() {
    this.users$ = this.service.getAll();
  }

}
