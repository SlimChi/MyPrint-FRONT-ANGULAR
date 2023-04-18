export class PurchaseDto {
  nonce: string;
  amount: number;
  constructor(nonce: string,  amount: number) {
    this.nonce = nonce;
    this.amount = amount;
  }
}
