import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user$: Observable<User>;

  constructor(
      private readonly route: ActivatedRoute,
      private readonly api: UserService) { }

  ngOnInit() {
    console.log('init');
    this.route
        .params
        .subscribe(params => {
          console.log('subscribe');
          if (params.id) {
            console.log('id', params.id);
            this.user$ = this.api.getOne(params.id);
          }
        });
  }
}
