/* tslint:disable */
/* eslint-disable */
import { AddOn } from './add-on';
import { Discount } from './discount';
export interface Plan {
  addOns?: Array<AddOn>;
  billingDayOfMonth?: number;
  billingFrequency?: number;
  createdAt?: string;
  currencyIsoCode?: string;
  description?: string;
  discounts?: Array<Discount>;
  id?: string;
  merchantId?: string;
  name?: string;
  numberOfBillingCycles?: number;
  price?: number;
  trialDuration?: number;
  trialDurationUnit?: 'DAY' | 'MONTH' | 'UNRECOGNIZED';
  updatedAt?: string;
}
