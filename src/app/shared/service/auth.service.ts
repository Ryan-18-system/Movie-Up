import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Login} from "../model/login";
import {from, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(login: Login){
    return this.afa.signInWithEmailAndPassword(login.email, login.senha)
  }
  logout(): Observable<void> {
    return from(this.afa.signOut())
  }

}
