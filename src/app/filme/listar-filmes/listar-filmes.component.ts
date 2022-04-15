import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  filmes = [
    {img: 'https://www.themoviedb.org/t/p/original/725WE0Qb1BbUF7aGvjiQqzzffpg.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/bOggWFHLSn0MgDpiInbvurx2m1X.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/cKNxg77ll8caX3LulREep4C24Vx.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
