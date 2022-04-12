import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favoritos = [
    {img: 'https://www.themoviedb.org/t/p/original/rvtdN5XkWAfGX6xDuPL6yYS2seK.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg'},
    {img: 'https://www.themoviedb.org/t/p/original/xvIAeAyXakMHPOgU7URp1kqKQZI.jpg'},
  ]

  emalta = [
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
