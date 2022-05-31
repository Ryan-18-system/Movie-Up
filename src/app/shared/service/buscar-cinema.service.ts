import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estado} from "../model/estado";
import {Cidade} from "../model/cidade";

@Injectable({
  providedIn: 'root'
})
export class BuscarCinemaService {

  URl_ESTADO = 'https://api-content.ingresso.com/v0/states/'
  URL_CINEMA = 'https://api-content.ingresso.com/v0/theaters/city/'
  constructor(private  httpClient: HttpClient) { }


  buscarCinemaPorEstado(estado:string): Observable<Estado> {
    const cidades = `${this.URl_ESTADO}${estado}`
    return this.httpClient.get<Estado>(cidades);
  }
  buscarCinemaPeloIdCidade(id:string): Observable<Cidade[]>{
    const urlCorrigida = `${this.URL_CINEMA}${id}`
    return this.httpClient.get<Cidade[]>(urlCorrigida);
  }
}
