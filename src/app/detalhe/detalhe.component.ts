import { Component, OnInit } from '@angular/core';
import { Detalhe } from 'src/app/shared/model/detalhe';
import { DetalheService } from 'src/app/shared/service/detalhe.service';
@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent implements OnInit {
  detalhe: Array<Detalhe> = []
  constructor(private detalheService: DetalheService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.detalheService.buscarDetalhe().subscribe(
      detalhe => this.detalhe = detalhe

    );
  }

}
