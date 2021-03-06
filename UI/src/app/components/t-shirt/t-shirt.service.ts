import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TshirtService {

  constructor(private http: HttpClient) { }

  getListTshirt(){
    return this.http.get('http://localhost:8080/camisetas');
  }
}