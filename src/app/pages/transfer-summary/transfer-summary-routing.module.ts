import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferSummaryPage } from './transfer-summary.page';

const routes: Routes = [
  {
    path: '',
    component: TransferSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferSummaryPageRoutingModule {}
