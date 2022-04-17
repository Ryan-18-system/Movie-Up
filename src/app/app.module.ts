import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LoginModule} from "./login/login.module";
import {UsuarioModule} from "./usuario/usuario.module";
import {FilmeModule} from "./filme/filme.module";
import {SerieModule} from "./serie/serie.module";
import {CinemaModule} from "./cinema/cinema.module";
import {FavoritosModule} from "./favoritos/favoritos.module";
import { CriticaModule } from './critica/critica.module';


@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        BrowserAnimationsModule,
        LoginModule,
        UsuarioModule,
        FilmeModule,
        SerieModule,
        CinemaModule,
        FavoritosModule,
        CriticaModule,
        HttpClientModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
