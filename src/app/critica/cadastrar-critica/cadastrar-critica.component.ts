import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { CriticasService } from 'src/app/shared/service/criticas.service';

@Component({
  selector: 'app-cadastrar-critica',
  templateUrl: './cadastrar-critica.component.html',
  styleUrls: ['./cadastrar-critica.component.css']
})
export class CadastrarCriticaComponent implements OnInit {

  critica: Critica;

  constructor(private criticaService: CriticasService) {
    this.critica = new Critica;
  }

  ngOnInit(): void {
  }

  inserir(): void {
    this.criticaService.inserirCritica(this.critica).subscribe(
      critica => console.log(critica)
    );

    this.critica = new Critica();
  }

}
