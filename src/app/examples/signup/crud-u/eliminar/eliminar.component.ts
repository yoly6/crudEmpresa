import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'app/service/api-data.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  list:any
  usuario:any
  id:any
  
  constructor(private apiData:ApiDataService) { }

  ngOnInit() {
    this.buscarUser()
    this.usuario={
      id:0,
      primerNombre:'',
      correo:'',
      clave:'',
      celular:'',
      id_rol:0
    }
    
  }

  buscarUser(){
    this.apiData.getData('/getC').subscribe((data:[]) => {this.list=data
    , console.log(this.list)})   
   }

   eCliente(){
    console.log(this.id)
   }
}
