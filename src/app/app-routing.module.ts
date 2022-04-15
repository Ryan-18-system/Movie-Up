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
    path:'filmes',
    component: ListarFilmesComponent
  },
  {
    path:'cadastrarusuario',
    component: CadastrarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
