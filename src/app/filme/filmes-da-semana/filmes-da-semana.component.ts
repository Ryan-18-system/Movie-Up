import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';

@Component({
  selector: 'app-filmes-da-semana',
  templateUrl: './filmes-da-semana.component.html',
  styleUrls: ['./filmes-da-semana.component.css']
})
export class FilmesDaSemanaComponent implements OnInit {

  filmes: Array<Filme> = [];
  detalhes!: Filme;


  constructor(private filmeService: FilmeService, private roteador: Router) { }

  ngOnInit(): void {
    this.filmeService.listarFavSemana().subscribe(
      filmes => this.filmes = filmes
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
