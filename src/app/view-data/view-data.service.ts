import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ViewDataService {

  private resourceURL = 'http://api-demo.javiertoledos.me/api/tickets';

  constructor(private httpClient: HttpClient) { }

  getAllData(): Promise<any> {
    return this.httpClient.get(this.resourceURL).toPromise();
  }
}
