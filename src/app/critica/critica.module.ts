import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarCriticaComponent } from './cadastrar-critica/cadastrar-critica.component';
import { ListarCriticaComponent } from './listar-critica/listar-critica.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    CadastrarCriticaComponent,
    ListarCriticaComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule
  ],
  exports: [ CadastrarCriticaComponent,
    ListarCriticaComponent]
})
export class CriticaModule { }
