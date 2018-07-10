import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {RequestOptions} from "@angular/http";
import {Observable} from "rxjs/index";
import {Ticket} from "../view-data/ticket";
import {catchError} from "rxjs/internal/operators";

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  private resourceURL = 'http://api-demo.javiertoledos.me/api/tickets';

  constructor(private httpClient: HttpClient) { }

  getTicket(id: number): Promise<any> {
    return this.httpClient
      .get(`${this.resourceURL}/${id}`).toPromise();
  }

  updateTicket(ticket: Ticket): Promise<Object> {
    return this.httpClient
      .put(`${this.resourceURL}/${ticket.id}`, ticket)
      .toPromise();
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject( error);
  }
}
