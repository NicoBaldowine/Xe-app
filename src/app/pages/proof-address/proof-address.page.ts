import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-proof-address',
  template: `
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button (click)="onBack()">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="content-wrapper">
        <h1>Upload a proof of<br>residential address</h1>

        <div class="requirements-list">
          <div class="requirement success">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <span>Must show your name and current address.</span>
          </div>
          
          <div class="requirement success">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <span>Dated within the last 3 months.</span>
          </div>
          
          <div class="requirement success">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            <span>For example, a utility bill or bank statement.</span>
          </div>
          
          <div class="requirement error">
            <ion-icon name="close-circle-outline"></ion-icon>
            <span>Can't be cropped or blurry.</span>
          </div>
        </div>

        <div class="upload-box" (click)="onUploadClick()">
          <ion-icon name="add-circle-outline"></ion-icon>
          <span>Upload document</span>
        </div>
      </div>

      <ion-button expand="block" [disabled]="!hasUploadedFile" class="continue-button">
        Continue
      </ion-button>
    </ion-content>
  `,
  styleUrls: ['./proof-address.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule]
})
export class ProofAddressPage {
  hasUploadedFile = false;

  constructor(private router: Router) {}

  onBack() {
    this.router.navigate(['/file-number']);
  }

  onUploadClick() {
    // Implement file upload logic here
    console.log('Upload clicked');
  }
}
