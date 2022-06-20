import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Usuario} from "../../shared/model/usuario";
import {UsuarioService} from "../../shared/service/usuario.service";
import {MensagemService} from "../../shared/service/mensagem.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:any = true
  usuarios: Array<Usuario> = []
  constructor(private usuarioService: UsuarioService, private mensagemService: MensagemService,
              private roteador: Router
              ) { }

  ngOnInit(): void {
  }
  autenticacao(email: string, senha: string){
    if( !email || !senha ){
      this.mensagemService.warning("Campos Vazios, não foi possível efetuar login")
    } else{
      this.usuarioService.autenticar(email,senha).subscribe(
        (usuario) => {
          if (usuario.length < 1 ){
            this.mensagemService.warning('Erro de Autenticação, email ou senha estão incorretos')
          }else{
            this.roteador.navigate([''])
          }
        }
      )
    }

  }

}
