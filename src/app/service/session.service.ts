import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  local(key : string, valor : any){
    return sessionStorage.setItem(key,valor) 
  }

  limpiar(){
    return sessionStorage.clear()
  }

  comparar(key: string){
    return sessionStorage.getItem(key)
  }
}
