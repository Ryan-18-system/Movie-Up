import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastrarCriticaComponent } from './cadastrar-critica/cadastrar-critica.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    CadastrarCriticaComponent],
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
        MatGridListModule,
        MatSelectModule,


    ],
  exports: [ CadastrarCriticaComponent,
    ]
})
export class CriticaModule { }
