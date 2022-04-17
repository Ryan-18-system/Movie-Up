import { CadastrarCriticaComponent } from './critica/cadastrar-critica/cadastrar-critica.component';
import { ListarCriticaComponent } from './critica/listar-critica/listar-critica.component';
import { MaisEsperadosComponent } from './filme/mais-esperados/mais-esperados.component';
import { AclamadosPelaCriticaComponent } from './filme/aclamados-pela-critica/aclamados-pela-critica.component';
import { FilmesDaSemanaComponent } from './filme/filmes-da-semana/filmes-da-semana.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarFilmesComponent } from './filme/listar-filmes/listar-filmes.component';
import {HomeComponent} from "./layout/home/home.component";
import {LoginComponent} from "./login/login/login.component";
import {CadastrarUsuarioComponent} from "./usuario/cadastrar-usuario/cadastrar-usuario.component";

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
    path:'filmes',
    component: ListarFilmesComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
