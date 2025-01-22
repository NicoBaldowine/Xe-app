import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProofIdPage } from './proof-id.page';

const routes: Routes = [
  {
    path: '',
    component: ProofIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProofIdPageRoutingModule {}
