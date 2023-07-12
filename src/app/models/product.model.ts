export class Product {
  id: string;
  name: string;
  amountInMachine: number;
  totalStock: number;
  totalNotInMachine: number;
  purchasePrice: number;
  boxSize: number;
  slot?: number;

  constructor(
    id: string,
    name: string,
    totalStock: number,
    purchasePrice: number,
    boxSize: number,
    amountInMachine = 0,
    totalNotInMachine = totalStock,
    slot?: number
  ) {
    this.id = id;
    this.name = name;
    this.amountInMachine = amountInMachine;
    this.totalStock = totalStock;
    this.totalNotInMachine = totalNotInMachine;
    this.purchasePrice = purchasePrice;
    this.boxSize = boxSize;
    this.slot = slot;
  }
}
