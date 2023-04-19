export class PurchaseDto {
  nonce: string;
  amount: number;
  cardholderName:string;
  cvv:string

  constructor(nonce: string,  amount: number, cardholderName:string, cvv:string) {
    this.nonce = nonce;
    this.amount = amount;
    this.cardholderName = cardholderName;
    this.cvv = cvv;
  }
}
