import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Estado} from "../model/estado";
import {Cidade} from "../model/cidade";
import {Cinema} from "../model/cinema";

@Injectable({
  providedIn: 'root'
})
export class BuscarCinemaService {

  URl_ESTADO = 'https://api-content.ingresso.com/v0/states/'
  URL_CINEMA = 'https://api-content.ingresso.com/v0/theaters/city/'
  URL_FILMES_CARTAZ = "https://api-content.ingresso.com/v0/templates/nowplaying/"
  constructor(private  httpClient: HttpClient) { }


  buscarCinemaPorEstado(estado:string): Observable<Estado> {
    const cidades = `${this.URl_ESTADO}${estado}`
    return this.httpClient.get<Estado>(cidades);
  }

  buscarCinemaPeloIdCidade(id:string): Observable<Cidade[]>{
    const urlCorrigida = `${this.URL_CINEMA}${id}`
    return this.httpClient.get<Cidade[]>(urlCorrigida);
  }

  buscarFilmeEmCartaz(id: string, nomeCinema: string):Observable<Cinema[]>{
    const correctUrl = `${this.URL_FILMES_CARTAZ}${id}?partnership=${nomeCinema}`
    return this.httpClient.get<Cinema[]>(correctUrl)
  }
}
