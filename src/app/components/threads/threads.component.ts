import { Component, OnInit } from '@angular/core';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.scss']
})
export class ThreadsComponent implements OnInit {

  constructor(private postsNThreadsService: PostsnthreadsService) { }

  addNewThread(date: Date, title: string, user: string, forum: string){
    this.postsNThreadsService.newThread(date, title, user, forum);   
  }

  ngOnInit(): void {
  }

}
