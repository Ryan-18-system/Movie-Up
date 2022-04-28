import { Component, OnInit } from '@angular/core';
import {Filme} from "../../shared/model/Filme";
import {BuscarFilmeService} from "../../shared/service/buscar-filme.service";
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'app-buscar-filmes',
  templateUrl: './buscar-filmes.component.html',
  styleUrls: ['./buscar-filmes.component.css']
})
export class BuscarFilmesComponent implements OnInit {
  filmes: Array<Filme> = [];

  constructor(private buscarFilmeService: BuscarFilmeService) {
  }

  ngOnInit(): void {
  }

  buscarFilme(value: string){
    this.buscarFilmeService.buscarFilme(value).subscribe(
      value => {
        this.filmes = value
      }
    )
  }
}
