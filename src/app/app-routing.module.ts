import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './vistas/carrito/carrito.component';
import { CheckoutComponent } from './vistas/checkout/checkout.component';
import { Error404Component } from './vistas/error404/error404.component';
import { LoginComponent } from './vistas/login/login.component';
import { MenuComponent } from './vistas/menu/menu.component';
import { PerfilComponent } from './vistas/perfil/perfil.component';
import { RegistroComponent } from './vistas/registro/registro.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'checkout', component: CheckoutComponent},
  //{path: 'cliente/editar/:id', component: EditarClienteComponent, canActivate: [AuthGuard]},
  {path: '**', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
