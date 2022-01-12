import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  allDatos: any = [];

  constructor(private _http: HttpClient, private sS:ServiceService) { }

  ngOnInit() {
    this.cargarLaboratistas();
  }

  cargarLaboratistas() {
    return this.sS.getMenu().subscribe((data: {}) => {
      this.allDatos = data;
      console.log(this.allDatos)
    });

  }

}
