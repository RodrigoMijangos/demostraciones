import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UsersDashboardComponent,
    UsersFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
