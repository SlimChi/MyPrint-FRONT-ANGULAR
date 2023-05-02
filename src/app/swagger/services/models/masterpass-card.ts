/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
export interface MasterpassCard {
  billingAddress?: Address;
  bin?: string;
  cardType?: string;
  cardholderName?: string;
  commercial?: 'Yes' | 'No' | 'Unknown';
  countryOfIssuance?: string;
  createdAt?: string;
  customerId?: string;
  customerLocation?: string;
  debit?: 'Yes' | 'No' | 'Unknown';
  default?: boolean;
  durbinRegulated?: 'Yes' | 'No' | 'Unknown';
  expirationDate?: string;
  expirationMonth?: string;
  expirationYear?: string;
  expired?: boolean;
  healthcare?: 'Yes' | 'No' | 'Unknown';
  imageUrl?: string;
  issuingBank?: string;
  last4?: string;
  maskedNumber?: string;
  payroll?: 'Yes' | 'No' | 'Unknown';
  prepaid?: 'Yes' | 'No' | 'Unknown';
  productId?: string;
  token?: string;
  uniqueNumberIdentifier?: string;
  updatedAt?: string;
  venmoSdk?: boolean;
}
