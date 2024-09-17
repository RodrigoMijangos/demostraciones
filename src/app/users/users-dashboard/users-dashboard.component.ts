import { Component, OnInit } from '@angular/core';
import { UserSerialization } from '../models/interfaces/user-serialization';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent implements OnInit{

  users: UserSerialization[] = []

  adding_user: boolean = false

  constructor(private _service: UserService){  }

  ngOnInit(): void {
      this._service.getAllUsers().subscribe(
        response => {
          this.users = response;
        }
      )
  }

  addUser(){
    this.adding_user = true
  }

  add_or_cancel(user: UserSerialization): void {
    if(user.id != -1)
      this.users.push(user)

    this.adding_user = false

    console.log(this.users)
  }

}
