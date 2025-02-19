import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class HomePage {
  transferDetails = {
    sendAmount: '1,200.00 NZD',
    exchangeRate: '1.00 USD = 1.008 CLP',
    recipientGets: '89.036 CLP',
    sendFee: '4.99 USD',
    totalCost: '104.99 USD',
    bankName: 'Bank of New Zealand',
    accountNumber: '•••• 4673'
  };

  constructor() {}

  onConfirm() {
    console.log('Transfer confirmed');
  }
}
