import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from './../shared/service/mensagem.service';
import { CriticasService } from 'src/app/shared/service/criticas.service';
import { FilmeService } from 'src/app/shared/service/filmes.service';
import { Component, OnInit } from '@angular/core';
import { Filme } from '../shared/model/Filme';
import { Critica } from '../shared/model/criticas';



@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {

  filme: Filme;
  filmes: Array<Filme> = [];
  criticas: Array<Critica> = [];
  critica: Critica;
  idFilme: string | null;
  idCritica: string | null;
  constructor(private filmeService: FilmeService,
    private criticaService: CriticasService,
    private mensagemService: MensagemService,
    private roteador: Router, private rotaAtual: ActivatedRoute) {
      this.idFilme = '';
      this.idCritica = '';

      this.critica = new Critica();
      this.filme = new Filme();
      if (this.rotaAtual.snapshot.paramMap.has('id')){
        const idParaFilme = this.rotaAtual.snapshot.paramMap.get('id');
        this.listarById(Number(idParaFilme));
      }

    }

  ngOnInit(): void {
    if (this.rotaAtual.snapshot.paramMap.has('id')){
      this.idFilme = this.rotaAtual.snapshot.paramMap.get('id');
    }

  }

  listarById(id: number){
    this.filmeService.listarById(id).subscribe(
      filmes => {
        this.filme = filmes
        this.roteador.navigate(['detalhes', id])

      }
    )
  }

  listarCriticas(id: number){
    this.criticaService.listar(id).subscribe(
      critica =>
      {this.criticas = critica
        console.log(this.critica)
      }
    )
  }

  remover(id: number): void {
    this.criticaService.remover(id).subscribe(
      resposta => {
        const indxCriticaARemover = this.criticas.findIndex(c => c.id === this.criticas[0].id);

        if (indxCriticaARemover > -1) {
          this.criticas.splice(indxCriticaARemover, 1);
          this.mensagemService.success("Crítica removida com sucesso")
        }
      }

    )
  }



}
