import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/service/usuario.service";

import {MenssageService} from "../../shared/service/menssage.service";

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  // @ts-ignore
  usuario: Usuario;


  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Digite seu email';
    }

    return this.email.hasError('email') ? 'Email digitado está incorreto' : '';
  }

  constructor(private rotalAtual: ActivatedRoute,
              private usuarioService: UsuarioService,
              private roteador: Router,
              private menssageService: MenssageService
  ) {
    this.usuario = new Usuario();
    // if (this.rotalAtual.snapshot.paramMap.has('id')) {
    //   const idParaEdicao = Number(this.rotalAtual.snapshot.paramMap.get('id'));
    //   this.usuarioService.pesquisar(idParaEdicao).subscribe(
    //     usuarioRetornado => this.usuario = usuarioRetornado
    //   );
    // }

  }


  ngOnInit(): void {
  }

  inserirUsuario(): void {
      this.usuarioService.inserir(this.usuario).subscribe(
        usuarioInserido => {
          console.log(usuarioInserido);
          this.menssageService.success('Usuário inserido com sucesso com sucesso!');
          this.roteador.navigate(['login'])
        }
      );
    }
}



