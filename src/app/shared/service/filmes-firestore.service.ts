import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Filme } from '../model/Filme';

@Injectable({
  providedIn: 'root'
})
export class FilmesFirestoreService {

  colecaoFilmes: AngularFirestoreCollection<Filme>;
  NOME_COLECAO = 'filmes';

  constructor(private afs: AngularFirestore) {
    this.colecaoFilmes = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Filme[]> {
    return this.colecaoFilmes.valueChanges({idField: 'id'});
  }

  inserir(filme: Filme): Observable<Filme> {
    delete filme.id;
    return from(this.colecaoFilmes.add(Object.assign({}, filme)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoFilmes.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Filme> {
    return this.colecaoFilmes.doc(id).get().pipe(map(document => new Filme(document.id, document.data())));
  }

  atualizar(filme: Filme): Observable<void> {
    delete filme.id;
    return from(this.colecaoFilmes.doc(filme.id).update(Object.assign({}, filme)));
  }

}
