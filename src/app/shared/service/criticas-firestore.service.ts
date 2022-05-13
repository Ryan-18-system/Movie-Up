import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import { Critica } from '../model/criticas';

@Injectable({
  providedIn: 'root'
})
export class CriticasFirestoreService {

  colecaoCriticas: AngularFirestoreCollection<Critica>;
  NOME_COLECAO = 'criticas';

  constructor(private afs: AngularFirestore) {
    this.colecaoCriticas = afs.collection(this.NOME_COLECAO);
  }

  listar(): Observable<Critica[]> {
    return this.colecaoCriticas.valueChanges({idField: 'id'});
  }

  inserir(critica: Critica): Observable<Critica> {
    delete critica.id;
    return from(this.colecaoCriticas.add(Object.assign({}, critica)));
  }

  remover(id: string): Observable<void> {
    return from(this.colecaoCriticas.doc(id).delete());
  }

  pesquisarPorId(id: string): Observable<Critica> {
    return this.colecaoCriticas.doc(id).get().pipe(map(document => new Critica(document.id, document.data())));
  }

  atualizar(critica: Critica): Observable<void> {
    delete critica.id;
    return from(this.colecaoCriticas.doc(critica.id).update(Object.assign({}, critica)));
  }

}
