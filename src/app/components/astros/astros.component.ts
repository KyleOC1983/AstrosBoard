import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { PostsnthreadsService } from 'src/app/services/postsnthreads.service';


@Component({
  selector: 'app-astros',
  templateUrl: './astros.component.html',
  styleUrls: ['./astros.component.scss']
})
export class AstrosComponent implements OnInit {

  displayedColumns: string[] = ['date', 'title', 'user'];
  dataSource = new MatTableDataSource<ThreadPost>(Threads);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private postsNThreadsService: PostsnthreadsService) { }

  addNewThread(date: Date, title: string, user: string, forum: string){
    this.postsNThreadsService.newThread(date, title, user, forum);   
  }

  removeThread(id: string){
    this.postsNThreadsService.deleteThread(id);
  }


  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface ThreadPost {
  title: string;
  //todo udpate date to type date and user to string
  date: any;
  user: any;
}

const Threads: ThreadPost[] = [
  {date: '1 hour ago', title: 'The Astros are the greatest', user: 'CrawfishBox'},
  {date: '2 days ago', title: 'Rangers Suck', user: 'HouCounterPlot'},
  {date: '5 days ago', title: 'Yankees Cry alot', user: 'Jeff Blogwell'},
  {date: 4, title: 'Beryllium', user: 9.0122},
  {date: 5, title: 'Boron', user: 10.811},
  {date: 6, title: 'Carbon', user: 12.0107},
  {date: 7, title: 'Nitrogen', user: 14.0067},
  {date: 8, title: 'Oxygen', user: 15.9994},
  {date: 9, title: 'Fluorine', user: 18.9984},
  {date: 10, title: 'Neon', user: 20.1797},
  {date: 11, title: 'Sodium', user: 22.9897},
  {date: 12, title: 'Magnesium', user: 24.305},
  {date: 13, title: 'Aluminum', user: 26.9815},
  {date: 14, title: 'Silicon', user: 28.0855},
  {date: 15, title: 'Phosphorus', user: 30.9738},
  {date: 16, title: 'Sulfur', user: 32.065},
  {date: 17, title: 'Chlorine', user: 35.453},
  {date: 18, title: 'Argon', user: 39.948},
  {date: 19, title: 'Potassium', user: 39.0983},
  {date: 20, title: 'Calcium', user: 40.078},
];
