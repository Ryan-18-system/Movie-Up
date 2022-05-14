import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmesFirestoreService } from 'src/app/shared/service/filmes-firestore.service';

@Component({
  selector: 'app-aclamados-pela-critica',
  templateUrl: './aclamados-pela-critica.component.html',
  styleUrls: ['./aclamados-pela-critica.component.css']
})
export class AclamadosPelaCriticaComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(private filmeService: FilmesFirestoreService) { }

  ngOnInit(): void {
    this.filmeService.listar().subscribe(
      filmes => this.filmes = filmes
    );
  }

}
