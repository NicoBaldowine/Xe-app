import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileNumberPage } from './file-number.page';

const routes: Routes = [
  {
    path: '',
    component: FileNumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileNumberPageRoutingModule {}
