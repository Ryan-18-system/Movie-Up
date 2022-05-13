import { Component, OnInit } from '@angular/core';
import { Critica } from 'src/app/shared/model/criticas';
import { CriticasFirestoreService } from 'src/app/shared/service/criticas-firestore.service';
import {MenssageService} from "../../shared/service/menssage.service";

@Component({
  selector: 'app-cadastrar-critica',
  templateUrl: './cadastrar-critica.component.html',
  styleUrls: ['./cadastrar-critica.component.css']
})
export class CadastrarCriticaComponent implements OnInit {

  critica: Critica;

  constructor(private criticaFirestoreService: CriticasFirestoreService, private menssageService: MenssageService) {
    this.critica = new Critica;
  }

  ngOnInit(): void {
  }

  inserir(): void {
    this.criticaFirestoreService.inserir(this.critica).subscribe(
      critica => this.menssageService.success("Crítica cadastrada com sucesso")
      )
    this.critica = new Critica()
  }

}
