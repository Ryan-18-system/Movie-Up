import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  URL_FILMES = 'http://localhost:8080/filmes';
  API_KEY = 'cbd351c2a8d0703e52c7d09d292a3acc';
  URL_API = `https://api.themoviedb.org/3/movie/550?api_key=${this.API_KEY}`;
  constructor(private httpClient: HttpClient) { }

  searchMovies(query: string, page: number): Observable<any> {
    return  this.httpClient.get<any>(this.URL_API + '&s=' + query + '&page=' + page);
  }

  findMovieById(id: number){
    return this.httpClient.get<any>(this.URL_API +'&i='+id);
  }

}

