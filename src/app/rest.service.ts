import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }
  
  getAlumns(value) {
    return this.http.get('http://localhost:3000/Alumns/'+ value);
  }
  getRecord(value) {
    return this.http.get('http://localhost:3000/Record/'+ value);
  }
  getMateriaName(value) {
    return this.http.get('http://localhost:3000/Materia/'+ value);
  }
}
