import { Component, OnInit } from '@angular/core';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  displayName: string = '';
  title: string = '';
  post: string = '';
  

  constructor(private postsNThreadsService: PostsnthreadsService, private auth: AngularFireAuth) { }

  addNewThread(){
    let title = this.title
    let post = this.post
    let user = this.displayName
    this.postsNThreadsService.newThread(title, user, post);  
  }

  ngOnInit(): void {
    this.auth.user.subscribe(user=> this.displayName = user ? user.displayName : '')
  }

}
