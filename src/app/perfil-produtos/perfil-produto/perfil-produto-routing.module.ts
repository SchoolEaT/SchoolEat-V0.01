import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilProdutoPage } from './perfil-produto.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilProdutoPageRoutingModule {}
