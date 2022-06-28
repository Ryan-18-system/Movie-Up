import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { Filme } from 'src/app/shared/model/Filme';
import { CriticasService } from 'src/app/shared/service/criticas.service';
import {MensagemService} from "../../shared/service/mensagem.service";

@Component({
  selector: 'app-listar-critica',
  templateUrl: './listar-critica.component.html',
  styleUrls: ['./listar-critica.component.css']
})
export class ListarCriticaComponent implements OnInit {
  criticas: Array<Critica> = [];

  constructor(private criticaService: CriticasService, private mensagemService: MensagemService) {
  }

  ngOnInit(): void {
  }

  listar(filme: Filme): void{
    this.criticaService.listar(filme.id || 0).subscribe(
      criticas => this.criticas = criticas
    )
  }

  listarCriticas(id: number){
    this.criticaService.listar(id).subscribe(
      critica =>
      {this.criticas = critica
        console.log(critica)}
    )
  }

  remover(critica: Critica): void {
    this.criticaService.remover(critica.id || 0).subscribe(
      resposta => {
        const indxCriticaARemover = this.criticas.findIndex(u => u.mensagem === critica.mensagem);
        if (indxCriticaARemover > -1) {
          this.criticas.splice(indxCriticaARemover, 1);
          this.mensagemService.success("Crítica removida com sucesso")
        }
      }
    )
  }
}
