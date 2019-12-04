import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormReactiveModule } from './user-form-reactive/user-form-reactive.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserFormReactiveModule
  ],
  exports: [
    UserFormReactiveModule
  ]
})
export class UserFormModule { }
