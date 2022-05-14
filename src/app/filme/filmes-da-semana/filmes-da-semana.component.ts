import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmesFirestoreService } from 'src/app/shared/service/filmes-firestore.service';

@Component({
  selector: 'app-filmes-da-semana',
  templateUrl: './filmes-da-semana.component.html',
  styleUrls: ['./filmes-da-semana.component.css']
})
export class FilmesDaSemanaComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(private filmeService: FilmesFirestoreService) { }

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      filmes => this.filmes = filmes
    );
  }

}
