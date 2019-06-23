import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UsersCrudComponent } from './users/crud/crud.component';
import { IFrameComponent } from './users/i-frame/i-frame.component';

const routes: Routes = [
  { path: 'users' ,component: UsersComponent ,data: { title: 'List of Users' } }
  ,{ path: 'users/crud' ,component: UsersCrudComponent ,data: { title: 'User Details/Add/Edit' } }
  ,{ path: 'iframe' ,component: IFrameComponent ,data: { title: 'I Frame Example' } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes ,{onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
