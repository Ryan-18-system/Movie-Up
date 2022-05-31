import { Critica } from './../model/criticas';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CriticasService {


  URL_CRITICAS = 'http://localhost:8082/criticas';

  constructor(private httpClient: HttpClient) {
  }

  //get
  listar(): Observable<Critica[]> {
    return this.httpClient.get<Critica[]>(this.URL_CRITICAS);
  }

  //post
  inserir(critica: Critica): Observable<Critica> {
    return this.httpClient.post<Critica>(this.URL_CRITICAS, critica);
  }

  remover(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL_CRITICAS}/${id}`);
  }
}
