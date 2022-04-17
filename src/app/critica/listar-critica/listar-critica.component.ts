import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { CriticasService } from 'src/app/shared/service/criticas.service';

@Component({
  selector: 'app-listar-critica',
  templateUrl: './listar-critica.component.html',
  styleUrls: ['./listar-critica.component.css']
})
export class ListarCriticaComponent implements OnInit {
  criticas: Array<Critica> = [];

  constructor(private criticaService: CriticasService) {
  }

  ngOnInit(): void {
    this.criticaService.listarCritica().subscribe(
      criticas => this.criticas = criticas
    );
  }

  editar(critica: Critica): void {
    critica.nome += ' Alterado';
  }

  remover(critica: Critica): void {
    const indxCriticaARemover = this.criticas.findIndex(u => u.mensagem === critica.mensagem);
    if (indxCriticaARemover > -1) {
      this.criticas.splice(indxCriticaARemover, 1);
    }
  }

}
