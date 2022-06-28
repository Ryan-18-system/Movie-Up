import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import { Usuario } from '../model/usuario';
import {MensagemService} from "./mensagem.service";


@Injectable({
  providedIn: 'root'
})
export class UsuariosFirestoreService {

  colecaoUsuarios: AngularFirestoreCollection<Usuario>;
  NOME_COLECAO = 'usuarios';

  constructor(private afs: AngularFirestore, private mensagemService: MensagemService) {
    this.colecaoUsuarios = afs.collection(this.NOME_COLECAO);
  }



  inserir(usuario: Usuario): Observable<Usuario> {
      delete usuario.id;
      return from(this.colecaoUsuarios.add(Object.assign({}, usuario)));
  }


}
