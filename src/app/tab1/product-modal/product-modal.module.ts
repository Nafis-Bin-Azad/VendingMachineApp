import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductModalPage } from './product-modal.page';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  declarations: [ProductModalPage],
})
export class ProductModalPageModule {}
