import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient, private router: Router) { }

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

  login() {
    localStorage.setItem('token', 'LOGGED_IN');
    //this.router.navigate(['/menu']);
  }

  register() {
    localStorage.setItem('token', 'LOGGED_IN');
    this.router.navigate(['/']);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

export interface Usuarios {
  id?: number,
  rut: string,
  nombre: string,
  apellido: string,
  direccion: string,
  comuna: string,
  ciudad: string,
  telefono: number,
  celular: number,
  email: string,
  password: string
}

export interface Menu {
  id: number,
  item: string,
  valor:number,
  ingredientes:[string],
  imagen: string
}
