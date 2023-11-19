import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Alumno } from '../../models/Alumno';
import { AlumnosService } from '../services/alumnos.service';


@Component({
  selector: 'app-detallealumno',
  templateUrl: './detallealumno.component.html',
  styleUrl: './detallealumno.component.css'
})
export class DetallealumnoComponent implements OnInit{

  public alumno!: Alumno;
  constructor(private _service:AlumnosService, private _activateRoute :ActivatedRoute){}

  ngOnInit(): void {
    this._activateRoute.params.subscribe((params:Params)=>{
      var idAlumno = params['idAlumno'];
      this.loadDataAlumno(idAlumno);
    })
  }
  loadDataAlumno(idAlumno:string){
    this._service.getAlumno(idAlumno).subscribe(response=>{
      this.alumno= response;
      console.log(this.alumno);
      
    });
  }
}
