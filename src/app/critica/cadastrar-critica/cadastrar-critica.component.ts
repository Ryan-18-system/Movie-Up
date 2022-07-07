import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  criticas: Array<Critica> = [];
  filme: Array<Filme> = [];
  idFilme: string | null;

  constructor(private criticaService: CriticasService, private mensagemService: MensagemService, private roteador: Router, private rotaAtual: ActivatedRoute) {
      this.critica = new Critica();
      this.idFilme = '';
  }

  ngOnInit(): void {
      if (this.rotaAtual.snapshot.paramMap.has('id')){
        this.idFilme = this.rotaAtual.snapshot.paramMap.get('id');
      }
  }

  inserir(id: number = Number(this.idFilme) , nomeDoCritico: string, mensagem: string ): void {
    this.criticaService.inserir(id, nomeDoCritico, mensagem).subscribe(
      critica => {
        this.mensagemService.success("Crítica cadastrada com sucesso")

      }
      )
    this.critica = new Critica()
  }

  atualizar(id: number = Number(this.idFilme) , nomeDoCritico: string, mensagem: string ){
    this.criticaService.atualizar(id, nomeDoCritico, mensagem).subscribe(
      critica => {
        return this.mensagemService.success("Crítica atualizada com sucesso")

      }
      )
  }

}
