import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Array<Usuarios>>(environment.rest.usuarios);
  }

  getUsuario(id: any) : Observable<Usuarios>{
    return this.http.get<Usuarios>(`${environment.rest.usuarios}/${id}`);
  }

  agregaUsuario(body: any) {
    return this.http.post<Usuarios>(environment.rest.usuarios, body);
  }
  
  editaUsuario(body: Usuarios){
    return this.http.put<Usuarios>(`${environment.rest.usuarios}/${body.id}`,body);
  }

  eliminaUsuario(id: any): Observable<Usuarios>{
    return this.http.delete<Usuarios>(`${environment.rest.usuarios}/${id}`);
  }

  getMenu(){
    return this.http.get<Array<Menu>>(environment.rest.menu);
  }
}

export interface Usuarios {
  id: number,
  rut: string,
  nombre: string,
  apellido: string,
  direccion: string,
  comuna: string,
  ciudad: string,
  telefono: number,
  celular: number,
  email: string
}

export interface Menu {
  id: number,
  item: string,
  valor:number,
  ingredientes:[string],
  imagen: string
}
