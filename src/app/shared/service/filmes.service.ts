import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import { Filme } from '../model/Filme';

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  URL_FILMES = 'http://localhost:8080/filmes';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Filme[]> {
    return this.httpClient.get<Filme[]>(this.URL_FILMES);
  }

}

