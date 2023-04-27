/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { CreditCardVerification } from './credit-card-verification';
export interface CreditCard {
  accountType?: string;
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
  networkTokenized?: boolean;
  payroll?: 'Yes' | 'No' | 'Unknown';
  prepaid?: 'Yes' | 'No' | 'Unknown';
  productId?: string;
  token?: string;
  uniqueNumberIdentifier?: string;
  updatedAt?: string;
  venmoSdk?: boolean;
  verification?: CreditCardVerification;
}
