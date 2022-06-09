import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { CriticasService } from 'src/app/shared/service/criticas.service';
import {MensagemService} from "../../shared/service/mensagem.service";

@Component({
  selector: 'app-cadastrar-critica',
  templateUrl: './cadastrar-critica.component.html',
  styleUrls: ['./cadastrar-critica.component.css']
})
export class CadastrarCriticaComponent implements OnInit {

  critica: Critica;

  constructor(private criticaService: CriticasService, private mensagemService: MensagemService) {
    this.critica = new Critica;
  }

  ngOnInit(): void {
  }

  inserir(): void {
    this.criticaService.inserir(this.critica).subscribe(
      critica => this.mensagemService.success("Crítica cadastrada com sucesso")
      )
    this.critica = new Critica()
  }

}
