import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/shared/model/serie';
import { SerieService } from 'src/app/shared/service/series.service';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.css']
})
export class LancamentosComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.listarEmalta().subscribe(
      series => this.series = series
    )
  }

}
