import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Detalhe} from "../model/detalhe";

@Injectable({
  providedIn: 'root'
})
export class DetalheService {

  URL_DETALHE = 'http://localhost:8080/detalhes';
  constructor(private httpClient: HttpClient) { }
  //get
  buscarDetalhe(): Observable<Detalhe[]> {
    return this.httpClient.get<Detalhe[]>(this.URL_DETALHE);
  }
}
