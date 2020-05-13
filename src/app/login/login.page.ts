import { FormBuilder, Validators } from '@angular/forms';
// import { ResetPasswordService } from './../services/reset-password.service';
import { UsuarioService } from './../services/usuario.service';
import { MensagemService } from './../services/mensagem.service';
import { AuthService } from './../services/auth.service';
import { Usuario } from './../interfaces/usuario';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {




public userLogin: Usuario = {};

private loading: any;



  constructor
(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public authService:AuthService,
    private router:Router,
    private mensagem: MensagemService,
    private navController:NavController,
  
    
) {  }

  ngOnInit() {
  }

async submit(){

  try{
     
     await this.authService.login(this.userLogin);
    this.mensagem.presentAlert("Bem-vindo","Seja bem vindo a SchoolEat ");

    }catch (error){

    console.log("Erro ao logar");
    this.mensagem.presentAlert("Aviso","Email ou senha Invalida !");
    //this.mensagem.presentLoading();
    }
  }
  
  cadastro(){
    this.navController.navigateForward(['/cadastro'])
  }




  async presentLoading(){
    this.loading = await this.loadingCtrl.create({
      message: "Por favor, aguarde..."
    });
    return this.loading.present();
  }

 



  async EsqueciSenha(){
    if(!this.userLogin.email){
      alert('Email não encontrado');
    }
    try{
    await this.authService.EsqueciSenha(this.userLogin.email).then(
      () => this.mensagem.presentAlert("Aviso","Email de recuperação de senha enviado com sucesso !!"),
      (rejectionReason) => alert(rejectionReason)).catch(e => alert('Erro inesperado contate os desenvolvedores'));
    }catch(error){
      this.mensagem.presentToast(error);
    }
  }

  //VÊ SENHA EM PASSWORD E TEXTO
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
  }
}

}
