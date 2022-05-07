import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenssageService} from "../../shared/service/menssage.service";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/service/usuario.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario
  constructor(private rotalAtual: ActivatedRoute,
              private usuarioService: UsuarioService,
              private roteador: Router,
              private menssageService: MenssageService
  ) {
    this.usuario = new Usuario();
    if (this.rotalAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
      this.usuarioService.pesquisar(idParaEdicao).subscribe(
        usuarioRetornado => this.usuario = usuarioRetornado
      );
    }

  }


  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if (this.usuario.id) {
      this.usuarioService.atualizar(this.usuario).subscribe(
        usuarioAlterado => {
          this.menssageService.success('Usuário alterado com sucesso!');
          this.roteador.navigate(['perfil']);
        }
      );
    }
  }


}
