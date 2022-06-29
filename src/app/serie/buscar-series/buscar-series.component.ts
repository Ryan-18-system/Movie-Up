import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/app/shared/model/serie';
import { BuscarFilmeService } from 'src/app/shared/service/buscar-filme.service';

@Component({
  selector: 'app-buscar-series',
  templateUrl: './buscar-series.component.html',
  styleUrls: ['./buscar-series.component.css']
})
export class BuscarSeriesComponent implements OnInit {
  series: Array<Serie> = [];

  constructor(private buscarFilmeService: BuscarFilmeService) { }

  ngOnInit(): void {
  }

  buscarSerie(value: string){
    this.buscarFilmeService.buscarSerie(value).subscribe(
      value => {
        this.series = value
        console.log(value);
      }
    )
  }

}
