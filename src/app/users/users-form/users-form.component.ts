import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { UserSerialization } from '../models/interfaces/user-serialization';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent implements OnDestroy{

  @Output() emitter = new EventEmitter<UserSerialization>()

  user: UserSerialization = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  ngOnDestroy(): void {
      console.log("El componente se destruye")
  }

  send_user(): void {
    this.emitter.emit(this.user)
  }

  cancel(): void {
    this.user.id = -1
    this.emitter.emit(this.user)
  }

}
