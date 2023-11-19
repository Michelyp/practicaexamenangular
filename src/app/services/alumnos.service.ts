import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable()
export class AlumnosService {
  constructor(private _http: HttpClient) {}
  getToken() {
    const headers = {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    return headers;
  }

  login(log: Object): Observable<any> {
    var json = JSON.stringify(log);
    var header = new HttpHeaders().set('content-type', 'application/json');
    var request = 'api/auth/login';
    var url = environment.urlApiAlumnos + request;
    return this._http.post(url, json, { headers: header });
  }
  postRegistrar(alumno: Object): Observable<any> {
    var json = JSON.stringify(alumno);
    var header = new HttpHeaders().set('content-type', 'application/json');
    var request = 'api/alumnos/insertalumnotoken';
    var url = environment.urlApiAlumnos + request;
    return this._http.post(url, json, { headers: header });
  }
  getCursos(): Observable<any> {
    const header = this.getToken();
    var request = 'api/alumnos/cursostoken';
    var url = environment.urlApiAlumnos + request;
    return this._http.get(url, { headers: header });
  }
  getAlumnos(curso: string): Observable<any> {
    const header = this.getToken();
    var request = 'api/alumnos/filtrarcurso/' + curso;
    var url = environment.urlApiAlumnos + request;
    return this._http.get(url, { headers: header });
  }
  //se traera el alumno por id
  getAlumno(idAlumno: string): Observable<any> {
    const header = this.getToken();
    var request = 'api/alumnos/findalumnotoken/' + idAlumno;
    var url = environment.urlApiAlumnos + request;
    return this._http.get(url,{ headers: header });
  }

  //sin token
//   getAlumno(idAlumno: string): Observable<any> {
//     var request = 'api/alumnos/findalumnotoken/' + idAlumno;
//     var url = environment.urlApiAlumnos + request;
//     return this._http.get(url);
//   }
  getAlumnoMenu(): Observable<any>{
    var request = 'api/alumnos';
        var url = environment.urlApiAlumnos + request;
        return this._http.get(url);
  }
}
