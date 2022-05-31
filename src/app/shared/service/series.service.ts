import { Serie } from './../model/serie';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SerieService {
  URL_SERIES = 'http://localhost:8082/series';
  constructor(private httpClient: HttpClient) { }

  pesquisar(id:number): Observable<Serie> {
    return this.httpClient.get<Serie>(`${this.URL_SERIES}/${id}`);
  }

  listar(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(this.URL_SERIES);
  }

  listarEmalta(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(`${this.URL_SERIES}/emalta`);
  }

  listarVencedoras(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(`${this.URL_SERIES}/vencedoras`);
  }

  listarLancamentos(): Observable<Serie[]> {
    return this.httpClient.get<Serie[]>(`${this.URL_SERIES}/lancamentos`);
  }

}

