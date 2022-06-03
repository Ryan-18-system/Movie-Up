import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from "@angular/material/input";
import { BuscarSeriesComponent } from './buscar-series/buscar-series.component';
import { EmAltaComponent } from './em-alta/em-alta.component';
import { VencedorasComponent } from './vencedoras/vencedoras.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';



@NgModule({
  declarations: [
    BuscarSeriesComponent,
    EmAltaComponent,
    VencedorasComponent,
    LancamentosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    BuscarSeriesComponent,
    EmAltaComponent,
    VencedorasComponent,
    LancamentosComponent
  ],
})
export class SerieModule { }
