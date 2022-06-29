import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmeService } from 'src/app/shared/service/filmes.service';
import {Filme} from "../../shared/model/Filme";
import {BuscarFilmeService} from "../../shared/service/buscar-filme.service";

@Component({
  selector: 'app-buscar-filmes',
  templateUrl: './buscar-filmes.component.html',
  styleUrls: ['./buscar-filmes.component.css']
})
export class BuscarFilmesComponent implements OnInit {
  filmes: Array<Filme> = [];
  detalhes!: Filme;

  constructor(private buscarFilmeService: BuscarFilmeService, private filmeService: FilmeService, private roteador: Router) {
  }

  ngOnInit(): void {
  }

  buscarFilme(value: string){
    this.buscarFilmeService.buscarFilme(value).subscribe(
      value => {
        this.filmes = value
        console.log(value);
      }
    )
  }

  listarById(id: number){
    this.filmeService.listarById(id).subscribe(
      filmes => {
        this.detalhes = filmes
        console.log(filmes)
        this.roteador.navigate(['detalhes', id])
      }
    )
  }
}
