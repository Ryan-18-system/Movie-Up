import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarSeriesComponent } from './buscar-series/buscar-series.component';
import { ListarSeriesComponent } from './listar-series/listar-series.component';



@NgModule({
  declarations: [
    BuscarSeriesComponent,
    ListarSeriesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SerieModule { }
