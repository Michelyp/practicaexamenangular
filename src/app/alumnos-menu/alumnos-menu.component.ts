import { Component, OnInit } from '@angular/core';
//se usara el modelo de alumno también
import { Alumno } from '../../models/Alumno';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-alumnos-menu',
  templateUrl: './alumnos-menu.component.html',
  styleUrl: './alumnos-menu.component.css'
})
export class AlumnosMenuComponent {
 //se guardara en un array los alumnos haciendo referencia al modelo
 public alumnos!: Array<Alumno>;

 constructor(private _service:AlumnosService, ){}
 ngOnInit(): void {
   
     this.loadDataAlumnos();

 }
 loadDataAlumnos(){
     this._service.getAlumnoMenu().subscribe(response=>{
       this.alumnos=response;
     })
 }
}
