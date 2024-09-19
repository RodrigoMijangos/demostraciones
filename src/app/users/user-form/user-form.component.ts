import { Component, EventEmitter, Output } from '@angular/core';
import { UserSerialization } from '../models/interfaces/user-serialization';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  @Output() emmiter: EventEmitter<UserSerialization> = new EventEmitter<UserSerialization>()

  user: UserSerialization = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: ""
  }

  add_user_or_cancel(cancel: boolean): void{
    if(cancel){
      this.user.id = -1
    }

    this.emmiter.emit(this.user)

  }

}
