import { AfterViewInit, Component, OnInit } from '@angular/core';
import { User, UserCollection } from './models/users.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  template: `
    <div class="p-3">
      <div class="card-columns">
        <div class="card"
          *ngFor="let user of users?.data">
          <img [src]="user.avatar" />
          <div class="card-body">
            <h5 class="card-title">{{user.first_name}} {{user.last_name}}</h5>
            <p class="card-text">{{user.email}}</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  users: UserCollection= null;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((res: any) => {
      this.users = res;
    }, (err) => {
      console.log(err);
      // todo: errors management
    })
  }

}
