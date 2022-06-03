import { CadastrarCriticaComponent } from './critica/cadastrar-critica/cadastrar-critica.component';
import { ListarCriticaComponent } from './critica/listar-critica/listar-critica.component';
import { MaisEsperadosComponent } from './filme/mais-esperados/mais-esperados.component';
import { AclamadosPelaCriticaComponent } from './filme/aclamados-pela-critica/aclamados-pela-critica.component';
import { FilmesDaSemanaComponent } from './filme/filmes-da-semana/filmes-da-semana.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./layout/home/home.component";
import {LoginComponent} from "./login/login/login.component";
import {CadastrarUsuarioComponent} from "./usuario/cadastrar-usuario/cadastrar-usuario.component";
import {DetalheComponent} from "./detalhe/detalhe.component";
import {AddFavoritosComponent} from "./favoritos/add-favoritos/add-favoritos.component";
import {BuscarFilmesComponent} from "./filme/buscar-filmes/buscar-filmes.component";
import {BuscarCinemaComponent} from "./cinema/buscar-cinema/buscar-cinema.component";
import { BuscarSeriesComponent } from './serie/buscar-series/buscar-series.component';
import { EmAltaComponent } from './serie/em-alta/em-alta.component';
import { LancamentosComponent } from './serie/lancamentos/lancamentos.component';
import { VencedorasComponent } from './serie/vencedoras/vencedoras.component';


const routes: Routes = [
  {
  path:'',
  component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'cadastrarusuario',
    component: CadastrarUsuarioComponent
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
    path:'listar-critica',
    component: ListarCriticaComponent
  },
  {
    path:'cadastrar-critica',
    component: CadastrarCriticaComponent
  },
  {
    path:'detalhes/:id',
    component: DetalheComponent
  },
  {
    path: 'favoritos',
    component: AddFavoritosComponent
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
    path: 'cadastrar-usuario/:id',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'buscar-cinema',
    component: BuscarCinemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
