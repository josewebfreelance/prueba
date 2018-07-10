import { Component, OnInit } from '@angular/core';
import {ViewDataService} from "./view-data.service";
import {MatTableDataSource} from "@angular/material";
import {Ticket} from "./ticket";

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
  providers: [ViewDataService]
})
export class ViewDataComponent implements OnInit {

  public displayedColumns: string[] = ['id','title','description','created_at','actions'];
  public dataSource;

  constructor(private viewDataService: ViewDataService) { }

  ngOnInit() {
    this.getData()
  }

  getData() {
    this.viewDataService.getAllData().then(data => {
      const response = data.data;
      this.dataSource = new MatTableDataSource<Ticket>(response);
    });
  }

}
