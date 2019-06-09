import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UsersComponent implements OnInit {

  users: Array<User> = [];

  constructor(
    private userService: UserService
  ) {
    const userCallback = (err, users) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(users);
      this.users = users;
    };

    this.userService.getAllUsers(userCallback);
    console.log(this.users);
  }

  ngOnInit() {
  }

}