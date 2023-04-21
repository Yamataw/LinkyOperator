import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Client,ClientList} from "./client-interface";
@Injectable({
  providedIn: 'root'
})
export class ClientService{
  private apiUrl = 'http://localhost:3001/clients';

  constructor(private http: HttpClient) { }

  getClients(): Observable<ClientList> {
    return this.http.get<ClientList>(this.apiUrl);
  }

}
