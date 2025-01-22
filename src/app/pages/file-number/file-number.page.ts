import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileNumberHelpComponent } from '../../components/file-number-help/file-number-help.component';

@Component({
  selector: 'app-file-number',
  templateUrl: './file-number.page.html',
  styleUrls: ['./file-number.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, FormsModule, FileNumberHelpComponent]
})
export class FileNumberPage {
  fileNumber: string = '';

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) {}

  async showFileNumberHelp() {
    const modal = await this.modalCtrl.create({
      component: FileNumberHelpComponent,
      breakpoints: [0, 0.99],
      initialBreakpoint: 0.99,
      backdropBreakpoint: 0,
      cssClass: 'bottom-sheet-modal',
      handle: true
    });

    return await modal.present();
  }

  onBack() {
    this.router.navigate(['/verify-identity']);
  }

  onContinue() {
    if (this.fileNumber.trim()) {
      this.router.navigate(['/proof-address']);
    }
  }

  get isButtonEnabled(): boolean {
    return this.fileNumber.trim().length > 0;
  }
}
