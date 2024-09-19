import { Component, Input, OnInit } from '@angular/core';
import { PostSerialization } from '../model/interface/post-serialization';
import { PostView } from '../model/interface/post-view';
import { UserService } from '../../users/services/user.service';
import { UserSerialization } from '../../users/models/interfaces/user-serialization';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent implements OnInit{

  @Input() post: PostSerialization = {
    id:0,
    userId:0,
    title: "",
    body: ""
  }

  user: UserSerialization = {
    id: 0,
    name: "",
    phone: "",
    username: "",
    website: ""
  }

  username = ""

  post_view: PostView

  constructor(private _userService: UserService){

    this.post_view = {
      title: "",
      body: "",
      posted_by: {
        id: 0,
        name: "",
        phone: "",
        username: "",
        website: "",
      }
    }

  }

  ngOnInit(): void {
      this._userService.getUser(this.post.userId).subscribe(
        response => {
          this.username = response.username
        }
      )
  }

}
