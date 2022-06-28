import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { Filme } from 'src/app/shared/model/Filme';
import { CriticasService } from 'src/app/shared/service/criticas.service';
import { FilmeService } from 'src/app/shared/service/filmes.service';
import {MensagemService} from "../../shared/service/mensagem.service";

@Component({
  selector: 'app-cadastrar-critica',
  templateUrl: './cadastrar-critica.component.html',
  styleUrls: ['./cadastrar-critica.component.css']
})
export class CadastrarCriticaComponent implements OnInit {

  critica: Critica;
  filme: Array<Filme> = [];

  constructor(private criticaService: CriticasService, private mensagemService: MensagemService, private filmeService: FilmeService) {
    this.critica = new Critica;
  }

  ngOnInit(): void {
  }

  inserir(id: number, mensagem: string ): void {

    this.criticaService.inserir(id, mensagem ).subscribe(
      critica => {
        this.mensagemService.success("Crítica cadastrada com sucesso")
        console.log(critica)
      }
      )
    this.critica = new Critica()
  }

}
