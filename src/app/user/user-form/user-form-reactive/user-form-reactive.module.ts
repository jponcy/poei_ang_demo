import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormReactiveComponent } from './user-form-reactive.component';

@NgModule({
  declarations: [UserFormReactiveComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [UserFormReactiveComponent]
})
export class UserFormReactiveModule { }
