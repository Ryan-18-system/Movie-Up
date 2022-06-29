import { Serie } from 'src/app/shared/model/serie';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Filme} from "../model/Filme";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuscarFilmeService {
  URL_FILME = 'http://localhost:8082/filmes/titulo'
  URL_SERIE = 'http://localhost:8082/series/titulo'

  constructor(private  httpClient: HttpClient) { }

  buscarFilme(filme:string): Observable<Filme[]> {
    const filmeCorrigido = filme.toLowerCase()
    return this.httpClient.get<Filme[]>(`${this.URL_FILME}?titulo=${filmeCorrigido}`);

  }

  pesquisar(id:number): Observable<Filme> {
    return this.httpClient.get<Filme>(`${this.URL_FILME}?/${id}`);
  }


  buscarSerie(serie:string): Observable<Serie[]> {
    const serieCorrigida = serie.toLowerCase()
    return this.httpClient.get<Serie[]>(`${this.URL_SERIE}?titulo=${serieCorrigida}`);

  }
}
