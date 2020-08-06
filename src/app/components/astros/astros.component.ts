import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-astros',
  templateUrl: './astros.component.html',
  styleUrls: ['./astros.component.scss']
})
export class AstrosComponent implements OnInit {

  displayedColumns: string[] = ['date', 'title', 'user'];
  dataSource = new MatTableDataSource<ThreadPost>(Threads);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  forum: string = '';

  constructor(private postsNThreadsService: PostsnthreadsService) { }

  addNewThread(title: string, user: string, post: string){
    this.postsNThreadsService.newThread(title, user, post);   
  }

  removeThread(id: string){
    this.postsNThreadsService.deleteThread(id);
  }


  ngOnInit(): void {
    this.postsNThreadsService.messagePost.subscribe((v: ThreadPost[])=>{
      this.dataSource = new MatTableDataSource(v);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    
  }

}




export interface ThreadPost {
  title: string;
  //todo udpate date to type date and user to string
  date: any;
  user: any;
}

const Threads: ThreadPost[] = [
  //{date: '1 hour ago', title: 'The Astros are the greatest', user: 'CrawfishBox'},
  //{date: '2 days ago', title: 'Rangers Suck', user: 'HouCounterPlot'},
  //{date: '5 days ago', title: 'Yankees Cry alot', user: 'Jeff Blogwell'},
 
];
