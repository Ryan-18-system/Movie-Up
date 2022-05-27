import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Usuario} from "../model/usuario";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  URL_USUARIOS = 'http://localhost:8082/usuarios';
  constructor(private httpClient: HttpClient) { }

  inserir(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.post<Usuario>(this.URL_USUARIOS, usuario);
  }
  pesquisar(id:number): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.URL_USUARIOS}/${id}`);
  }
  atualizar(usuario: Usuario): Observable<Usuario> {
    return this.httpClient.put<Usuario>(`${this.URL_USUARIOS}/${usuario.id}`, usuario);
  }
  autenticar(email: string, senha: string): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.URL_USUARIOS}?email=${email}&senha=${senha}`)
  }
}

