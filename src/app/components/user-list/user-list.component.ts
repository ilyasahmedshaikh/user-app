import { Component, OnInit } from '@angular/core';

import {UsersListingService} from '../../core/http/users/users-listing.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private usersService: UsersListingService
  ) { }

  ngOnInit() {
    this.hitUsersService();
  }

  // for running users functions from users-service
  data: any;
  hitUsersService() {
    this.usersService.getUsers();
    
    setTimeout(() => {
      this.data = this.usersService.data;
      console.log(this.data);
    }, 1000);

    
  }

}
