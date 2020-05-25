import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  p: number = 1;
  
  constructor() { }
  config: any;
  obj: any[]  = [{Id:122,studentname:"varun",date:"20/3/2020",time:"11:00AM"},{Id:222,studentname:"kumar",date:"20/3/2020",time:"11:00AM"},
  {Id:333,studentname:"rahul",date:"20/3/2020",time:"4:00PM"},{Id:666,studentname:"satya",date:"20/3/2020",time:"11:00PM"},
  {Id:777,studentname:"chandu",date:"20/3/2020",time:"8:00PM"},{Id:888,studentname:"satya",date:"20/3/2020",time:"11:00PM"},
  {Id:999,studentname:"chandu",date:"20/3/2020",time:"8:00PM"},{Id:234,studentname:"satya",date:"20/3/2020",time:"11:00PM"},
  {Id:432,studentname:"chandu",date:"20/3/2020",time:"8:00PM"},{Id:343,studentname:"satya",date:"20/3/2020",time:"11:00PM"},
  {Id:542,studentname:"chandu",date:"20/3/2020",time:"8:00PM"},{Id:325,studentname:"satya",date:"20/3/2020",time:"11:00PM"},
  {Id:343,studentname:"chandu",date:"20/3/2020",time:"8:00PM"}]
  userFilter: any = { studentname: '' };
  collection: any[] = this.obj; 
   
  pageChanged(event){
    this.config.currentPage = event;
  }

  ngOnInit() {
  }

}
 