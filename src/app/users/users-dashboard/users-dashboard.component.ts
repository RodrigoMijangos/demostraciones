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

  ngOnInit(): void {
      this._service.getAllUsers().subscribe(
        response => this.users = response
      )
  }

}
