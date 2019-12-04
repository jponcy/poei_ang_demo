import { UserDetailsModule } from './user-details/user-details.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserListModule } from './user-list/user-list.module';
import { UserFormModule } from './user-form/user-form.module';

const exports = [
  UserListModule,
  UserDetailsModule,
  UserFormModule
];

const imports = exports.concat([
  CommonModule,
  SharedModule,
  HttpClientModule
]);

@NgModule({
  declarations: [],
  imports,
  exports
})
export class UserModule { }
