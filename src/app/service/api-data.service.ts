import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  httpOptions ={
    headers : new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  httpFiles = {
    headers : new HttpHeaders ({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }

  usuario:any

  constructor(private http:HttpClient) { }

  getData(url:string){
    return this.http.get(environment.apiData+url)
  }
  
  postData(url:string, data:any){
    return this.http.post(environment.apiData+url,data)
  }

  putData(url:string,data:any){
    return this.http.put(environment.apiData + url, data )
  }

  delete(url:string){
    return this.http.delete(environment.apiData + url)
  }

  guardarUsuario(user: string){
    return this.usuario = user
  }
}
