import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroProdutoPageRoutingModule } from './cadastro-produto-routing.module';
 import { BrMaskerModule } from 'br-mask';
import { CadastroProdutoPage } from './cadastro-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroProdutoPageRoutingModule,
    BrMaskerModule
    
  ],
  declarations: [CadastroProdutoPage]
})
export class CadastroProdutoPageModule {}
