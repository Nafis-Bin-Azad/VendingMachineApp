import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.page.html',
  styleUrls: ['./product-modal.page.scss'],
})
export class ProductModalPage {
  @Input() slot: any;

  constructor(public modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
