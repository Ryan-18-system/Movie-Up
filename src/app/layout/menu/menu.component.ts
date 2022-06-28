import { Component, OnInit } from '@angular/core';
import { Filme } from 'src/app/shared/model/Filme';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  listaFilmes: Array<Filme> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
