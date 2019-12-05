import { UserDetailsComponent } from './user/user-details/user-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserFormReactiveComponent } from './user/user-form/user-form-reactive/user-form-reactive.component';
import { LogguedGuard } from './auth/loggued.guard';

const routes: Routes = [
  { path: 'todo', component: TodoListComponent },
  {
    path: 'user',
    children: [
      { path: '',       component: UserListComponent, pathMatch: 'full' },
      { path: 'create', component: UserFormReactiveComponent },
      { path: ':id',    component: UserDetailsComponent }
    ],
    canActivate: [ LogguedGuard ]
  },
  // { path: 'user',     component: UserListComponent },
  // { path: 'user/:id', component: UserDetailsComponent },
  { path: '',     redirectTo: 'todo', pathMatch: 'full' },
  { path: '**',   component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
