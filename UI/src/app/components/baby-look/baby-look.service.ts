import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BabyLookService {
  constructor(private http: HttpClient) { }

  getListBabylook(){
    return this.http.get('http://localhost:8080/babylook');
  }
}
