import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Login } from './../interfaces/login';
import { Usuario } from './../interfaces/usuario';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Produto } from '../interfaces/produto';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private UsuarioColecao: AngularFirestoreCollection<Usuario>;

  constructor(public afa: AngularFireAuth, public afs:AngularFirestore) { 
    this.UsuarioColecao = this.afs.collection<Usuario>("Usuarios");
  }


  EsqueciSenha(email:string){
    return this.afa.auth.sendPasswordResetEmail(email, { url: 'https://schooleat-87904.firebaseapp.com/__/auth/action'})
  }

 login(usuario:Usuario){
   return this.afa.auth.signInWithEmailAndPassword(usuario.email, usuario.password);
 }

//  addUsuario(usuario:Usuario){
//     this.UsuarioColecao.add(usuario);
//  }
 register(usuario:Usuario){
   return   this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.password);
 }

 logout(){
   return this.afa.auth.signOut();
 }

 getAuth(){
   return this.afa.auth;
 }
  
}
