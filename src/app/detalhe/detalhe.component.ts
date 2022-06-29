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
  critica: Array<Critica> = [];
  criticas: Critica;

  constructor(private filmeService: FilmeService,
    private criticaService: CriticasService,
    private mensagemService: MensagemService,
    private roteador: Router, private rotaAtual: ActivatedRoute) {
      this.criticas = new Critica();
      this.filme = new Filme();
      if (this.rotaAtual.snapshot.paramMap.has('id')){
        const idParaFilme = this.rotaAtual.snapshot.paramMap.get('id');
        this.listarById(Number(idParaFilme));
      }

    }

  ngOnInit(): void {
  }

  listarById(id: number){
    this.filmeService.listarById(id).subscribe(
      filmes => {
        this.filme = filmes
        console.log(filmes)
        this.roteador.navigate(['detalhes', id])
      }
    )
  }

  listarCriticas(id: number){
    this.criticaService.listar(id).subscribe(
      critica =>
      {this.critica = critica
        console.log(critica)}
    )
  }

  remover(criticas: Critica): void {
    this.criticaService.remover(criticas).subscribe(
      resposta => {
        const indxCriticaARemover = this.critica.findIndex(u => u.mensagem === criticas.mensagem);
        if (indxCriticaARemover > -1) {
          this.critica.splice(indxCriticaARemover, 1);
          this.mensagemService.success("Crítica removida com sucesso")
        }
      }
    )
  }

}



