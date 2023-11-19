import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css',
})
export class RegistrarComponent {
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaapellidos') cajaApellidosRef!: ElementRef;
  @ViewChild('cajaimagen') cajaimagenRef!: ElementRef;
  @ViewChild('cajaidcurso') cajaidcursoRef!: ElementRef;

  constructor(private _service: AlumnosService, private _router: Router) {}

  registrar() {
    var nombre = this.cajaNombreRef.nativeElement.value;
    var apellidos = this.cajaApellidosRef.nativeElement.value;
    var imagen = this.cajaimagenRef.nativeElement.value;

    var alumno = {
      idAlumno: 0,
      nombre: nombre,
      apellidos: apellidos,
      imagen: imagen,
      activo: 1,
      idCurso: 2023,
    }
    console.log(alumno);
    

    this._service.postRegistrar(alumno).subscribe(response =>{
      console.log(response);
      this._router.navigate(["/"]);
    })
  }
}
