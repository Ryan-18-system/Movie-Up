import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {CadastrarUsuarioComponent} from "./cadastrar-usuario/cadastrar-usuario.component";
import {MatSelectModule} from "@angular/material/select";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";





@NgModule({
  declarations: [CadastrarUsuarioComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    RouterModule,

  ]
})
export class UsuarioModule { }
