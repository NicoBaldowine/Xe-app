import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-number-help',
  template: `
    <div class="modal-wrapper">
      <div class="drag-handle"></div>
      
      <div class="icon-wrapper">
        <ion-icon name="information-circle-outline"></ion-icon>
      </div>
      
      <h2>Finding your file number</h2>
      
      <div class="info-text">
        <p>File numbers can be found on the last page of your Indian passport, labelled "File No."</p>
        <p>These are between 12-15 characters long and can be both letters and numbers.</p>
      </div>
      
      <ion-button expand="block" (click)="dismiss()">Learn more</ion-button>
    </div>
  `,
  styles: [`
    .modal-wrapper {
      padding: 16px;
      background: white;
      border-radius: 16px 16px 0 0;
      height: 100%;
    }

    .drag-handle {
      width: 32px;
      height: 4px;
      background: #E8EBED;
      border-radius: 2px;
      margin: 0 auto 32px;
    }

    .icon-wrapper {
      width: 64px;
      height: 64px;
      background: #DAE8F5;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 24px;
    }

    ion-icon {
      font-size: 32px;
      color: #0061CA;
    }

    h2 {
      font-family: 'Inter', sans-serif;
      font-size: 24px;
      font-weight: 600;
      color: #333333;
      margin: 0 0 24px;
      text-align: center;
    }

    .info-text {
      margin-bottom: 32px;
      
      p {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        color: #666666;
        margin: 0 0 16px;
        padding-left: 16px;
        position: relative;
        
        &:before {
          content: "•";
          position: absolute;
          left: 0;
        }
      }
    }

    ion-button {
      --background: #006CE0;
      --border-radius: 8px;
      --padding-top: 16px;
      --padding-bottom: 16px;
      margin: 0;
      height: 48px;
      font-family: 'Inter', sans-serif;
      font-size: 16px;
      font-weight: 600;
      text-transform: none;
    }
  `],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class FileNumberHelpComponent {
  constructor(private modalCtrl: ModalController) {}

  dismiss() {
    this.modalCtrl.dismiss();
  }
} 