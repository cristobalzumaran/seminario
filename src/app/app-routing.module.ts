import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './vistas/error404/error404.component';
import { LoginComponent } from './vistas/login/login.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { RegistroComponent } from './vistas/registro/registro.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'configuracion', component: PerfilComponent},
  //{path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
