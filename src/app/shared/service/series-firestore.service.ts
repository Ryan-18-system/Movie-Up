import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Serie } from '../model/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesFirestoreService {

  colecaoSeries: AngularFirestoreCollection<Serie>;
  NOME_COLECAO = 'series';

  constructor(private afs: AngularFirestore) {
    this.colecaoSeries = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Serie[]> {
    return this.colecaoSeries.valueChanges({idField: 'id'});
  }

  inserir(serie: Serie): Observable<Serie> {
    delete serie.id;
    return from(this.colecaoSeries.add(Object.assign({}, serie)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoSeries.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Serie> {
    return this.colecaoSeries.doc(id).get().pipe(map(document => new Serie(document.id, document.data())));
  }

  atualizar(serie: Serie): Observable<void> {
    delete serie.id;
    return from(this.colecaoSeries.doc(serie.id).update(Object.assign({}, serie)));
  }

}
