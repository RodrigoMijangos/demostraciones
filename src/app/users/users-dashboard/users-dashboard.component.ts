import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserSerialization } from '../models/interfaces/user-serialization';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrl: './users-dashboard.component.css'
})
export class UsersDashboardComponent implements OnInit{

  constructor(private _service: UserService){  }

  users: UserSerialization[] = []

  is_beign_adding_user: boolean = false

  ngOnInit(): void {
      this._service.getAllUsers().subscribe(
        response => this.users = response
      )
  }

  init_add_user_process():void {
    this.is_beign_adding_user = true
  }

  add_user_or_hide_form(user: UserSerialization): void{
    if(user.id != -1)
      this.users.push(user)

    this.is_beign_adding_user = false
  }
  
}
