import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Usuario} from "../../shared/model/usuario";
import {MensagemService} from "../../shared/service/mensagem.service";
import {UsuariosFirestoreService} from "../../shared/service/usuarios-firestore.service";



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  hide = true;
  usuario = new Usuario()

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor( private mensagemService: MensagemService, private usuarioFirestore: UsuariosFirestoreService) {

  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
  }
  cadastrarUsuario(){
    if(this.usuario.nome === undefined || this.usuario.senha === undefined || this.usuario.email === undefined){
      this.mensagemService.warning('Campos em branco. Por favor, preencha todos os campos')
    }else{
      this.usuarioFirestore.inserir(this.usuario).subscribe(
        {
          next: value => {
            this.usuario = value
            this.mensagemService.success(`Usuário Cadastrado com Sucesso`)
            this.usuario = new Usuario()
          },
          error: err => console.log(err)
        }
      )
    }

  }


}
