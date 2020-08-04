import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForumsComponent } from './components/forums/forums.component';
import { AstrosComponent } from './components/astros/astros.component';
import { MlbComponent } from './components/mlb/mlb.component';
import { MinorsComponent } from './components/minors/minors.component';
import { TherestComponent } from './components/therest/therest.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'astros', component: AstrosComponent},
  {path: 'mlb', component: MlbComponent},
  {path: 'minors', component: MinorsComponent},
  {path: 'therest', component: TherestComponent},
  {path: '**', redirectTo: '/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
