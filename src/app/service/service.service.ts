import { Injectable } from '@angular/core';
import { Cliente} from '../interface/cliente.interface';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private httpClient: HttpClient) { }

  serverUrl: string = "http://localhost:8080/api/"

  get(url: string): Observable<any> {
      return this.httpClient.get(this.serverUrl + url);
  }

  post(url: string, data: Cliente): Observable<any> {
      return this.httpClient.post(this.serverUrl + url, data);
  }

  put(url: string, data: Cliente): Observable<any> {
      return this.httpClient.put(this.serverUrl + url, data);
  }

  delete(url: string, data: Cliente): Observable<any> {
      return this.httpClient.delete(this.serverUrl + url, { params: { id: data.id + "" } });
  }
}