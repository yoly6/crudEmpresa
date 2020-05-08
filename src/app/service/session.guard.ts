import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private router:Router, private session:SessionService) { }

  canActivate(){
    let activo=this.session.comparar("logueado")
    console.log(activo)
    if( activo == "si"){
      return true
    }
    console.log("no logueado")
      this.router.navigate([''])
      return false
  }
}
