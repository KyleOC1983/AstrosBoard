import { Component, OnInit } from '@angular/core';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  displayName: string = '';
  post: string = '';

  constructor(private postsNThreadsService: PostsnthreadsService, private auth: AngularFireAuth, 
    public dialogRef: MatDialogRef<PostsComponent>) { }
cancel(){
  this.dialogRef.close();
}
  addNewPost(){
    let post = this.post;
    let user = this.displayName;
    this.postsNThreadsService.newPost(user, post);
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.auth.user.subscribe(user=> this.displayName = user ? user.displayName : '')
  }

}
