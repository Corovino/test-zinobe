import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private URL: string = "https://pokeapi.co/api/v2/"
  

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any>{
    try {
      return this.http.get(`${this.URL}pokemon`)
    } catch (error) {
      return error;
    }
  }


}
