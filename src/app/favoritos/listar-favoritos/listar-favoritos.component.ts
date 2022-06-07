import { Favoritos } from './../../shared/model/favoritos';
import { FavoritosService } from './../../shared/service/favoritos.service';
import { Component, OnInit } from '@angular/core';
import {MenssageService} from "../../shared/service/menssage.service";


@Component({
  selector: 'app-listar-favoritos',
  templateUrl: './listar-favoritos.component.html',
  styleUrls: ['./listar-favoritos.component.css']
})
export class ListarFavoritosComponent implements OnInit {

  favoritos: Array<Favoritos> = [];


  constructor(private favoritosService: FavoritosService, private menssageService: MenssageService) { }

  ngOnInit(): void {
    this.favoritosService.listar().subscribe(
      favoritos => this.favoritos = favoritos
    );
  }

  remover(favoritos: Favoritos): void {
    this.favoritosService.remover(favoritos.id || 0).subscribe(
      resposta => {
        const indxFavoritoARemover = this.favoritos.findIndex(f => f.titulo === favoritos.titulo);
        if (indxFavoritoARemover > -1) {
          this.favoritos.splice(indxFavoritoARemover, 1);
          this.menssageService.success("Filme removido dos favoritos")
        }
      }
    )
  }

}
