import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { BuscarFilmesComponent } from './buscar-filmes/buscar-filmes.component';
import { FavoritosDaSemanaComponent } from './favoritos-da-semana/favoritos-da-semana.component';
import { AclamadosPelaCriticaComponent } from './aclamados-pela-critica/aclamados-pela-critica.component';
import { MaisEsperadosComponent } from './mais-esperados/mais-esperados.component';



@NgModule({
  declarations: [
    ListarFilmesComponent,
    BuscarFilmesComponent,
    FavoritosDaSemanaComponent,
    AclamadosPelaCriticaComponent,
    MaisEsperadosComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],

  exports: [
    ListarFilmesComponent,
    BuscarFilmesComponent,
    FavoritosDaSemanaComponent,
    AclamadosPelaCriticaComponent,
    MaisEsperadosComponent,
  ],


})
export class FilmeModule { }
