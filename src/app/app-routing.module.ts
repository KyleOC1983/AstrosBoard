import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForumsComponent } from './components/forums/forums.component';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Forums', component: ForumsComponent},
  {path: '**', redirectTo: '/Login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
