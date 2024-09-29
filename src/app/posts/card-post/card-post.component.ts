import { Component, Input, OnInit } from '@angular/core';
import { PostSerialization } from '../model/interfaces/post-serialization';
import { UserService } from '../../users/services/user.service';
import { PostView } from '../model/interfaces/post-view';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent implements OnInit{

  @Input()  post: PostSerialization = {
    id: 0,
    userId: 0,
    body: "",
    title: ""
  }

  view_data: PostView = {
    body: "",
    title: "",
    user: {
      id: 0,
      name: "",
      phone: "",
      username: "",
      website: ""
    }
  }

  constructor(private _service: UserService){}

  ngOnInit(): void {
      this._service.getUser(this.post.userId).subscribe(
        response => this.view_data = {
          title: this.post.title,
          body: this.post.body,
          user: response
        }
      )
  }

}
