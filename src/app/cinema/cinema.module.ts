import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarCinemaComponent } from './buscar-cinema/buscar-cinema.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    BuscarCinemaComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule
  ],
  exports:[
    BuscarCinemaComponent
  ]
})
export class CinemaModule { }
