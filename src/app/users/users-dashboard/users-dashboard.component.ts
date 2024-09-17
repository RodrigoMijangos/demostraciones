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

  is_adding_user=false

  constructor(private _service: UserService){  }

  ngOnInit(): void {
      this._service.getAllUsers().subscribe(
        response => {
          this.users = response
          console.log(
            JSON.stringify(this.users)
          )
        }
      )
  }

  init_add_user_process(): void{
    this.is_adding_user = true
  }
  

}
