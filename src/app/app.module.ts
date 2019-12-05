import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { httpInterceptors } from './interceptors';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    TodoModule,
    UserModule,
    SharedModule,
    AuthModule
  ],
  providers: [
    httpInterceptors
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
