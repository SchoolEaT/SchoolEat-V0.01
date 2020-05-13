import { LoadingController, AlertController, ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor
  (
    private  alertController: AlertController,
    private loadingController: LoadingController,
    private toastCtrl: ToastController
  ) { }

//Alertas na janela 
  async presentAlert(titulo: string, texto: string){
    const alert = await this.alertController.create({
      header: titulo,
      message: texto,
       buttons: ['OK'] 
    });

    await alert.present();
  }

 async presentLoading(){
   return await this.loadingController.create({
     message: 'Aguarde por favor',
     duration: 1000,
   }).then(
     res =>{
       res.present();
     }
   )
 } 

 async dismissLoading(){
   return await this.loadingController.dismiss().then(
     () =>{
        console.log('Loading');
     }
   )
 }
 
 async presentToast(message: string){
  const toast = await this.toastCtrl.create({
    message,
    duration: 6000
  });
  toast.present();
}
}
