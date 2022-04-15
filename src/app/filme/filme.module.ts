import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { BuscarFilmesComponent } from './buscar-filmes/buscar-filmes.component';



@NgModule({
  declarations: [
    ListarFilmesComponent,
    BuscarFilmesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FilmeModule { }
