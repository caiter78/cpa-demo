import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDashboardComponent } from './user-dashboard.component';
import { RouterModule } from '@angular/router';
import { CpaSharedModule } from "../shared/shared.module";
import { PostbackService } from "../../services/postback.service";


@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: UserDashboardComponent, pathMatch: 'full'}
    ]),
    CommonModule,
    CpaSharedModule
  ],
  declarations: [UserDashboardComponent],
  providers: [PostbackService]
})
export class UserDashboardModule { }
