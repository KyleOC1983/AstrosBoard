import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ForumsComponent } from './components/forums/forums.component';
import { AstrosComponent } from './components/astros/astros.component';
import { MlbComponent } from './components/mlb/mlb.component';
import { MinorsComponent } from './components/minors/minors.component';
import { TherestComponent } from './components/therest/therest.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostdisplayComponent } from './components/postdisplay/postdisplay.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo} from '@angular/fire/auth-guard';
import { AuthGuard } from './auth.guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/login']);



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'forums', component: ForumsComponent},
  {path: 'threads', component: ThreadsComponent, canActivate: [AuthGuard]},
  {path: 'post', component: PostsComponent, canActivate: [AuthGuard]},
  {path: 'postdisplay', component: PostdisplayComponent, canActivate: [AuthGuard]},
  {path: 'astros', component: AstrosComponent},
  {path: 'mlb', component: MlbComponent},
  {path: 'minors', component: MinorsComponent},
  {path: 'therest', component: TherestComponent},
  {path: '**', redirectTo: '/forums'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
