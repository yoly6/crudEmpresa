import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'app/service/api-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-u',
  templateUrl: './crud-u.component.html',
  styleUrls: ['./crud-u.component.css']
})
export class CrudUComponent implements OnInit {

  user:any
  list:any
  constructor(private apiData:ApiDataService, private router:Router) { }

  ngOnInit() {
    this.busqueda()
  }

  busqueda(){
    this.apiData.getData('/getC').subscribe((data:any[]) => this.list =data )
  }

  redirigir(){
    this.router.navigate(['/update'])
  }
  dirigir(){
    this.router.navigate(['/delete'])
  }
}
