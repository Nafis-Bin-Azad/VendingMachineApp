import { Slot } from './slot.model';

export class Row {
  rowNumber: string;
  slots: Slot[];

  constructor(rowNumber: string, slots: Slot[]) {
    this.rowNumber = rowNumber;
    this.slots = slots;
  }
}
