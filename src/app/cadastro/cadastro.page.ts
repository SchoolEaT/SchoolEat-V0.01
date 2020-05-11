import { MensagemService } from './../services/mensagem.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { UsuarioService } from './../services/usuario.service';
import { Subscription } from 'rxjs';
import { AuthService } from './../services/auth.service';
import { Usuario } from './../interfaces/usuario';
import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  public userRegister: Usuario = {};
  private loading: any;
  public cadastro: FormGroup;

  constructor
    (
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService: AuthService,
    private usuarioService:UsuarioService,
    private mensagem:MensagemService,
    private fBuilder: FormBuilder,
    private navCtrl: NavController

    ) {
  }


  ngOnInit() {}

  async register() {
    await this.mensagem.presentLoading();

      
    try {
      this.usuarioService.register(this.userRegister)
        // this.navCtrl.navigateForward(['/tabs/home']);
       
    } catch (error) {
      this.presentToast(error);
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde..."
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }



  
  public passwordType: string = 'password';
  public passwordShow: boolean = false;

  public togglePassword(){
    if(this.passwordShow){
      this.passwordShow = false;
      this.passwordType = 'password';
      console.log("aqui");
  }else{
    this.passwordShow = true;
    this.passwordType = 'text';
    console.log("Aqui /2");
  }
}

}
