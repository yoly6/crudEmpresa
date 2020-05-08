import { tick } from '@angular/core/testing'

export class Clientes{
    id:number
    primerNombre:string
    correo:string
    clave:string 
    celular:string
    id_rol:number
    constructor(id:number, primerNombre:string ,correo:string, clave:string,celular:string, id_rol:number){
        this.id=id
        this.primerNombre=primerNombre
        this.correo=correo
        this.clave=clave
        this.celular=celular
        this.id_rol=id_rol
    }
}