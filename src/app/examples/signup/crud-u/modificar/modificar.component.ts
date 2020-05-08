import { Component, OnInit } from '@angular/core';
import { Clientes } from 'app/clases/cliente';
import { ApiDataService } from 'app/service/api-data.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  lista:any
  usuario:Clientes
  rol:any
  constructor(private apiData:ApiDataService) { }

  ngOnInit() {
    this.usuario={
      id:0,
      primerNombre:'',
      correo:'',
      clave:'',
      celular:'',
      id_rol:0
  }
    this.rol = {
      id:0,
      nombreRol:'',
      codigo:''
    }
    this.buscarRol()
  }

  buscarRol(){
    this.apiData.getData('/getR').subscribe((data:[]) => this.lista=data)   
   }

  update(){
    let userId = this.usuario.id
    let userName = this.usuario.primerNombre
    let userMail = this.usuario.correo
    let userPass = this.usuario.clave
    let userCell = this.usuario.celular
    let userRol = this.rol.id

    let newUser = new Clientes (userId, userName, userMail, userPass, userCell, userRol)

    this.apiData.putData('/updateC', newUser).subscribe(data=>console.log(data))
  }
}
