import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoutryService {

  constructor(private http: HttpClient) { }

  getListCategorias(){
    return this.http.get('http://localhost:8080/categorias');
  }
}
