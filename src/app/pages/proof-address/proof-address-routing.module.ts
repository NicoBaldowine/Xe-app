import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProofAddressPage } from './proof-address.page';

const routes: Routes = [
  {
    path: '',
    component: ProofAddressPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProofAddressPageRoutingModule {}
