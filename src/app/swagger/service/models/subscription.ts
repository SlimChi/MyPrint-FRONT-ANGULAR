/* tslint:disable */
/* eslint-disable */
import { AddOn } from './add-on';
import { Descriptor } from './descriptor';
import { Discount } from './discount';
import { SubscriptionStatusEvent } from './subscription-status-event';
import { Transaction } from './transaction';
export interface Subscription {
  addOns?: Array<AddOn>;
  balance?: number;
  billingDayOfMonth?: number;
  billingPeriodEndDate?: string;
  billingPeriodStartDate?: string;
  createdAt?: string;
  currentBillingCycle?: number;
  daysPastDue?: number;
  description?: string;
  descriptor?: Descriptor;
  discounts?: Array<Discount>;
  failureCount?: number;
  firstBillingDate?: string;
  id?: string;
  merchantAccountId?: string;
  nextBillingDate?: string;
  nextBillingPeriodAmount?: number;
  numberOfBillingCycles?: number;
  paidThroughDate?: string;
  paymentMethodToken?: string;
  planId?: string;
  price?: number;
  status?: 'Active' | 'Canceled' | 'Expired' | 'Past Due' | 'Pending' | 'Unrecognized';
  statusHistory?: Array<SubscriptionStatusEvent>;
  transactions?: Array<Transaction>;
  trialDuration?: number;
  trialDurationUnit?: 'DAY' | 'MONTH' | 'UNRECOGNIZED';
  updatedAt?: string;
}
