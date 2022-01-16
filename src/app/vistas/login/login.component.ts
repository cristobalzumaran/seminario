import { Component, OnInit, NgZone } from '@angular/core';
import { ServiceService } from 'src/app/servicios/service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    email: null,
    password: null
  }

  allUsuarios: any = [];
  cargando: boolean = false
  msg: string = ""
  formularioOk: boolean = false;
  classBoton = "btn-primary disabled"

  public loginForm: FormGroup;

  constructor(private sS: ServiceService, private ngZone: NgZone,
    private router: Router) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    });
    console.log(this.loginForm);
  }

  validaFormulario(value: any, tipo: string) {

    if (
      (this.usuario.email !== null) &&
      (this.usuario.password !== null)
    ) {
      this.classBoton = "btn-primary";
      this.formularioOk = true;
    } else {
      this.classBoton = "btn-primary disabled";
    }
    console.log('datos:', this.usuario)
    console.log('formulario ok: ', this.formularioOk)
  }

  limpiarFormulario() {
    this.usuario.email = null;
    this.usuario.password = null;
    this.classBoton = "btn-primary disabled";
    this.formularioOk = false;
  }

  /*login(form: NgForm) {

    if(form.valid && this.formularioOk == true){
      //let usuarios = this.cargarUsuarios();
      //console.log(usuarios)
      //for(let i=0; i<usuarios.lenght)
      this.sS.getUsuarios()
      .subscribe(
        (datos) => {
          this.cargando = true;
          console.log('usuario ingresado con éxito', 'Confirmación');
          this.ngZone.run(() => this.router.navigateByUrl('/'))
        },
        (err) => {
          this.cargando = false;
          console.log('Hubo un error en el envío, favor intentar nuevamente', 'Error');
        }
      );
      //this.limpiarFormulario();
    }
  }*/

  login(form: NgForm) {
    return this.sS.getUsuarios().subscribe((data: {}) => {
      this.allUsuarios = data;
      console.log(this.allUsuarios)

      for (let i = 0; i < this.allUsuarios.length; i++) {
        console.log(this.allUsuarios[i].email);
        console.log(this.allUsuarios[i].password);
        if (this.allUsuarios[i].email == this.usuario.email && this.allUsuarios[i].password == this.usuario.password) {
          console.log("usuario encontrado");
          this.sS.login();
          localStorage.setItem('userId', this.allUsuarios[i].id);
          this.router.navigate(['/menu']);
        }
      }

    });

  }

}
