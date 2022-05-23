import { Serie } from './../model/serie';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SerieService {
  URL_SERIES = 'http://localhost:8080/series';
  constructor(private httpClient: HttpClient) { }

  pesquisar(id:number): Observable<Serie> {
    return this.httpClient.get<Serie>(`${this.URL_SERIES}/${id}`);
  }

}

