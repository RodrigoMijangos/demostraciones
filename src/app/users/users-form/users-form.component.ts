import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { UserSerialization } from '../models/interfaces/user-serialization';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrl: './users-form.component.css'
})
export class UsersFormComponent implements OnDestroy{

  @Output() emitter: EventEmitter<UserSerialization> = new EventEmitter<UserSerialization>()

  user: UserSerialization = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  constructor() { }

  ngOnDestroy(): void {
      alert("El componente se destruye")
  }

  send_user_or_cancel(send: boolean): void{
    if(!send){
      this.user.id = -1
    }

    this.emitter.emit(this.user)
  }

}
