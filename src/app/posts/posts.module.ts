import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPostsComponent } from './dashboard-posts/dashboard-posts.component';
import { CardPostComponent } from './card-post/card-post.component';



@NgModule({
  declarations: [
    DashboardPostsComponent,
    CardPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DashboardPostsComponent]
})
export class PostsModule { }
