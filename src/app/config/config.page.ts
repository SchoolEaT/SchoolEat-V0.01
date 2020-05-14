import { MensagemService } from './../services/mensagem.service';
import { HomePage } from './../home/home.page';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.page.html',
  styleUrls: ['./config.page.scss'],
})
export class ConfigPage implements OnInit {

  constructor(private mensagem:MensagemService) { }

  ngOnInit() {
  }
  public bloqueador(){
    this.mensagem.presentAlert("Aviso","Opção valida para proxima atualização !")
  }
}
