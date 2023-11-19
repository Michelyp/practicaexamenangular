import { Component, ElementRef, ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from '../services/alumnos.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @ViewChild("cajausuario") cajaUsuarioRef!: ElementRef;
  @ViewChild("cajapsw") cajaPswRef!: ElementRef;

  constructor(private _service:AlumnosService, private _router: Router){}

  log(){
    var usuario = this.cajaUsuarioRef.nativeElement.value;
    var psw = this.cajaPswRef.nativeElement.value;

    var login ={
      userName: usuario,
      password:psw
    }

    //response es un tipo any recoge el token y se guarda en el localStorage
    this._service.login(login).subscribe(response=>{
      var token = response.response;
      localStorage.setItem("token",token);
      console.log(token);
      this._router.navigate(["/"]);
      
    })
  }
}
