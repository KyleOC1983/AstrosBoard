import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForumsComponent } from './components/forums/forums.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forums', component: ForumsComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
