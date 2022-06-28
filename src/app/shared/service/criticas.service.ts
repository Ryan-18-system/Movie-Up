import { Critica } from './../model/criticas';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CriticasService {
  URL_CRITICAS = 'http://localhost:8082/filmes/criticas';
  obj = {}

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) {
  }

  //get
  listar(id: number): Observable<Critica[]> {
    return this.httpClient.get<Critica[]>(`http://localhost:8082/filmes/${id}/criticas`);
  }

  //post
  inserir(id: number, mensagem: string): Observable<Critica> {

    return this.httpClient.post<Critica>(`${this.URL_CRITICAS}/${id}`, mensagem, this.httpOptions);
  }

  atualizar(critica: Critica): Observable<Critica> {
    return this.httpClient.put<Critica>(`${this.URL_CRITICAS}/${critica.id}`, critica);
  }

  remover(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.URL_CRITICAS}/${id}`);
  }
}
