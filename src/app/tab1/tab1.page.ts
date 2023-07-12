import { Component } from '@angular/core';
import { VendingMachine } from '../models/vendingmachine.model';
import { ModalController } from '@ionic/angular';
import { ProductModalPage } from './product-modal/product-modal.page';
import { Slot } from '../models/slot.model';
import { Row } from '../models/row.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  vendingMachine: VendingMachine;

  constructor(public modalController: ModalController) {
    this.vendingMachine = new VendingMachine([
      new Row('R1', [
        new Slot('10', 7, null),
        new Slot('11', 7, null),
        new Slot('12', 9, null),
        new Slot('13', 9, null),
        new Slot('14', 13, null),
        new Slot('15', 13, null),
        new Slot('16', 15, null),
      ]),
      new Row('R2', [
        new Slot('20', 7, null),
        new Slot('21', 7, null),
        new Slot('22', 9, null),
        new Slot('23', 9, null),
        new Slot('24', 13, null),
        new Slot('25', 13, null),
        new Slot('26', 15, null),
      ]),
      new Row('R3', [
        new Slot('30', 7, null),
        new Slot('31', 7, null),
        new Slot('32', 9, null),
        new Slot('33', 9, null),
        new Slot('34', 13, null),
        new Slot('35', 13, null),
        new Slot('36', 15, null),
      ]),
      new Row('R4 Cans', [
        new Slot('40', 32, null),
        new Slot('41', 32, null),
        new Slot('42', 32, null),
        new Slot('43', 32, null),
        new Slot('44', 32, null),
      ]),
      new Row('R5 Cans', [
        new Slot('50', 4, null),
        new Slot('51', 4, null),
        new Slot('52', 4, null),
        new Slot('53', 4, null),
        new Slot('54', 4, null),
        new Slot('55', 4, null),
        new Slot('56', 4, null),
      ]),
      new Row('R6 Cans', [
        new Slot('60', 4, null),
        new Slot('61', 4, null),
        new Slot('62', 4, null),
        new Slot('63', 4, null),
        new Slot('64', 4, null),
        new Slot('65', 4, null),
        new Slot('66', 4, null),
      ]),
    ]);
  }

  async openModal(slot: Slot) {
    const modal = await this.modalController.create({
      component: ProductModalPage,
      cssClass: 'my-custom-modal',
      componentProps: {
        slot: slot,
      },
    });
    return await modal.present();
  }
}
