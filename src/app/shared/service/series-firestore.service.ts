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

  pesquisarPorId(id: string): Observable<Serie> {
    return this.colecaoSeries.doc(id).get().pipe(map(document => new Serie(document.id, document.data())));
  }

}
