/* tslint:disable */
/* eslint-disable */
import { Address } from './address';
import { AmexExpressCheckoutCard } from './amex-express-checkout-card';
import { AndroidPayCard } from './android-pay-card';
import { ApplePayCard } from './apple-pay-card';
import { CreditCard } from './credit-card';
import { CustomActionsPaymentMethod } from './custom-actions-payment-method';
import { MasterpassCard } from './masterpass-card';
import { PayPalAccount } from './pay-pal-account';
import { PaymentMethod } from './payment-method';
import { SamsungPayCard } from './samsung-pay-card';
import { SepaDirectDebitAccount } from './sepa-direct-debit-account';
import { UsBankAccount } from './us-bank-account';
import { VenmoAccount } from './venmo-account';
import { VisaCheckoutCard } from './visa-checkout-card';
export interface Customer {
  addresses?: Array<Address>;
  /** @deprecated */amexExpressCheckoutCards?: Array<AmexExpressCheckoutCard>;
  androidPayCards?: Array<AndroidPayCard>;
  applePayCards?: Array<ApplePayCard>;
  company?: string;
  createdAt?: string;
  creditCards?: Array<CreditCard>;
  customActionsPaymentMethods?: Array<CustomActionsPaymentMethod>;
  customFields?: {
[key: string]: string;
};
  defaultPaymentMethod?: PaymentMethod;
  email?: string;
  fax?: string;
  firstName?: string;
  graphQLId?: string;
  id?: string;
  lastName?: string;
  /** @deprecated */masterpassCards?: Array<MasterpassCard>;
  payPalAccounts?: Array<PayPalAccount>;
  paymentMethods?: Array<PaymentMethod>;
  phone?: string;
  samsungPayCards?: Array<SamsungPayCard>;
  sepaDirectDebitAccounts?: Array<SepaDirectDebitAccount>;
  updatedAt?: string;
  usBankAccounts?: Array<UsBankAccount>;
  venmoAccounts?: Array<VenmoAccount>;
  visaCheckoutCards?: Array<VisaCheckoutCard>;
  website?: string;
}
