import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { ApiDataService } from 'app/service/api-data.service';
import { SessionService } from 'app/service/session.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  list:any
  lista:any
  usuario:any
  correo:any
  clave:any
  rol:any
    constructor(private authService: AuthService,    private router: Router, private apiData: ApiDataService,  private sessionservice: SessionService) { }
    routeRedirect = '';

    /*login(){
      this.authService.login();
      this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
      this.authService.urlUsuarioIntentaAcceder='';
      this.router.navigate([this.routeRedirect]);
    }*/
    
      ngOnInit() {
        this.buscarRol()
        this.rol = {
          id:0,
          nombreRol:'',
          codigo:''
        }
        this.buscarCliente()
      }

      buscarCliente(){
        this.apiData.getData('/getC').subscribe((data:[]) => this.list=data) 
      }
    
      buscarRol(){
       this.apiData.getData('/getR').subscribe((data:[]) => this.lista=data)   
      }

      login(){

        let user = this.usuario
        let mail = this.correo
        let pass = this.clave
        let Rol = this.rol.id
        let User = this.list.find(
          data => data.primerNombre == user
          && data.clave == pass
          && data.correo == mail
          && data.id_rol == Rol
        )
       
        if(User !== undefined){
          console.log("Nada mal")
          this.sessionservice.local('logueado','si')
          this.router.navigate(['/user'])
          this.apiData.guardarUsuario(user)
        }else{
          alert('Datos incorrectos')
        }
      }
    }
    