import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  filmes = [
    {
      url: 'https://www.themoviedb.org/t/p/original/mzezdUZEnpiUIlxpdyLO1R08Lqm.jpg',
      titulo: 'Eternos',
    },
      {url: 'https://www.themoviedb.org/t/p/original/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg',
      titulo: 'Homem Aranha',
    },
      {url: 'https://www.themoviedb.org/t/p/original/cKNxg77ll8caX3LulREep4C24Vx.jpg',
      titulo: 'Batman',
    },
      {url: 'https://www.themoviedb.org/t/p/original/11MJy6lkt7yTEIowEPIkaK4B7lM.jpg',
      titulo: 'O Projeto Adam',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
