/* tslint:disable */
/* eslint-disable */
import { AchMandate } from './ach-mandate';
import { Subscription } from './subscription';
import { UsBankAccountVerification } from './us-bank-account-verification';
export interface UsBankAccount {
  accountHolderName?: string;
  accountType?: string;
  achMandate?: AchMandate;
  bankName?: string;
  customerId?: string;
  default?: boolean;
  imageUrl?: string;
  last4?: string;
  routingNumber?: string;
  subscriptions?: Array<Subscription>;
  token?: string;
  verifications?: Array<UsBankAccountVerification>;
  verified?: boolean;
}
