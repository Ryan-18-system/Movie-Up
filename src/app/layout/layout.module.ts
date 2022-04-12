import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MenuComponent} from "./menu/menu.component";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";




@NgModule({
    declarations: [
        FooterComponent,
        MenuComponent,
        HomeComponent
    ],
    exports: [
        FooterComponent,
        MenuComponent,
        HomeComponent
    ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class LayoutModule { }
