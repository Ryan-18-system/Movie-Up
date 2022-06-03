import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';

@Component({
  selector: 'app-filmes-da-semana',
  templateUrl: './filmes-da-semana.component.html',
  styleUrls: ['./filmes-da-semana.component.css']
})
export class FilmesDaSemanaComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.listarFavSemana().subscribe(
      filmes => this.filmes = filmes
    );
  }

}
