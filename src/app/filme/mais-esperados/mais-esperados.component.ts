import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmesFirestoreService } from 'src/app/shared/service/filmes-firestore.service';

@Component({
  selector: 'app-mais-esperados',
  templateUrl: './mais-esperados.component.html',
  styleUrls: ['./mais-esperados.component.css']
})
export class MaisEsperadosComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(private filmeService: FilmesFirestoreService) { }

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      filmes => this.filmes = filmes
    );
  }

}
