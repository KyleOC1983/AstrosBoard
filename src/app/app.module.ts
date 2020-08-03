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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForumsComponent,
    ThreadsComponent,
    PostsComponent,
    ProfanityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
