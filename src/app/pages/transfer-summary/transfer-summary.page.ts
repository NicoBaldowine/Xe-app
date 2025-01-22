import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-transfer-summary',
  templateUrl: './transfer-summary.page.html',
  styleUrls: ['./transfer-summary.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class TransferSummaryPage {
  transferDetails = {
    sendAmount: '1,200.00 NZD',
    exchangeRate: '1.00 USD = 1.008 CLP',
    recipientGets: '89.036 CLP',
    sendFee: '4.99 USD',
    totalCost: '104.99 USD',
    bankName: 'Bank of New Zealand',
    accountNumber: '•••• 4673'
  };

  constructor(private router: Router) {}

  onConfirm() {
    this.router.navigate(['/verify-identity']);
  }
}
