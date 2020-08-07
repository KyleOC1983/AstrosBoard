import { Component, OnInit } from '@angular/core';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';
import { MatTableDataSource } from '@angular/material/table';
import { ThreadPost, AstrosComponent } from '../astros/astros.component';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PostsComponent } from '../posts/posts.component';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-postdisplay',
  templateUrl: './postdisplay.component.html',
  styleUrls: ['./postdisplay.component.scss']
})
export class PostdisplayComponent implements OnInit {

  posts: any;
  thread: any;

  constructor(private postNThreadService: PostsnthreadsService, private router: Router, public dialog: MatDialog) { 
    
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(PostsComponent, {
      width: '90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
    if(this.postNThreadService.currentThread === ''){
      this.router.navigate(['/astros']);
    }
    else{
    this.postNThreadService.getThreadById().subscribe((v: ThreadPost)=>
    this.thread = v);
    this.postNThreadService.getPostById().subscribe((v: ThreadPost[])=>{
      this.posts = v;
    })
  }
  }

}
