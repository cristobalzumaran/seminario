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

  carro = {
    item: null,
    imagen: null,
    ingredientes: null,
    valor: null
  }

  constructor(private sS:ServiceService, private http: HttpClient) { }

  ngOnInit() {
    //window.location.reload();
    this.cargarMenu();
  }

  cargarMenu() {
    return this.sS.getMenu().subscribe((data: {}) => {
      this.allDatos = data;
      console.log(this.allDatos)
    });

  }

  guardarCarrito(item:any, valor: any,ingredientes: any, imagen: any){
    this.carro.item = item;
    this.carro.valor = valor;
    this.carro.ingredientes = ingredientes;
    this.carro.imagen = imagen;
    console.log('valor a ingresar: ',this.carro);
    return this.sS.agregaCarrito(this.carro)
    .subscribe(
      (datos: any) => {
        console.log('usuario ingresado con éxito', 'Confirmación');
      },
      (err: any) => {
        console.log('Hubo un error en el envío, favor intentar nuevamente', 'Error');
      }
    );;
  }

}
