import { Routes } from '@angular/router';

export const routes: Routes = [
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
    path: 'file-number',
    loadComponent: () => import('./pages/file-number/file-number.page').then(m => m.FileNumberPage)
  },
  {
    path: 'proof-address',
    loadComponent: () => import('./pages/proof-address/proof-address.page').then(m => m.ProofAddressPage)
  }
]; 