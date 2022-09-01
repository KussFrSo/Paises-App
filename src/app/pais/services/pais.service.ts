import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2"

  constructor(private http: HttpClient) { }

  buscarPais( pais: string): Observable<Pais[]>{
    const url: string = `${this.apiUrl}/name/${pais}`
    return this.http.get<Pais[]>(url)
  }

}
