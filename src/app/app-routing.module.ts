import { CadastrarCriticaComponent } from './critica/cadastrar-critica/cadastrar-critica.component';
import { ListarCriticaComponent } from './critica/listar-critica/listar-critica.component';
import { MaisEsperadosComponent } from './filme/mais-esperados/mais-esperados.component';
import { AclamadosPelaCriticaComponent } from './filme/aclamados-pela-critica/aclamados-pela-critica.component';
import { FilmesDaSemanaComponent } from './filme/filmes-da-semana/filmes-da-semana.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";

import {DetalheComponent} from "./detalhe/detalhe.component";
import {BuscarFilmesComponent} from "./filme/buscar-filmes/buscar-filmes.component";
import {BuscarCinemaComponent} from "./cinema/buscar-cinema/buscar-cinema.component";
import { BuscarSeriesComponent } from './serie/buscar-series/buscar-series.component';
import { EmAltaComponent } from './serie/em-alta/em-alta.component';
import { LancamentosComponent } from './serie/lancamentos/lancamentos.component';
import { VencedorasComponent } from './serie/vencedoras/vencedoras.component';
import {CadastroComponent} from "./firestore/cadastro/cadastro.component";
import {LoginComponent} from "./firestore/login/login.component";
import {AngularFireAuthGuard, redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const routes: Routes = [
  {
  path:'',
  component: HomeComponent
  },
  {
    path:'filmes-da-semana',
    component: FilmesDaSemanaComponent
  },
  {
    path:'aclamados-pela-critica',
    component: AclamadosPelaCriticaComponent
  },
  {
    path:'mais-esperados',
    component: MaisEsperadosComponent
  },
  {
    path:'listar-critica/:id',
    component: ListarCriticaComponent
  },
  {
    path:'criticas/:id',
    component: CadastrarCriticaComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }

  },{
    path:'atualizar-critica/:id',
    component: CadastrarCriticaComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path:'detalhes/:id',
    component: DetalheComponent
  },
  {
    path: 'buscarfilme',
    component: BuscarFilmesComponent
  },
  {
    path: 'buscarserie',
    component: BuscarSeriesComponent
  },
  {
    path: 'emalta',
    component: EmAltaComponent
  },
  {
    path: 'lancamentos',
    component: LancamentosComponent
  },
  {
    path: 'vencedoras',
    component: VencedorasComponent
  },
  {
    path: 'buscar-cinema',
    component: BuscarCinemaComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
