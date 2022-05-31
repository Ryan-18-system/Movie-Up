import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarCinemaComponent } from './buscar-cinema/buscar-cinema.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    BuscarCinemaComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  exports:[
    BuscarCinemaComponent
  ]
})
export class CinemaModule { }
