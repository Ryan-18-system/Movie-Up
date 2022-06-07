import { Component, OnInit } from '@angular/core';
import {BuscarCinemaService} from "../../shared/service/buscar-cinema.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-buscar-cinema',
  templateUrl: './buscar-cinema.component.html',
  styleUrls: ['./buscar-cinema.component.css']
})
export class BuscarCinemaComponent implements OnInit {
  listaCidade: Array<any> = []
  cinemas: Array<any> = []
  filmesCinemas: Array<any> = [];
  constructor(private cinemaService: BuscarCinemaService, private  httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  buscarCidadePorEstado(value: string){  //Busca as cidades referente ao Estado Escolhido
    this.cinemaService.buscarCinemaPorEstado(value).subscribe(
      value=>{
        this.listaCidade.splice(0, this.listaCidade.length);
        this.cinemas.splice(0, this.cinemas.length)
        const cidade = value.cities
        cidade?.forEach(value=>{
          this.listaCidade.push(value)
        })
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
