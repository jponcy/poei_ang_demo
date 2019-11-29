import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule { }
