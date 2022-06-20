import { FilmeService } from 'src/app/shared/service/filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../shared/model/Filme';
@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  filmes: Array<Filme> = [];
  constructor(private filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filmeService.listarDetalhes().subscribe(
      filmes => this.filmes = filmes

    );
  }

}
