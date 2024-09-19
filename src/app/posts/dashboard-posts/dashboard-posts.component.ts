import { Component, OnInit } from '@angular/core';
import { PostSerialization } from '../model/interface/post-serialization';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dashboard-posts',
  templateUrl: './dashboard-posts.component.html',
  styleUrl: './dashboard-posts.component.css'
})
export class DashboardPostsComponent implements OnInit{
  
  posts: PostSerialization[] = []

  constructor(private _service: PostService){  }
  
  ngOnInit(): void {
      this._service.getAllPosts().subscribe(
        response => this.posts = response
      )
  }
}
