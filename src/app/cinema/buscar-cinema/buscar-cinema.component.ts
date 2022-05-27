import { Component, OnInit } from '@angular/core';
import {BuscarCinemaService} from "../../shared/service/buscar-cinema.service";
import {HttpClient} from "@angular/common/http";
import {Estado} from "../../shared/model/estado";

@Component({
  selector: 'app-buscar-cinema',
  templateUrl: './buscar-cinema.component.html',
  styleUrls: ['./buscar-cinema.component.css']
})
export class BuscarCinemaComponent implements OnInit {
  listaEstado: Array<Estado> = [];
  listaCidade: Array<any> = []
  cinemas: Array<any> = []
  constructor(private cinemaService: BuscarCinemaService, private  httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  buscarCidadePorEstado(value: string){
    this.cinemaService.buscarCinemaPorEstado(value).subscribe(
      value=>{
        this.listaCidade.pop();
        this.listaEstado.pop();
        const arrayDoArray = value.cities
        arrayDoArray?.forEach(value=>{
          this.listaCidade.push(value)
        })
        this.listaEstado.push(value)
      }
    )
  }
  nomeCidade(){
    return this.listaCidade
    this.listaCidade.pop();
  }
  buscarCinemaIdCidade(valor:string){
    return this.cinemaService.buscarCinemaPeloIdCidade(valor).subscribe(
      value =>{
        this.cinemas = value
      }
    )
  }
}
