import { UsuarioService } from './../services/usuario.service';
import { Usuario } from './../interfaces/usuario';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { Subscription } from 'rxjs';
import { ProdutoService } from '../services/produto.service';
import { AuthService } from '../services/auth.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.page.html',
  styleUrls: ['./pesquisa.page.scss'],
})
export class PesquisaPage implements OnInit {



  // public produtos = new Array<Produto>();
  private produtosSubscription: Subscription;
  public produtos: Produto[];
  resultArr = [];
  public usuarios:Usuario[];
  private usuariosSubscription:Subscription;
  constructor
  (
    public afs: AngularFirestore,
    private produtoService: ProdutoService,
    public authService: AuthService,
    private usuarioService: UsuarioService
  ) 
  {
    // this.produtosSubscription = this.produtoService
    // .getProdutos()
    // .subscribe(data =>{
    //   this.produtos = data;
    // });
   }

   ngOnDestroy() {
    this.produtosSubscription.unsubscribe();
    this.usuariosSubscription.unsubscribe();
  }


  ngOnInit() {
      this.produtoService.getProdutos().subscribe(
        res => {
          this.produtos = res;
          console.log(res);
        }
      )
      // this.usu
   
  }

  loadData(event){
    setTimeout(()=>{
    console.log('Done');
    this.ngOnInit();
    event.target.complete();
      
  }, 500)
  }


  ///Fazendo esse codigo ainda...

  // search(event){
  //   let search:string = event.target.value;
  //   let firstLetter= search.toUpperCase();

  //   if(search.length==0){
  //     this.produtos= [];
  //     this.resultArr= [];
  //   }


  //   if(this.produtos.length == 0){
  //     this.afs.collection('Produtos',ref=>ref.where('SearchIndex','==',firstLetter)).snapshotChanges()
  //     .subscribe(data=>{
  //       data.forEach(childData =>{
  //         this.produtos.push(childData.payload.doc.data())
  //       })
  //     })
  //   }else{
  //     this.resultArr = [];
  //     this.produtos.forEach(val =>{
  //       let nome:string = val['nomeProduto'];
  //       if(nome.toUpperCase().startsWith(search.toUpperCase())){
  //           if(true){
  //             this.resultArr.push(val);
  //           }
  //       }
  //     })
  //   }
  // }

}
