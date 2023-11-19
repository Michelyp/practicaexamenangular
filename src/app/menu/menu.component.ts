import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../services/alumnos.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  public cursos!: Array<string>;
  
  constructor(private _service:AlumnosService){}

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this._service.getCursos().subscribe(response=>{
      this.cursos = response; 
    })
  }
}
