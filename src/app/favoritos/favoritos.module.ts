import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { AddFavoritosComponent } from './add-favoritos/add-favoritos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarFavoritosComponent } from './listar-favoritos/listar-favoritos.component';
import { MatIcon } from '@angular/material/icon';



@NgModule({
  declarations: [
    ListarFavoritosComponent,
    AddFavoritosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
  ],
  exports: [
    ListarFavoritosComponent,
    AddFavoritosComponent
  ]
})
export class FavoritosModule { }
