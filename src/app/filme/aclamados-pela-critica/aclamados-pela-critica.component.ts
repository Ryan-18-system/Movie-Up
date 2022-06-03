import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';

@Component({
  selector: 'app-aclamados-pela-critica',
  templateUrl: './aclamados-pela-critica.component.html',
  styleUrls: ['./aclamados-pela-critica.component.css']
})
export class AclamadosPelaCriticaComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.listarAclamados().subscribe(
      filmes => this.filmes = filmes
    );
  }

}
