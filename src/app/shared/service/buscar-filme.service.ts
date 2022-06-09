import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Filme} from "../model/Filme";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BuscarFilmeService {
  URL_FILME = 'http://localhost:8082/filmes'
  constructor(private  httpClient: HttpClient) { }

  buscarFilme(filme:string): Observable<Filme[]> {
    const filmeCorrigido = filme.toLowerCase()
    return this.httpClient.get<Filme[]>(`${this.URL_FILME}?titulo=${filmeCorrigido}`);

  }

  pesquisar(id:number): Observable<Filme> {
    return this.httpClient.get<Filme>(`${this.URL_FILME}?/${id}`);
  }
}
