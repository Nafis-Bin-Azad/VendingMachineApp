import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  addDoc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    const productsRef = collection(this.firestore, 'products');
    return collectionData(productsRef, { idField: 'id' }) as Observable<
      Product[]
    >;
  }

  getProductById(id: string): Observable<Product> {
    const productDocRef = doc(this.firestore, `products/${id}`);
    return docData(productDocRef, { idField: 'id' }) as Observable<Product>;
  }

  addProduct(product: Product) {
    const productsRef = collection(this.firestore, 'products');
    return addDoc(productsRef, {
      name: product.name,
      amountInMachine: product.amountInMachine,
      totalStock: product.totalStock,
      totalNotInMachine: product.totalNotInMachine,
      purchasePrice: product.purchasePrice,
      boxSize: product.boxSize,
      slot: product.slot,
    });
  }

  deleteProduct(product: Product) {
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocRef);
  }

  updateProduct(product: Product) {
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return updateDoc(productDocRef, {
      name: product.name,
      amountInMachine: product.amountInMachine,
      totalStock: product.totalStock,
      totalNotInMachine: product.totalNotInMachine,
      purchasePrice: product.purchasePrice,
      boxSize: product.boxSize,
      slot: product.slot,
    });
  }
}
