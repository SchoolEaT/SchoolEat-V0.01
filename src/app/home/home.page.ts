import { Usuario } from './../interfaces/usuario';
import { UsuarioService } from './../services/usuario.service';
import { ProdutoService } from './../services/produto.service';
import { Produto } from './../interfaces/produto';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



public usuario: Usuario= {};
  



  constructor
  (
    public authService:AuthService,
    public afs: AngularFirestore,
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService
    )
    { }


  ngOnInit() {
  }

ionViewWillEnter(){
  let logar = this.authService.afa.auth.currentUser;

  if(logar){
    this.usuarioService.getUsuario().subscribe(
      res => {
        if (res == null){
          this.usuario = this.usuario ;
          if(logar.displayName != null){
            this.usuario.nome = logar.displayName;
            this.usuario.email = logar.email;
          
          }
        } else {
          
        }
        this.usuario.nome = logar.displayName;
        this.usuario.email = logar.email;
        this.usuario.telefone = logar.phoneNumber
        
        console.log(this.usuario.email);
        console.log(this.usuario);
      },
      erro =>{
        console.log(erro);
      }
    )
  }
} 





  async logout(){
    try{
        await this.authService.logout();
    }catch(error){
      console.error(error)
    }
  }
}
