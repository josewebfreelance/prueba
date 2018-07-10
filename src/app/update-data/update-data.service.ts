import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
import {Observable} from "rxjs/index";
import {Ticket} from "../view-data/ticket";

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  private resourceURL = 'http://api-demo.javiertoledos.me/api/tickets';

  constructor(private httpClient: HttpClient) { }

  getTicket(id: number): Promise<any> {
    return this.httpClient.get(`${this.resourceURL}/${id}`).toPromise();
  }

  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient
      .put<Ticket>(`${this.resourceURL}/${ticket.id}`, ticket);
  }
}
