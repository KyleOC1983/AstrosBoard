import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';




@Component({
  selector: 'app-astros',
  templateUrl: './astros.component.html',
  styleUrls: ['./astros.component.scss']
})
export class AstrosComponent implements OnInit {

  displayedColumns: string[] = ['date', 'title', 'user'];
  dataSource: MatTableDataSource<ThreadPost>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  forum: string = '';
  

  constructor(private postsNThreadsService: PostsnthreadsService, private router: Router) { }



  addNewThread(title: string, user: string, post: string){
    this.postsNThreadsService.newThread(title, user, post);   
  }

  removeThread(id: string){
    this.postsNThreadsService.deleteThread(id);
  }

  viewPosts(id: string, title: string){
    this.postsNThreadsService.currentThread = id
    this.postsNThreadsService.currentTitle = title
    // navigate to /posts
    this.router.navigate(['/postdisplay']);
  }

  ngOnInit(): void {
    this.postsNThreadsService.messageThread.subscribe((v: ThreadPost[])=>{
      this.dataSource = new MatTableDataSource(v);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    
  }

}

export interface ThreadPost {
  post: string,
  date: string,
  user: string,
  title: string,
  id: string,
}




const Threads: ThreadPost[] = [];
