import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserListComponent],
  imports: [
    SharedModule,
    RouterModule,
    CommonModule
  ],
  exports: [UserListComponent]
})
export class UserListModule { }
