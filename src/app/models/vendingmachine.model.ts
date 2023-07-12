import { Product } from '../models/product.model';
import { Slot } from '../models/slot.model';
import { Row } from '../models/row.model';

// Define the vending machine as a class
export class VendingMachine {
  rows: Row[] = [];

  constructor(rows: Row[]) {
    this.rows = rows;
  }
}
