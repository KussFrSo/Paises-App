import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = "https://restcountries.com/v2"

  get httpParams(){
    return new HttpParams()
    .set('fields', 'name,capital,alpha2Code,flag,population')
  }

  constructor(private http: HttpClient) { }

  buscarPais( pais: string): Observable<Pais[]>{
    const url: string = `${this.apiUrl}/name/${pais}`
    return this.http.get<Pais[]>(url,{params: this.httpParams})
  }

  buscarCapital( capital: string): Observable<Pais[]>{
    const url: string = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  buscarRegion( region: string): Observable<Pais[]>{
    const url: string = `${this.apiUrl}/regionalbloc/${region}`
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  getPaisPorAlpha( id: string): Observable<Pais>{
    const url: string = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Pais>(url);
  }

}
