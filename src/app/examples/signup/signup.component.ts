import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'app/service/api-data.service';
import { Clientes } from 'app/clases/cliente';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test : Date = new Date();
    focus;
    focus1;
    rol:any
    list:any
    usuario:Clientes
    constructor(private apiData:ApiDataService) { }

    ngOnInit() {
        this.rol={
            id:'',
            nombreRol:''
        }
        this.usuario={
            id:0,
            primerNombre:'',
            correo:'',
            clave:'',
            celular:'',
            id_rol:0
        }
        this.buscarRol()
    }

    buscarRol(){
        this.apiData.getData('/getR').subscribe((data:[]) => {this.list=data})   
    }

    registrar(){
        let userId = this.usuario.id
        let userName = this.usuario.primerNombre
        let userMail = this.usuario.correo
        let userPass = this.usuario.clave
        let userCell = this.usuario.celular
        let userRol = this.rol.id

        let newUser = new Clientes (userId, userName, userMail, userPass, userCell, userRol)

        this.apiData.postData('/addC', newUser).subscribe(data =>console.log(data))
    }
}
