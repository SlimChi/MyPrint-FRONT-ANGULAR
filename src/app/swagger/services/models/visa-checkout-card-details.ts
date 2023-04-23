/* tslint:disable */
/* eslint-disable */
export interface VisaCheckoutCardDetails {
  bin?: string;
  callId?: string;
  cardType?: string;
  cardholderName?: string;
  commercial?: 'Yes' | 'No' | 'Unknown';
  countryOfIssuance?: string;
  debit?: 'Yes' | 'No' | 'Unknown';
  durbinRegulated?: 'Yes' | 'No' | 'Unknown';
  expirationDate?: string;
  expirationMonth?: string;
  expirationYear?: string;
  healthcare?: 'Yes' | 'No' | 'Unknown';
  imageUrl?: string;
  issuingBank?: string;
  last4?: string;
  maskedNumber?: string;
  payroll?: 'Yes' | 'No' | 'Unknown';
  prepaid?: 'Yes' | 'No' | 'Unknown';
  productId?: string;
  token?: string;
}
