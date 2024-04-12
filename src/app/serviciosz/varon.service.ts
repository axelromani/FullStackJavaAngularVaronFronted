import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Varon  } from '../modelsz/varon';


@Injectable({
  providedIn: 'root'
})
export class VaronService {

  
  API_URI = '/wsvaron';


  constructor(private http: HttpClient) { }



  //Lista Todo los 'Varon'
  getVarones() {
    return this.http.get(`${this.API_URI}`);
  }


  //Lista los 'Varones' x 'id'
  getVaron(id: number) {
    return this.http.get(`${this.API_URI}/${id}`);
  }


  //Elimina 'Varones' x id
  deleteVaron(id: number) {
    return this.http.delete(`${this.API_URI}/${id}`);
  }


  //Registrar Varones
  saveVaron(varon: Varon) {
    return this.http.post(`${this.API_URI}`, varon);
  }
  

  //Actualizar Varones
  updateVaron(varon: Varon): Observable<Varon> {   
    return this.http.put(`${this.API_URI}`, varon); 
  }





}
