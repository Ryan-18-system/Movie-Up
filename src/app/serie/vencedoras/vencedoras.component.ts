import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/shared/model/serie';
import { SerieService } from 'src/app/shared/service/series.service';

@Component({
  selector: 'app-vencedoras',
  templateUrl: './vencedoras.component.html',
  styleUrls: ['./vencedoras.component.css']
})
export class VencedorasComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  ngOnInit(): void {
    this.serieService.listarVencedoras().subscribe(
      series => this.series = series
    )
  }

}
