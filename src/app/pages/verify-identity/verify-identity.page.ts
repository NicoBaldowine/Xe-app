import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-verify-identity',
  templateUrl: './verify-identity.page.html',
  styleUrls: ['./verify-identity.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class VerifyIdentityPage {
  verificationPoints = [
    { number: '1', text: 'Your id is', highlight: 'not expired' },
    { number: '2', text: 'Your photo is', highlight: 'readable', additional: 'and has no glare' },
    { number: '3', text: 'Your ID is', highlight: 'not cut off', additional: 'in the photo' },
    { number: '4', text: 'Your photo shows the', highlight: 'correct side', additional: 'of the document' }
  ];

  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/transfer-summary']);
  }

  onContinue() {
    this.router.navigate(['/file-number']);
  }
} 