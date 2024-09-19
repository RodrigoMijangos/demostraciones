import { Component, Input } from '@angular/core';
import { PostSerialization } from '../model/interface/post-serialization';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrl: './card-post.component.css'
})
export class CardPostComponent {

  @Input() post: PostSerialization = {
    id:0,
    user_id:0,
    title: "",
    body: ""
  }

}
