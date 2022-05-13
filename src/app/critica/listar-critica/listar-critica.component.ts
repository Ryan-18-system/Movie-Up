import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { CriticasFirestoreService } from 'src/app/shared/service/criticas-firestore.service';
import {MenssageService} from "../../shared/service/menssage.service";

@Component({
  selector: 'app-listar-critica',
  templateUrl: './listar-critica.component.html',
  styleUrls: ['./listar-critica.component.css']
})
export class ListarCriticaComponent implements OnInit {
  criticas: Array<Critica> = [];

  constructor(private criticaService: CriticasFirestoreService, private menssageService: MenssageService) {
  }

  ngOnInit(): void {
    this.criticaService.listar().subscribe(
      criticas => this.criticas = criticas
    );
  }

  editar(critica: Critica): void {
    critica.nomeDaObra += ' Alterado';
  }

  remover(critica: Critica): void {
    this.criticaService.remover(critica.id || '').subscribe(
      resposta => {
        const indxCriticaARemover = this.criticas.findIndex(u => u.mensagem === critica.mensagem);
        if (indxCriticaARemover > -1) {
          this.criticas.splice(indxCriticaARemover, 1);
          this.menssageService.success("Crítica removida com sucesso")
        }
      }
    )
  }
}
