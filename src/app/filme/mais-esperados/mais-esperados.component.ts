import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';

@Component({
  selector: 'app-mais-esperados',
  templateUrl: './mais-esperados.component.html',
  styleUrls: ['./mais-esperados.component.css']
})
export class MaisEsperadosComponent implements OnInit {

  filmes: Array<Filme> = [];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.listarEsperados().subscribe(
      filmes => this.filmes = filmes
    );
  }

}
