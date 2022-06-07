import { FavoritosService } from './../../shared/service/favoritos.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';
import { MenssageService } from 'src/app/shared/service/menssage.service';
import { Favoritos } from 'src/app/shared/model/favoritos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  filmes: Array<Filme> = [];
  favoritosAdd: Favoritos;


  favoritos = [
    {img: 'https://www.themoviedb.org/t/p/original/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/xvIAeAyXakMHPOgU7URp1kqKQZI.jpg'},
  ]

  constructor(private filmeService: FilmeService, private favoritosService: FavoritosService, private menssageService: MenssageService) {
    this.favoritosAdd = new Favoritos;

  }

  ngOnInit(): void {
    this.filmeService.listarEmalta().subscribe(
      filmes => this.filmes = filmes
    );
  }

  inserirFav(id: Filme["id"]): void {
    this.favoritosService.inserir(id).subscribe(
      favoritosAdd => this.menssageService.success("Filme adicionado aos favoritos")
      )
    this.favoritosAdd = new Favoritos()
    console.log(this.favoritosAdd)

  }

}
