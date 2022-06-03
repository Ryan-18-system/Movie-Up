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
  filmesCinemas: Array<any> = [];
  constructor(private cinemaService: BuscarCinemaService, private  httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  buscarCidadePorEstado(value: string){  //Busca as cidades referente ao Estado Escolhido
    this.cinemaService.buscarCinemaPorEstado(value).subscribe(
      value=>{
        this.listaCidade.pop();
        this.listaEstado.pop();
        const cidade = value.cities
        cidade?.forEach(value=>{
          if(this.listaCidade.length > 0){
            this.listaCidade.pop()
            this.listaCidade.push(value)
          }
          this.listaCidade.push(value)
        })
        this.listaEstado.push(value)

      }
    )
  }
  buscarCinemaIdCidade(valor:string){  // Cinemas disponíveis de acordo com a cidade escolhida
    return this.cinemaService.buscarCinemaPeloIdCidade(valor).subscribe(
      value =>{
          this.cinemas = value;
      }
    )
  }
  buscarFilmePorCinema(id:string, cinema: string){    //Filmes em cartaz dos cinemas da cidade selecionada
    return this.cinemaService.buscarFilmeEmCartaz(id,cinema).subscribe(
      value => {
        this.filmesCinemas = value

      }
    )
  }
}
