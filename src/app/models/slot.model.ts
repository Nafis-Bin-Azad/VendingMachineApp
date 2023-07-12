import { Product } from './product.model';

export class Slot {
  slotNumber: string;
  product: Product | null;
  capacity: number;

  constructor(
    slotNumber: string,
    capacity: number,
    product: Product | null = null
  ) {
    this.slotNumber = slotNumber;
    this.capacity = capacity;
    this.product = product;
  }
}
