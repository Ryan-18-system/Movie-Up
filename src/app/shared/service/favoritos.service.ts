import { Favoritos } from './../model/favoritos';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Filme } from '../model/Filme';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {


  URL_FAVORITOS = 'http://localhost:8082/favoritos';


  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Favoritos[]> {
    return this.httpClient.get<Favoritos[]>(this.URL_FAVORITOS);
  }

  inserir(id: Filme["id"]): Observable<Favoritos> {
    return this.httpClient.post<Favoritos>(this.URL_FAVORITOS, id);
  }

  remover(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL_FAVORITOS}/${id}`);
  }
}
