import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersFormComponent } from './users-form/users-form.component';



@NgModule({
  declarations: [
    UsersDashboardComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
