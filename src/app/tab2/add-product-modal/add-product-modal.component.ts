import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.scss'],
})
export class AddProductModalComponent implements OnInit {
  @Input() product!: Product;
  productForm!: FormGroup;
  isDisabled: boolean = true;
  isUpdateMode: boolean = false;

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, Validators.required],
      name: ['', Validators.required],
      totalStock: ['', Validators.required],
      purchasePrice: ['', Validators.required],
      boxSize: ['', Validators.required],
      amountInMachine: ['', Validators.required],
      totalNotInMachine: ['', Validators.required],
      slot: ['', Validators.required],
    });
    if (this.product) {
      this.isUpdateMode = true;
      this.productForm = this.formBuilder.group(this.product);
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  saveProduct() {
    if (this.productForm.valid) {
      const product = new Product(
        this.productForm.value.id,
        this.productForm.value.name,
        this.productForm.value.totalStock,
        this.productForm.value.purchasePrice,
        this.productForm.value.boxSize,
        this.productForm.value.amountInMachine,
        this.productForm.value.totalNotInMachine,
        this.productForm.value.slot
      );
      if (this.isUpdateMode) {
        this.productService.updateProduct(product);
      } else {
        this.productService.addProduct(product);
      }
      this.dismiss();
    }
  }
}
