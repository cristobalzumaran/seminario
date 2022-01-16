import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
//import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
declare var require: any;
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  @ViewChild('pdfTable')
  pdfTable!: ElementRef;

  allDatos: any = [];
  total: number = 0;

  //app = angular.module('app' , ['htmlToPdfSave']) ;

  constructor(private sS:ServiceService, private toastr: ToastrService) { }

  ngOnInit() {
    this.cargarCarrito();
  }

  cargarCarrito() {
    return this.sS.getCarrito().subscribe((data: {}) => {
      this.allDatos = data;
      console.log(this.allDatos);
      for (let i = 0; i < this.allDatos.length; i++){
        this.total = this.total + this.allDatos[i].valor;
      }
    });

  }

  eliminar(id:any) {
    this.sS.eliminaCarro(id).subscribe(() => this.cargarCarrito());
    this.toastr.success('Item eliminado con éxito', 'Eliminación');
    window.location.reload();
  }

  downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    let html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download(); 
     
  }
}
