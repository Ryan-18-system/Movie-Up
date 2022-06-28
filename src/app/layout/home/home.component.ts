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

  filmes: Array<Filme> = [];
  detalhes!: Filme;


  favoritos = [
    {imagem: 'https://www.themoviedb.org/t/p/original/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg'},
    {imagem: 'https://www.themoviedb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'},
    {imagem: 'https://www.themoviedb.org/t/p/original/xvIAeAyXakMHPOgU7URp1kqKQZI.jpg'},
  ]

  constructor(private filmeService: FilmeService, private roteador: Router) {
  }

  ngOnInit(): void {
    this.filmeService.listarFavoritos().subscribe(
      filmes => this.filmes = filmes
    )

    this.filmeService.listarEmalta().subscribe(
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
