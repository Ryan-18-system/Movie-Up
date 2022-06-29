import { Critica } from './../model/criticas';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CriticasService {
  URL_CRITICAS_FILME = 'http://localhost:8082/filmes/criticas';
  URL_CRITICAS_SERIE = 'http://localhost:8082/series/criticas';
  URL_FILME = 'http://localhost:8082/filmes';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type':'application/json; charset=utf-8'})
  }

  constructor(private httpClient: HttpClient) {
  }

  //get
  listar(id: number): Observable<Critica[]> {
    return this.httpClient.get<Critica[]>(`${this.URL_FILME}/${id}/criticas`);
  }

  //post
  inserir(id: number, nomeDoCritico: string, mensagem: string): Observable<Critica> {

    const criticaObj = {
      nomeDoCritico: nomeDoCritico,
      mensagem: mensagem
    };

    JSON.stringify(criticaObj);
    JSON.stringify(criticaObj, ['nomeDoCritico', 'mensagem'])

    return this.httpClient.post<Critica>(`${this.URL_CRITICAS_FILME}/${id}`, criticaObj, this.httpOptions);

  }

  atualizar(critica: Critica): Observable<Critica> {
    return this.httpClient.put<Critica>(`${this.URL_CRITICAS_FILME}/${critica.id}`, critica);
  }

  remover(critica: Critica): Observable<Object>{
    return this.httpClient.delete(`${this.URL_FILME}/${critica.id_filme}/criticas/${critica.id}`);
  }
}
