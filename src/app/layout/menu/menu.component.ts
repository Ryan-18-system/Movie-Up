import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/service/auth.service";
import {MensagemService} from "../../shared/service/mensagem.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor(private authService: AuthService, private mensagemService : MensagemService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    this.mensagemService.success('Logout executado com sucesso, volte sempre!')
  }
}
