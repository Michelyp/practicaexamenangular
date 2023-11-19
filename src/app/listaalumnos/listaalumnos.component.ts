import { Component, OnInit } from '@angular/core';
//para que se pueda pasar por parámetros
import { ActivatedRoute, Params } from '@angular/router';
//se usara el modelo de alumno también
import { Alumno } from '../../models/Alumno';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './listaalumnos.component.html',
  styleUrl: './listaalumnos.component.css'
})
export class ListaalumnosComponent implements OnInit{

  //se guardara en un array los alumnos haciendo referencia al modelo
  public alumnos!: Array<Alumno>;

  constructor(private _service:AlumnosService, private _activeRoute:ActivatedRoute){}
  ngOnInit(): void {
    this._activeRoute.params.subscribe((params:Params)=>{
      var curso = params['annyo'];
      this.loadDataAlumnos(curso);
    })
    
  }
  loadDataAlumnos(curso:string){
      this._service.getAlumnos(curso).subscribe(response=>{
        this.alumnos=response;
      })
  }

}
