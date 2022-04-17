import { Critica } from './../model/criticas';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriticasService {


  URL_CRITICAS = 'http://localhost:3000/criticas';

  constructor(private httpClient: HttpClient) {
  }

  listarCritica(): Observable<Critica[]> {
    return this.httpClient.get<Critica[]>(this.URL_CRITICAS);
  }

  inserirCritica(critica: Critica): Observable<Critica> {
    return this.httpClient.post<Critica>(this.URL_CRITICAS, critica);
  }
}
