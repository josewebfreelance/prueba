import { Component, OnInit } from '@angular/core';
import {Ticket} from "../view-data/ticket";
import {ActivatedRoute} from "@angular/router";
import {UpdateDataService} from "./update-data.service";

@Component({
  selector: 'app-update-data',
  templateUrl: './update-data.component.html',
  styleUrls: ['./update-data.component.scss']
})
export class UpdateDataComponent implements OnInit {

  formulario = {
    id: 0,
    title: '',
    description: '',
    topic: '',
  };
  id: any;

  constructor(
    private rout: ActivatedRoute,
    private updateDataService: UpdateDataService
  ) { }

  ngOnInit() {
    this.id = parseInt(this.rout.snapshot.paramMap.get('id'), 10);
    console.log(this.id)
    this.getTicket();
  }

  getTicket() {
    this.updateDataService.getTicket(this.id).then(ticket => {
      const { data } = ticket;
      this.formulario.id = data.id;
      this.formulario.title = data.title;
      this.formulario.description = data.description;
      this.formulario.topic = data.topic;
    });
  }

  updateData(data) {
    this.updateDataService.updateTicket(data);
    console.log(JSON.parse(JSON.stringify(data)));
  }

}
