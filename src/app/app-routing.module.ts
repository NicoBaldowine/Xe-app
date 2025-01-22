import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transfer-summary',
    pathMatch: 'full'
  },
  {
    path: 'transfer-summary',
    loadComponent: () => import('./pages/transfer-summary/transfer-summary.page').then(m => m.TransferSummaryPage)
  },
  {
    path: 'verify-identity',
    loadComponent: () => import('./pages/verify-identity/verify-identity.page').then(m => m.VerifyIdentityPage)
  },
  {
    path: 'file-number',
    loadComponent: () => import('./pages/file-number/file-number.page').then(m => m.FileNumberPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
