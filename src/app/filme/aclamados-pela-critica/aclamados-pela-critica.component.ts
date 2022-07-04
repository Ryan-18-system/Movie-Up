import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/shared/model/Filme';
import { FilmeService } from 'src/app/shared/service/filmes.service';

@Component({
  selector: 'app-aclamados-pela-critica',
  templateUrl: './aclamados-pela-critica.component.html',
  styleUrls: ['./aclamados-pela-critica.component.css']
})
export class AclamadosPelaCriticaComponent implements OnInit {

  filmes: Array<Filme> = [];
  detalhes!: Filme;


  constructor(private filmeService: FilmeService, private roteador: Router) { }

  ngOnInit(): void {
    this.filmeService.listarAclamados().subscribe(
      filmes => this.filmes = filmes
    );
  }

  listarById(id: number){
    this.filmeService.listarById(id).subscribe(
      filmes => {
        this.detalhes = filmes
        console.log(filmes)
        this.roteador.navigate(['detalhes', id])
      }
    )
  }

}
