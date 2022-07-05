import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmesEmAlta: Array<Filme> = [];
  filmesFavoritos: Array<Filme> = [];

  detalhes!: Filme;


  constructor(private filmeService: FilmeService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.filmeService.listarFavoritos().subscribe(
      filmes => this.filmesFavoritos = filmes
    )

    this.filmeService.listarEmalta().subscribe(
      filmes => this.filmesEmAlta = filmes
    );

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
