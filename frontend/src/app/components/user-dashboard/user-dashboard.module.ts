import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { LoginComponent } from "../login/login.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserDashboardComponent, pathMatch: 'full'}
    ]),
    CommonModule
  ],
  declarations: [UserDashboardComponent]
})
export class UserDashboardModule { }
