import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { ModalController } from '@ionic/angular';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  products: Product[] = [];

  constructor(
    private modalCtrl: ModalController,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  getStockPercentage(product: Product): number {
    return (product.amountInMachine / product.totalStock) * 100;
  }

  async openModal(product?: Product) {
    const modal = await this.modalCtrl.create({
      component: AddProductModalComponent,
      componentProps: {
        product: product,
      },
    });

    return await modal.present();
  }
  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
  }
}
