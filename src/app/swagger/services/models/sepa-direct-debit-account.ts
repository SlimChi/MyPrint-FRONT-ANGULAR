/* tslint:disable */
/* eslint-disable */
export interface SepaDirectDebitAccount {
  bankReferenceToken?: string;
  createdAt?: string;
  customerGlobalId?: string;
  customerId?: string;
  default?: boolean;
  globalId?: string;
  imageUrl?: string;
  last4?: string;
  mandateType?: 'ONE_OFF' | 'RECURRENT';
  merchantAccountId?: string;
  merchantOrPartnerCustomerId?: string;
  token?: string;
  updatedAt?: string;
  viewMandateUrl?: string;
}
