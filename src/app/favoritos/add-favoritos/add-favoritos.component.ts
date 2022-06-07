import { Component, OnInit } from '@angular/core';
import { Favoritos } from 'src/app/shared/model/favoritos';
import { Filme } from 'src/app/shared/model/Filme';
import { FavoritosService } from 'src/app/shared/service/favoritos.service';
import { MenssageService } from 'src/app/shared/service/menssage.service';

@Component({
  selector: 'app-add-favoritos',
  templateUrl: './add-favoritos.component.html',
  styleUrls: ['./add-favoritos.component.css']
})
export class AddFavoritosComponent implements OnInit {

  favoritos: Favoritos;
  idFilme: Filme['id'];

  constructor(private favoritosService: FavoritosService, private menssageService: MenssageService) {
    this.favoritos = new Favoritos;
  }

  ngOnInit(): void {
  }

  inserirFav(id: Filme["id"]): void {
    this.favoritosService.inserir(id).subscribe(
      favoritos => this.menssageService.success("Filme adicionado aos favoritos")
      )
    this.favoritos = new Favoritos;
  }
}
