import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './materialModule';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { ForumsComponent } from './components/forums/forums.component';
import { ThreadsComponent } from './components/threads/threads.component';
import { PostsComponent } from './components/posts/posts.component';
import { ProfanityPipe } from './pipes/profanity.pipe';
import { AstrosComponent } from './components/astros/astros.component';
import { MlbComponent } from './components/mlb/mlb.component';
import { MinorsComponent } from './components/minors/minors.component';
import { TherestComponent } from './components/therest/therest.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForumsComponent,
    ThreadsComponent,
    PostsComponent,
    ProfanityPipe,
    AstrosComponent,
    MlbComponent,
    MinorsComponent,
    TherestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
