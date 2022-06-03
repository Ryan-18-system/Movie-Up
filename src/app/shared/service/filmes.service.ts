import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { Filme } from '../model/Filme';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  URL_FILMES = 'http://localhost:8082/filmes';


  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.URL_FILMES);
  }

  listarEmalta(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.URL_FILMES}/emalta`);
  }

  listarFavoritos(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.URL_FILMES}/favoritos`);
  }

  listarAclamados(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.URL_FILMES}/aclamados`);
  }

  listarEsperados(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.URL_FILMES}/esperados`);
  }

  listarFavSemana(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(`${this.URL_FILMES}/favsemana`);
  }
}

