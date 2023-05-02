/* tslint:disable */
/* eslint-disable */
export interface SubscriptionStatusEvent {
  balance?: number;
  currencyIsoCode?: string;
  planId?: string;
  price?: number;
  source?: 'api' | 'control_panel' | 'recurring' | 'unrecognized';
  status?: 'Active' | 'Canceled' | 'Expired' | 'Past Due' | 'Pending' | 'Unrecognized';
  timestamp?: string;
  user?: string;
}
