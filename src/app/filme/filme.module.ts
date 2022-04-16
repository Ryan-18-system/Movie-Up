import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from "@angular/material/input";
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { BuscarFilmesComponent } from './buscar-filmes/buscar-filmes.component';
import { AclamadosPelaCriticaComponent } from './aclamados-pela-critica/aclamados-pela-critica.component';
import { MaisEsperadosComponent } from './mais-esperados/mais-esperados.component';
import { FilmesDaSemanaComponent } from './filmes-da-semana/filmes-da-semana.component';



@NgModule({
  declarations: [
    ListarFilmesComponent,
    BuscarFilmesComponent,
    AclamadosPelaCriticaComponent,
    MaisEsperadosComponent,
    FilmesDaSemanaComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,

  ],

  exports: [
    ListarFilmesComponent,
    BuscarFilmesComponent,
    AclamadosPelaCriticaComponent,
    MaisEsperadosComponent,
    FilmesDaSemanaComponent
  ],


})
export class FilmeModule { }
