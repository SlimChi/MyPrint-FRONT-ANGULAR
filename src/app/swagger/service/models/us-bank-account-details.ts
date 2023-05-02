/* tslint:disable */
/* eslint-disable */
import { AchMandate } from './ach-mandate';
export interface UsBankAccountDetails {
  accountHolderName?: string;
  accountType?: string;
  achMandate?: AchMandate;
  bankName?: string;
  imageUrl?: string;
  last4?: string;
  routingNumber?: string;
  token?: string;
}
