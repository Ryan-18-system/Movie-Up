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

  pesquisarPorId(id: string): Observable<Filme> {
    return this.colecaoFilmes.doc(id).get().pipe(map(document => new Filme(document.id, document.data())));
  }


}
