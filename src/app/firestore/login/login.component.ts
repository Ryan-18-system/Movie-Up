import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../shared/service/auth.service";
import {Router} from "@angular/router";
import {MensagemService} from "../../shared/service/mensagem.service";




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  constructor(private formBuilder: FormBuilder,
              private auth: AuthService, private roteador: Router,
              private mensagemService: MensagemService) {
    this.formLogin = formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required])]
    })

  }

  ngOnInit(): void {
  }
  login(){
    if(this.formLogin.valid){
      // @ts-ignore
      this.auth.login(this.formLogin.value).then((user)=>{
        this.roteador.navigate([''])
        this.mensagemService.success(`Usuário logado com sucesso`)
      }).catch(()=>{
        this.mensagemService.error('Error ao autenticar, verifique email e senha')
      })
    }

  }

}
