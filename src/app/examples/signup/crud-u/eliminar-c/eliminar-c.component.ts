import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'app/service/api-data.service';

@Component({
  selector: 'app-eliminar-c',
  templateUrl: './eliminar-c.component.html',
  styleUrls: ['./eliminar-c.component.css']
})
export class EliminarCComponent implements OnInit {

  lista:any
  usuario:any
  id:any
  constructor(private apiData:ApiDataService) { }

  ngOnInit(): void {
    this.buscarUser()
    this.usuario={
      id:0,
      primerNombre:''
    }
  }

  buscarUser(){
    this.apiData.getData('/getC').subscribe((data:[]) => {this.lista=data
    , console.log(this.lista)})   
   }

   eliminarC(){
     let idD = this.usuario.id
     console.log(idD)
     this.apiData.delete('/deleteC/'+idD).subscribe(data=>console.log(data))
   }
}
